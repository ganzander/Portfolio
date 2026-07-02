"use client";

import { useEffect, useRef } from "react";
import { backgroundThemes } from "@/lib/threeConfig";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";

const hexToInt = (hex) => parseInt(hex.replace("#", ""), 16);

/**
 * A glowing, morphing 3D icosahedron rendered with three.js.
 * Replaces the old character model as the hero centerpiece.
 *  - animated vertex "breathing" distortion
 *  - wireframe shell + inner core + orbiting particles
 *  - colors follow the active background theme
 *  - mouse parallax, reduced-motion aware, DPR-capped
 */
export default function HeroObject() {
  const mountRef = useRef(null);
  const { theme } = useBackgroundTheme();
  const accent = (backgroundThemes[theme] ?? backgroundThemes.ember).accent;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mount = mountRef.current;
    if (!mount) return;

    let renderer, scene, camera, frameId, cleanupFns = [];
    let disposed = false;
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    import("three").then((THREE) => {
      if (disposed || !mount) return;

      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.z = 4.2;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      // --- morphing wireframe shell ---
      const geo = new THREE.IcosahedronGeometry(1.35, 6);
      const basePositions = geo.attributes.position.array.slice();

      const shell = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({
          color: hexToInt(accent.base),
          wireframe: true,
          transparent: true,
          opacity: 0.55,
        })
      );
      group.add(shell);

      // --- glowing inner core ---
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.85, 2),
        new THREE.MeshBasicMaterial({
          color: hexToInt(accent.strong),
          transparent: true,
          opacity: 0.14,
          blending: THREE.AdditiveBlending,
        })
      );
      group.add(core);

      // --- orbiting particles ---
      const COUNT = 260;
      const pPos = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const r = 1.9 + Math.random() * 1.1;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pPos[i * 3 + 2] = r * Math.cos(phi);
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      const particles = new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({
          color: hexToInt(accent.light),
          size: 0.035,
          transparent: true,
          opacity: 0.9,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      );
      group.add(particles);

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
      const pos = geo.attributes.position;

      const render = () => {
        const t = clock.getElapsedTime();
        eased.x += (target.x - eased.x) * 0.05;
        eased.y += (target.y - eased.y) * 0.05;

        // breathing vertex distortion
        for (let i = 0; i < pos.count; i++) {
          const ix = i * 3;
          const bx = basePositions[ix];
          const by = basePositions[ix + 1];
          const bz = basePositions[ix + 2];
          const n =
            Math.sin(bx * 3 + t * 1.2) *
            Math.cos(by * 3 + t) *
            Math.sin(bz * 3 + t * 0.8);
          const scale = 1 + n * 0.08;
          pos.array[ix] = bx * scale;
          pos.array[ix + 1] = by * scale;
          pos.array[ix + 2] = bz * scale;
        }
        pos.needsUpdate = true;

        group.rotation.y = t * 0.25 + eased.x * 0.6;
        group.rotation.x = t * 0.08 + eased.y * 0.4;
        particles.rotation.y = -t * 0.12;
        core.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);

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
        geo.dispose();
        pGeo.dispose();
        shell.material.dispose();
        core.geometry.dispose();
        core.material.dispose();
        particles.material.dispose();
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
    // Rebuild with the new palette when the background theme changes.
  }, [theme]);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
}
