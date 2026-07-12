"use client";

import { useEffect, useRef } from "react";
import { backgroundThemes } from "@/lib/threeConfig";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";

const hexToInt = (hex) => parseInt(hex.replace("#", ""), 16);

// Fresnel rim-glow: bright at grazing angles, transparent face-on.
const FRESNEL_VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main(){
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRESNEL_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform vec3 uColorHot;
  uniform float uIntensity;
  varying vec3 vNormal;
  varying vec3 vView;
  void main(){
    float f = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 2.6);
    vec3 col = mix(uColor, uColorHot, f);
    gl_FragColor = vec4(col, f * uIntensity);
  }
`;

/* ── shared part factories ─────────────────────────────────────────────── */

// Solid, light-shaded ball — gives the core real 3D volume at the center
// (the fresnel shell alone is transparent face-on and reads flat/hollow).
function makeSolidCore(
  THREE,
  accent,
  track,
  radius,
  { emissive = 0.25, roughness = 0.4 } = {}
) {
  const geo = new THREE.SphereGeometry(radius, 64, 48);
  const mat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(accent.strong).multiplyScalar(0.45),
    roughness,
    metalness: 0.25,
    emissive: new THREE.Color(accent.strong),
    emissiveIntensity: emissive,
  });
  track(geo, mat);
  return new THREE.Mesh(geo, mat);
}

function makeFresnelCore(THREE, accent, track, radius = 1.02, intensity = 1) {
  const geo = new THREE.SphereGeometry(radius, 64, 48);
  const mat = new THREE.ShaderMaterial({
    vertexShader: FRESNEL_VERT,
    fragmentShader: FRESNEL_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uColor: { value: new THREE.Color(accent.strong) },
      uColorHot: { value: new THREE.Color(accent.light) },
      uIntensity: { value: intensity },
    },
  });
  track(geo, mat);
  return new THREE.Mesh(geo, mat);
}

function makeRing(THREE, track, { radius, tube, color, opacity, tiltX, tiltY }) {
  const geo = new THREE.TorusGeometry(radius, tube, 8, 160);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const ring = new THREE.Mesh(geo, mat);
  ring.rotation.set(tiltX, tiltY, 0);
  track(geo, mat);
  return ring;
}

/* ── style builders: each returns update(t) ────────────────────────────── */

// Ember — luminous pulse orb: fresnel core + morphing wireframe + 2 rings.
function buildPulse(THREE, group, accent, track) {
  const ball = makeSolidCore(THREE, accent, track, 0.97, { emissive: 0.3 });
  group.add(ball);
  const core = makeFresnelCore(THREE, accent, track);
  group.add(core);

  const shellGeo = new THREE.IcosahedronGeometry(1.42, 5);
  const base = shellGeo.attributes.position.array.slice();
  const shellMat = new THREE.MeshBasicMaterial({
    color: hexToInt(accent.base),
    wireframe: true,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(shellGeo, shellMat));
  track(shellGeo, shellMat);

  const ringA = makeRing(THREE, track, {
    radius: 1.78, tube: 0.012, color: hexToInt(accent.base),
    opacity: 0.55, tiltX: Math.PI / 2.25, tiltY: 0.35,
  });
  const ringB = makeRing(THREE, track, {
    radius: 2.02, tube: 0.006, color: hexToInt(accent.light),
    opacity: 0.3, tiltX: Math.PI / 1.85, tiltY: -0.5,
  });
  group.add(ringA, ringB);

  const pos = shellGeo.attributes.position;
  return (t) => {
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const n =
        Math.sin(base[ix] * 3 + t * 1.1) *
        Math.cos(base[ix + 1] * 3 + t * 0.9) *
        Math.sin(base[ix + 2] * 3 + t * 0.7);
      const s = 1 + n * 0.055;
      pos.array[ix] = base[ix] * s;
      pos.array[ix + 1] = base[ix + 1] * s;
      pos.array[ix + 2] = base[ix + 2] * s;
    }
    pos.needsUpdate = true;
    ringA.rotation.z = t * 0.25;
    ringB.rotation.z = -t * 0.18;
    const breathe = 1 + Math.sin(t * 1.3) * 0.02;
    core.material.uniforms.uIntensity.value = 0.85 + Math.sin(t * 1.3) * 0.18;
    core.scale.setScalar(breathe);
    ball.scale.setScalar(breathe);
    ball.material.emissiveIntensity = 0.26 + Math.sin(t * 1.3) * 0.08;
  };
}

// Nebula — ringed gas giant: soft body + a tilted three-ring disc system.
function buildPlanet(THREE, group, accent, track) {
  const ball = makeSolidCore(THREE, accent, track, 1.05, {
    emissive: 0.18,
    roughness: 0.55,
  });
  group.add(ball);
  const core = makeFresnelCore(THREE, accent, track, 1.12, 0.9);
  group.add(core);

  const disc = new THREE.Group();
  // Horizontal ring plane — just shy of exactly flat so the rings read as an
  // ellipse instead of vanishing edge-on at eye level.
  disc.rotation.set(Math.PI / 2.12, 0, 0);
  const specs = [
    { radius: 1.62, tube: 0.028, opacity: 0.5, color: hexToInt(accent.base) },
    { radius: 1.86, tube: 0.014, opacity: 0.35, color: hexToInt(accent.light) },
    { radius: 2.12, tube: 0.04, opacity: 0.2, color: hexToInt(accent.base) },
  ];
  const rings = specs.map((s) => {
    const geo = new THREE.TorusGeometry(s.radius, s.tube, 8, 200);
    const mat = new THREE.MeshBasicMaterial({
      color: s.color,
      transparent: true,
      opacity: s.opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    track(geo, mat);
    const m = new THREE.Mesh(geo, mat);
    disc.add(m);
    return m;
  });
  group.add(disc);

  return (t) => {
    rings[0].rotation.z = t * 0.12;
    rings[1].rotation.z = -t * 0.08;
    rings[2].rotation.z = t * 0.05;
    core.material.uniforms.uIntensity.value = 0.8 + Math.sin(t * 0.9) * 0.12;
  };
}

// Aurora — waving light curtains: two counter-rotating shader ribbons with
// vertical rays and undulating waves wrapped around a soft core.
const CURTAIN_VERT = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  void main(){
    vUv = uv;
    vec3 p = position;
    float ang = atan(p.x, p.z);
    p.y += sin(ang * 5.0 + uTime * 1.2) * 0.09 + sin(ang * 9.0 - uTime * 0.8) * 0.045;
    float rad = 1.0 + sin(ang * 3.0 + uTime * 0.6) * 0.035;
    p.x *= rad;
    p.z *= rad;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const CURTAIN_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec3 uColA;
  uniform vec3 uColB;
  uniform float uAlpha;
  varying vec2 vUv;
  void main(){
    float rays = 0.5 + 0.5 * sin(vUv.x * 42.0 + sin(vUv.x * 13.0 + uTime * 0.7) * 3.0);
    rays = pow(rays, 1.6);
    float edge = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
    vec3 col = mix(uColA, uColB, vUv.y);
    gl_FragColor = vec4(col, (0.12 + 0.88 * rays) * edge * uAlpha);
  }
`;

function buildAuroraCurtains(THREE, group, accent, track) {
  const ball = makeSolidCore(THREE, accent, track, 0.9, {
    emissive: 0.2,
    roughness: 0.5,
  });
  group.add(ball);
  const core = makeFresnelCore(THREE, accent, track, 0.95, 0.8);
  group.add(core);

  const makeCurtain = (radius, height, arc, alpha) => {
    const geo = new THREE.CylinderGeometry(
      radius, radius, height, 128, 24, true, 0, arc
    );
    const mat = new THREE.ShaderMaterial({
      vertexShader: CURTAIN_VERT,
      fragmentShader: CURTAIN_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uColA: { value: new THREE.Color(accent.base) },
        uColB: { value: new THREE.Color(accent.light) },
        uAlpha: { value: alpha },
      },
    });
    track(geo, mat);
    return new THREE.Mesh(geo, mat);
  };

  const outer = makeCurtain(1.8, 1.5, Math.PI * 1.6, 0.5);
  const inner = makeCurtain(1.38, 1.05, Math.PI * 1.3, 0.32);
  inner.rotation.y = Math.PI * 0.8;
  group.add(outer, inner);

  return (t) => {
    outer.material.uniforms.uTime.value = t;
    inner.material.uniforms.uTime.value = t * 1.3;
    outer.rotation.y = t * 0.1;
    inner.rotation.y = Math.PI * 0.8 - t * 0.16;
    core.material.uniforms.uIntensity.value = 0.7 + Math.sin(t * 1.1) * 0.15;
  };
}

// Starfield — constellation sphere: star nodes joined to their neighbours.
function buildConstellation(THREE, group, accent, track) {
  const ball = makeSolidCore(THREE, accent, track, 0.5, { emissive: 0.4 });
  group.add(ball);
  const core = makeFresnelCore(THREE, accent, track, 0.9, 0.45);
  group.add(core);

  const N = 70;
  const R = 1.55;
  const pts = [];
  for (let i = 0; i < N; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
    const th = Math.PI * (1 + Math.sqrt(5)) * i;
    pts.push(
      new THREE.Vector3(
        R * Math.sin(phi) * Math.cos(th),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.sin(th)
      )
    );
  }

  const starGeo = new THREE.BufferGeometry().setFromPoints(pts);
  const starMat = new THREE.PointsMaterial({
    color: hexToInt(accent.light),
    size: 0.05,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  group.add(new THREE.Points(starGeo, starMat));
  track(starGeo, starMat);

  // connect each star to its two nearest neighbours
  const linePts = [];
  for (let i = 0; i < N; i++) {
    const d = pts
      .map((p, j) => ({ j, d: i === j ? Infinity : p.distanceTo(pts[i]) }))
      .sort((a, b) => a.d - b.d);
    for (let k = 0; k < 2; k++) {
      if (d[k].j > i) linePts.push(pts[i], pts[d[k].j]);
    }
  }
  const lineGeo = new THREE.BufferGeometry().setFromPoints(linePts);
  const lineMat = new THREE.LineBasicMaterial({
    color: hexToInt(accent.base),
    transparent: true,
    opacity: 0.28,
    blending: THREE.AdditiveBlending,
  });
  group.add(new THREE.LineSegments(lineGeo, lineMat));
  track(lineGeo, lineMat);

  return (t) => {
    starMat.opacity = 0.7 + Math.sin(t * 2.1) * 0.25;
    lineMat.opacity = 0.2 + Math.sin(t * 1.3 + 1) * 0.1;
    core.material.uniforms.uIntensity.value = 0.4 + Math.sin(t * 0.8) * 0.08;
  };
}

// Magma — violently breathing molten core (no ring — raw and elemental).
function buildMolten(THREE, group, accent, track) {
  const ball = makeSolidCore(THREE, accent, track, 0.95, {
    emissive: 0.5,
    roughness: 0.3,
  });
  group.add(ball);
  const core = makeFresnelCore(THREE, accent, track, 1.0, 1.25);
  group.add(core);

  const shellGeo = new THREE.IcosahedronGeometry(1.38, 5);
  const base = shellGeo.attributes.position.array.slice();
  const shellMat = new THREE.MeshBasicMaterial({
    color: hexToInt(accent.strong),
    wireframe: true,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(shellGeo, shellMat));
  track(shellGeo, shellMat);

  const pos = shellGeo.attributes.position;
  return (t) => {
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const n =
        Math.sin(base[ix] * 4 + t * 2.6) *
        Math.cos(base[ix + 1] * 4 + t * 2.1) *
        Math.sin(base[ix + 2] * 4 + t * 1.8);
      const s = 1 + n * 0.12;
      pos.array[ix] = base[ix] * s;
      pos.array[ix + 1] = base[ix + 1] * s;
      pos.array[ix + 2] = base[ix + 2] * s;
    }
    pos.needsUpdate = true;
    const beat = Math.sin(t * 4.2);
    core.material.uniforms.uIntensity.value = 1.0 + beat * 0.32;
    core.scale.setScalar(1 + beat * 0.045);
    ball.scale.setScalar(1 + beat * 0.045);
    ball.material.emissiveIntensity = 0.45 + beat * 0.2;
  };
}

const BUILDERS = {
  pulse: buildPulse,
  planet: buildPlanet,
  curtains: buildAuroraCurtains,
  constellation: buildConstellation,
  molten: buildMolten,
};

/**
 * Hero centerpiece with a distinct STYLE per theme (set via `heroStyle` in
 * threeConfig): pulse orb, ringed planet, magnetic field lines, constellation
 * sphere or molten core. Colors follow the theme accent; optional orbiting
 * dots via `heroDots`; reduced-motion renders a single static frame.
 */
export default function HeroObject() {
  const mountRef = useRef(null);
  const { theme } = useBackgroundTheme();
  const entry = backgroundThemes[theme] ?? backgroundThemes.ember;
  const accent = entry.accent;
  const style = entry.config?.heroStyle ?? "pulse";
  const showDots = entry.config?.heroDots ?? false;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mount = mountRef.current;
    if (!mount) return;

    let renderer, frameId;
    let disposed = false;
    const cleanupFns = [];
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    import("three").then((THREE) => {
      if (disposed || !mount) return;

      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.z = 4.2;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);
      const disposables = [];
      const track = (...items) => disposables.push(...items);

      // lighting for the solid shaded core (key + fill)
      const key = new THREE.DirectionalLight(0xffffff, 1.2);
      key.position.set(2.5, 2.5, 4);
      scene.add(key);
      scene.add(new THREE.AmbientLight(0xffffff, 0.3));

      const build = BUILDERS[style] || buildPulse;
      const updateStyle = build(THREE, group, accent, track);

      // optional orbiting dots (theme-configurable)
      let particles = null;
      if (showDots) {
        const COUNT = 220;
        const pPos = new Float32Array(COUNT * 3);
        for (let i = 0; i < COUNT; i++) {
          const r = 2.1 + Math.random() * 0.9;
          const th = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          pPos[i * 3] = r * Math.sin(phi) * Math.cos(th);
          pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(th);
          pPos[i * 3 + 2] = r * Math.cos(phi);
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
          color: hexToInt(accent.light),
          size: 0.03,
          transparent: true,
          opacity: 0.8,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        particles = new THREE.Points(pGeo, pMat);
        group.add(particles);
        track(pGeo, pMat);
      }

      const onResize = () => {
        const nw = mount.clientWidth || 1;
        const nh = mount.clientHeight || 1;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      const onPointer = (e) => {
        const r = mount.getBoundingClientRect();
        target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      };
      window.addEventListener("resize", onResize);
      window.addEventListener("pointermove", onPointer);
      cleanupFns.push(() => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointer);
      });

      const clock = new THREE.Clock();

      const render = () => {
        const t = clock.getElapsedTime();
        eased.x += (target.x - eased.x) * 0.05;
        eased.y += (target.y - eased.y) * 0.05;

        group.rotation.y = t * 0.18 + eased.x * 0.55;
        // bounded pitch wobble (an ever-growing t * 0.05 would slowly tumble
        // the orb — and tilt the planet's horizontal rings over time)
        group.rotation.x = Math.sin(t * 0.12) * 0.07 + eased.y * 0.35;

        updateStyle(t);
        if (particles) particles.rotation.y = -t * 0.1;

        renderer.render(scene, camera);
      };

      if (prefersReduced) {
        render();
      } else {
        const loop = () => {
          render();
          frameId = requestAnimationFrame(loop);
        };
        loop();
      }

      cleanupFns.push(() => {
        cancelAnimationFrame(frameId);
        disposables.forEach((d) => d.dispose());
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      });
    });

    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
    };
    // Rebuild when the theme (style / accent / dots) changes.
  }, [theme, style, showDots]);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
}
