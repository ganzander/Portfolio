"use client";

import { useEffect, useRef } from "react";
import { defaultBackgroundConfig, toRGB } from "@/lib/threeConfig";

/**
 * Ambient three.js background with a distinct SCENE STYLE per theme:
 *   drift  — calm floating particle field (classic)
 *   embers — particles rise and flicker like sparks from a fire
 *   stars  — dense twinkling starfield
 *   aurora — flowing aurora-borealis curtains (fragment shader)
 *   nebula — drifting gas clouds + stars (fragment shader)
 *   magma  — molten pool with glowing lava veins low on screen + slow embers
 *
 * The style is chosen via `config.sceneType`; colors/density/motion come from
 * the rest of the config (see src/lib/threeConfig.js). three loads dynamically
 * so it never blocks first paint / SSR.
 */

/* ---------------- GLSL ---------------- */

const NOISE = /* glsl */ `
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for(int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`;

const PLANE_VERT = /* glsl */ `
  void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// Aurora borealis: layered curtains with vertical ray structure.
const AURORA_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime; uniform vec2 uRes; uniform vec2 uPointer;
  uniform vec3 uColA; uniform vec3 uColB;
  ${NOISE}
  void main(){
    vec2 uv = gl_FragCoord.xy / uRes.xy;
    vec2 p = uv + uPointer * 0.03;
    vec3 col = vec3(0.0);
    for(int i = 0; i < 3; i++){
      float fi = float(i);
      float t = uTime * (0.05 + fi * 0.02);
      float curve = 0.56 + fi * 0.12 + 0.2 * fbm(vec2(p.x * 2.1 + t, fi * 13.7));
      float width = 0.05 + 0.06 * fbm(vec2(p.x * 3.7 - t, fi * 7.3));
      float band = exp(-pow((p.y - curve) / width, 2.0));
      float rays = 0.5 + 0.5 * fbm(vec2(p.x * 26.0 + fi * 31.0, p.y * 2.0 - t * 2.5));
      vec3 c = mix(uColA, uColB, clamp(fi * 0.45 + (p.y - 0.4), 0.0, 1.0));
      col += c * band * rays * (0.9 - fi * 0.22);
    }
    col += uColA * 0.04 * (1.0 - uv.y); // faint ground haze
    float a = clamp(max(max(col.r, col.g), col.b), 0.0, 0.85);
    gl_FragColor = vec4(col, a);
  }
`;

// Nebula: slow fbm gas clouds with bright cores.
const NEBULA_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime; uniform vec2 uRes; uniform vec2 uPointer;
  uniform vec3 uColA; uniform vec3 uColB;
  ${NOISE}
  void main(){
    vec2 uv = gl_FragCoord.xy / uRes.xy;
    uv.x *= uRes.x / uRes.y;
    vec2 p = uv * 2.2 + uPointer * 0.06;
    float t = uTime * 0.02;
    float n1 = fbm(p * 1.5 + vec2(t, -t * 0.7));
    float n2 = fbm(p * 3.1 - vec2(t * 1.3, t) + n1);
    float cores = fbm(p * 0.8 + n2);
    vec3 col = uColA * pow(n1, 1.7) * 1.1 + uColB * pow(n2, 2.1) * 0.9;
    col += vec3(1.0) * pow(cores, 7.0) * 0.4;
    float a = clamp(pow(max(n1, n2), 1.9) * 0.7, 0.0, 0.75);
    gl_FragColor = vec4(col, a);
  }
`;

// Magma: a molten pool glowing low along the bottom edge — slow oozing
// turbulence, bright lava veins cracking through a darker crust, and a
// gentle heat pulse. Deliberately slower and lower than open flames.
const MAGMA_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime; uniform vec2 uRes; uniform vec2 uPointer;
  uniform vec3 uColA; uniform vec3 uColB;
  ${NOISE}
  void main(){
    vec2 uv = gl_FragCoord.xy / uRes.xy;
    vec2 p = vec2(uv.x * (uRes.x / uRes.y), uv.y);
    float t = uTime * 0.12; // magma oozes — much slower than fire
    // slow molten turbulence shaping the pool surface
    float n = fbm(vec2(p.x * 2.2 + uPointer.x * 0.1, p.y * 4.0 - t));
    float h = uv.y + (n - 0.5) * 0.12;
    // molten body kept LOW: fades out by ~28% of the viewport height
    float body = 1.0 - smoothstep(0.02, 0.28, h);
    body = pow(body, 1.4);
    // glowing lava veins / cracks inside the pool (ridged noise)
    float vn = fbm(vec2(p.x * 6.0 + t * 0.6, p.y * 9.0 - t * 1.4));
    float veins = pow(1.0 - abs(vn * 2.0 - 1.0), 6.0);
    // slow breathing heat pulse
    float pulse = 0.85 + 0.15 * sin(uTime * 0.8 + n * 6.0);
    // darker crust with hot spots — no white flame core
    vec3 col = mix(uColB, uColA, clamp(body * 1.2 - 0.1, 0.0, 1.0)) * body;
    col += uColA * veins * body * 0.9;
    col += vec3(1.0, 0.75, 0.45) * pow(body, 5.0) * 0.3;
    col *= pulse;
    // faint heat shimmer rising off the surface
    col += uColB * 0.04 * pow(1.0 - uv.y, 3.0);
    float a = clamp(body * 1.05 + veins * body * 0.4, 0.0, 0.85);
    gl_FragColor = vec4(col, a);
  }
`;

// Shared point sprite shaders: optional rise (embers), sway and twinkle.
const POINTS_VERT = /* glsl */ `
  uniform float uTime; uniform float uHeight; uniform float uPR;
  uniform float uRise; uniform float uSway; uniform float uTwinkle;
  attribute float aPhase; attribute float aSize; attribute float aSpeed; attribute float aMix;
  varying float vTw; varying float vMix;
  void main(){
    vec3 pos = position;
    pos.y = mod(pos.y + uTime * aSpeed * uRise + uHeight * 0.5, uHeight) - uHeight * 0.5;
    pos.x += sin(uTime * 0.5 + aPhase) * uSway;
    vTw = mix(1.0, 0.3 + 0.7 * (0.5 + 0.5 * sin(uTime * 2.2 + aPhase * 5.0)), uTwinkle);
    vMix = aMix;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * uPR * (320.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const POINTS_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColA; uniform vec3 uColB; uniform float uOpacity;
  varying float vTw; varying float vMix;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.08, d) * vTw * uOpacity;
    gl_FragColor = vec4(mix(uColA, uColB, vMix), a);
  }
`;

/* ---------------- scene builders ---------------- */

function color3(THREE, hex) {
  const { r, g, b } = toRGB(hex);
  return new THREE.Vector3(r, g, b);
}

function buildPointCloud(THREE, cfg, opts) {
  const { count, rise, sway, twinkle, sizeRange } = opts;
  const positions = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  const sizeA = new Float32Array(count);
  const speed = new Float32Array(count);
  const mixA = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * cfg.spread.x;
    positions[i * 3 + 1] = (Math.random() - 0.5) * cfg.spread.y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * cfg.spread.z;
    phase[i] = Math.random() * Math.PI * 2;
    sizeA[i] = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    speed[i] = 25 + Math.random() * 55;
    mixA[i] = Math.random() < cfg.warmRatio ? 0 : 1;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("aPhase", new THREE.BufferAttribute(phase, 1));
  geo.setAttribute("aSize", new THREE.BufferAttribute(sizeA, 1));
  geo.setAttribute("aSpeed", new THREE.BufferAttribute(speed, 1));
  geo.setAttribute("aMix", new THREE.BufferAttribute(mixA, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: POINTS_VERT,
    fragmentShader: POINTS_FRAG,
    transparent: true,
    depthWrite: false,
    blending: cfg.additiveBlending ? THREE.AdditiveBlending : THREE.NormalBlending,
    uniforms: {
      uTime: { value: 0 },
      uHeight: { value: cfg.spread.y },
      uPR: { value: 1 },
      uRise: { value: rise },
      uSway: { value: sway },
      uTwinkle: { value: twinkle },
      uOpacity: { value: cfg.opacity },
      uColA: { value: color3(THREE, cfg.warmColor) },
      uColB: { value: color3(THREE, cfg.coolColor) },
    },
  });

  const points = new THREE.Points(geo, mat);
  return { points, geo, mat };
}

function buildShaderPlane(THREE, cfg, frag) {
  const geo = new THREE.PlaneGeometry(2, 2);
  const mat = new THREE.ShaderMaterial({
    vertexShader: PLANE_VERT,
    fragmentShader: frag,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uColA: { value: color3(THREE, cfg.warmColor) },
      uColB: { value: color3(THREE, cfg.coolColor) },
    },
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1;
  return { mesh, geo, mat };
}

/** Assemble the scene for a given style; returns { update, resize, dispose }. */
function buildScene(THREE, scene, renderer, cfg) {
  const pr = renderer.getPixelRatio();
  const type = cfg.sceneType || "drift";
  const parts = [];
  let plane = null;
  let cloud = null;

  if (type === "aurora" || type === "nebula") {
    plane = buildShaderPlane(
      THREE,
      cfg,
      type === "aurora" ? AURORA_FRAG : NEBULA_FRAG
    );
    scene.add(plane.mesh);
    parts.push(plane);

    // Sparse star layer behind the shader for depth.
    const starCfg = {
      ...cfg,
      warmColor: "#ffffff",
      coolColor: cfg.coolColor,
      opacity: 0.55,
      additiveBlending: true,
    };
    cloud = buildPointCloud(THREE, starCfg, {
      count: Math.min(700, cfg.count ?? 700),
      rise: 0,
      sway: 0,
      twinkle: 1,
      sizeRange: [0.8, 1.8],
    });
    scene.add(cloud.points);
    parts.push(cloud);
  } else if (type === "magma") {
    // Molten pool shader along the bottom + slow embers drifting off it.
    plane = buildShaderPlane(THREE, cfg, MAGMA_FRAG);
    scene.add(plane.mesh);
    parts.push(plane);

    cloud = buildPointCloud(THREE, cfg, {
      count: cfg.count,
      rise: cfg.riseSpeed ?? 1,
      sway: cfg.swayAmp ?? 30,
      twinkle: 0.9,
      sizeRange: [cfg.size * 0.5, cfg.size * 1.7],
    });
    scene.add(cloud.points);
    parts.push(cloud);
  } else if (type === "embers") {
    cloud = buildPointCloud(THREE, cfg, {
      count: cfg.count,
      rise: cfg.riseSpeed ?? 1,
      sway: cfg.swayAmp ?? 26,
      twinkle: 0.85,
      sizeRange: [cfg.size * 0.6, cfg.size * 2.1],
    });
    scene.add(cloud.points);
    parts.push(cloud);
  } else if (type === "stars") {
    cloud = buildPointCloud(THREE, cfg, {
      count: cfg.count,
      rise: 0,
      sway: 0,
      twinkle: 1,
      sizeRange: [cfg.size * 0.5, cfg.size * 1.6],
    });
    scene.add(cloud.points);
    parts.push(cloud);
  } else {
    // drift — the classic calm field
    cloud = buildPointCloud(THREE, cfg, {
      count: cfg.count,
      rise: 0,
      sway: 10,
      twinkle: 0.35,
      sizeRange: [cfg.size * 0.6, cfg.size * 1.5],
    });
    scene.add(cloud.points);
    parts.push(cloud);
  }

  if (cloud) cloud.mat.uniforms.uPR.value = pr;

  return {
    update(elapsed, pointer) {
      if (plane) {
        plane.mat.uniforms.uTime.value = elapsed;
        plane.mat.uniforms.uPointer.value.set(pointer.x, pointer.y);
      }
      if (cloud) {
        cloud.mat.uniforms.uTime.value = elapsed;
        if (type === "embers" || type === "magma") {
          // rising particles stay upright; only gentle parallax
          cloud.points.rotation.y = pointer.x * cfg.parallaxStrength.x * 0.4;
        } else {
          cloud.points.rotation.y =
            elapsed * cfg.autoRotate.y + pointer.x * cfg.parallaxStrength.x;
          cloud.points.rotation.x =
            elapsed * cfg.autoRotate.x - pointer.y * cfg.parallaxStrength.y;
        }
      }
    },
    resize(w, h) {
      if (plane) plane.mat.uniforms.uRes.value.set(w * pr, h * pr);
    },
    dispose() {
      for (const p of parts) {
        if (p.mesh) scene.remove(p.mesh);
        if (p.points) scene.remove(p.points);
        p.geo.dispose();
        p.mat.dispose();
      }
    },
  };
}

/* ---------------- component ---------------- */

export default function ThreeBackground({ config }) {
  const mountRef = useRef(null);
  const effective = { ...defaultBackgroundConfig, ...config };
  const cfgRef = useRef(effective);
  cfgRef.current = effective;

  useEffect(() => {
    const cfg = { ...cfgRef.current };
    cfg.count =
      cfg.count ??
      (window.innerWidth < cfg.mobileBreakpoint ? cfg.countMobile : cfg.countDesktop);

    const prefersReduced =
      cfg.respectReducedMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer, scene, camera, built, frameId;
    let disposed = false;
    const mount = mountRef.current;
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    import("three").then((THREE) => {
      if (disposed || !mount) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        cfg.fov,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = cfg.cameraZ;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, cfg.maxPixelRatio));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      built = buildScene(THREE, scene, renderer, cfg);
      built.resize(window.innerWidth, window.innerHeight);

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        built.resize(window.innerWidth, window.innerHeight);
      };

      const onPointerMove = (e) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      window.addEventListener("resize", onResize);
      window.addEventListener("pointermove", onPointerMove);

      const clock = new THREE.Clock();

      const render = () => {
        const elapsed = clock.getElapsedTime();
        pointer.x += (target.x - pointer.x) * cfg.parallaxEase;
        pointer.y += (target.y - pointer.y) * cfg.parallaxEase;
        built.update(elapsed, pointer);
        renderer.render(scene, camera);
      };

      const startLoop = () => {
        const loop = () => {
          render();
          frameId = requestAnimationFrame(loop);
        };
        loop();
      };

      if (prefersReduced) {
        render(); // single static frame
      } else {
        startLoop();
      }

      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(frameId);
        } else if (!prefersReduced) {
          startLoop();
        }
      };
      document.addEventListener("visibilitychange", onVisibility);

      mount._cleanup = () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibility);
        cancelAnimationFrame(frameId);
        built.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    });

    return () => {
      disposed = true;
      if (mount && mount._cleanup) mount._cleanup();
    };
    // Re-init the scene when the config (i.e. the selected theme) changes.
  }, [JSON.stringify(config)]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
