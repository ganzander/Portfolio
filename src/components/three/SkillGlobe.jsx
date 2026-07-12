"use client";

import { useEffect, useRef } from "react";
import { backgroundThemes } from "@/lib/threeConfig";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";

const hexToInt = (hex) => parseInt(hex.replace("#", ""), 16);

/**
 * Interactive 3D skill globe.
 *  - Every skill from skills.js renders as its framework LOGO on a slowly
 *    rotating Fibonacci sphere (core skills get an accent glow ring).
 *  - Hover a logo → tooltip with the name, rotation eases down, logo pops.
 *  - Click / tap a logo → onSelect(skill) so the parent can open a dialog.
 *  - Far-side logos fade for depth; theme changes rebuild the accent parts.
 */
export default function SkillGlobe({ skills, onSelect }) {
  const mountRef = useRef(null);
  const tooltipRef = useRef(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const { theme } = useBackgroundTheme();
  const accent = (backgroundThemes[theme] ?? backgroundThemes.ember).accent;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mount = mountRef.current;
    const tooltip = tooltipRef.current;
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
      camera.position.z = 5.4;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);
      const R = 2.0;

      // Faint accent wireframe sphere for structure
      const wire = new THREE.Mesh(
        new THREE.SphereGeometry(R * 0.96, 24, 16),
        new THREE.MeshBasicMaterial({
          color: hexToInt(accent.base),
          wireframe: true,
          transparent: true,
          opacity: 0.06,
        })
      );
      group.add(wire);

      // ── Icon sprite factory ────────────────────────────────────────────
      // Draws the logo inside a soft glass disc; core skills get an accent
      // ring + glow so they read as highlights.
      const makeIconSprite = (skill) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            const S = 176; // canvas size (2x for crispness)
            const cv = document.createElement("canvas");
            cv.width = S;
            cv.height = S;
            const ctx = cv.getContext("2d");
            const c = S / 2;

            // glass disc
            ctx.beginPath();
            ctx.arc(c, c, c - 8, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.07)";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = skill.core
              ? accent.base
              : "rgba(255,255,255,0.22)";
            if (skill.core) {
              ctx.shadowColor = accent.base;
              ctx.shadowBlur = 18;
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // logo
            const iconSize = S * 0.46;
            ctx.drawImage(
              img,
              c - iconSize / 2,
              c - iconSize / 2,
              iconSize,
              iconSize
            );

            const tex = new THREE.CanvasTexture(cv);
            tex.anisotropy = 4;
            const mat = new THREE.SpriteMaterial({
              map: tex,
              transparent: true,
              depthWrite: false,
            });
            const sprite = new THREE.Sprite(mat);
            const base = skill.core ? 0.62 : 0.5;
            sprite.scale.set(base, base, 1);
            sprite.userData = { skill, baseScale: base, hover: 0 };
            resolve({ sprite, tex, mat });
          };
          img.onerror = () => resolve(null);
          img.src = skill.icon;
        });

      const sprites = [];
      const disposables = [];

      Promise.all(skills.map(makeIconSprite)).then((made) => {
        if (disposed) return;
        const ok = made.filter(Boolean);
        const n = ok.length;
        ok.forEach(({ sprite, tex, mat }, i) => {
          // Fibonacci sphere distribution
          const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
          const th = Math.PI * (1 + Math.sqrt(5)) * i;
          sprite.position.set(
            R * Math.sin(phi) * Math.cos(th),
            R * Math.cos(phi),
            R * Math.sin(phi) * Math.sin(th)
          );
          group.add(sprite);
          sprites.push(sprite);
          disposables.push(tex, mat);
        });
      });

      // ── Interaction: hover tooltip + click dialog ──────────────────────
      const raycaster = new THREE.Raycaster();
      const ndc = new THREE.Vector2();
      let hovered = null;
      let hoverSlow = 0; // 0 = full speed, 1 = slowed

      const pick = (clientX, clientY) => {
        const r = renderer.domElement.getBoundingClientRect();
        ndc.x = ((clientX - r.left) / r.width) * 2 - 1;
        ndc.y = -((clientY - r.top) / r.height) * 2 + 1;
        raycaster.setFromCamera(ndc, camera);
        const hits = raycaster.intersectObjects(sprites, false);
        return hits.length ? hits[0].object : null;
      };

      const onMove = (e) => {
        const r = mount.getBoundingClientRect();
        target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;

        const hit = pick(e.clientX, e.clientY);
        hovered = hit;
        renderer.domElement.style.cursor = hit ? "pointer" : "";
        if (tooltip) {
          if (hit) {
            tooltip.textContent = hit.userData.skill.name;
            tooltip.style.opacity = "1";
            tooltip.style.transform = `translate(${e.clientX - r.left + 14}px, ${
              e.clientY - r.top - 34
            }px)`;
          } else {
            tooltip.style.opacity = "0";
          }
        }
      };

      const onLeave = () => {
        hovered = null;
        if (tooltip) tooltip.style.opacity = "0";
      };

      const onClick = (e) => {
        const hit = pick(e.clientX, e.clientY);
        if (hit && onSelectRef.current) onSelectRef.current(hit.userData.skill);
      };

      const onResize = () => {
        const nw = mount.clientWidth || 1;
        const nh = mount.clientHeight || 1;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };

      renderer.domElement.addEventListener("pointermove", onMove);
      renderer.domElement.addEventListener("pointerleave", onLeave);
      renderer.domElement.addEventListener("click", onClick);
      window.addEventListener("resize", onResize);
      cleanupFns.push(() => {
        renderer.domElement.removeEventListener("pointermove", onMove);
        renderer.domElement.removeEventListener("pointerleave", onLeave);
        renderer.domElement.removeEventListener("click", onClick);
        window.removeEventListener("resize", onResize);
      });

      const clock = new THREE.Clock();
      const worldPos = new THREE.Vector3();
      let spin = 0;

      const render = () => {
        const t = clock.getElapsedTime();
        eased.x += (target.x - eased.x) * 0.05;
        eased.y += (target.y - eased.y) * 0.05;

        // ease rotation down while something is hovered (easier clicking)
        hoverSlow += ((hovered ? 1 : 0) - hoverSlow) * 0.08;
        spin += 0.0022 * (1 - hoverSlow * 0.85);

        group.rotation.y = spin + eased.x * 0.9;
        group.rotation.x = Math.sin(t * 0.18) * 0.08 + eased.y * 0.4;

        for (const s of sprites) {
          // depth fade
          s.getWorldPosition(worldPos);
          const f = (worldPos.z + R) / (2 * R);
          s.material.opacity = 0.18 + f * 0.82;
          // hover pop
          const hv = s === hovered ? 1 : 0;
          s.userData.hover += (hv - s.userData.hover) * 0.15;
          const sc = s.userData.baseScale * (1 + s.userData.hover * 0.35);
          s.scale.set(sc, sc, 1);
          if (s === hovered) s.material.opacity = 1;
        }
        renderer.render(scene, camera);
      };

      if (prefersReduced) {
        setTimeout(render, 350); // one frame once sprites resolve
      } else {
        const loop = () => {
          render();
          frameId = requestAnimationFrame(loop);
        };
        loop();
      }

      cleanupFns.push(() => {
        cancelAnimationFrame(frameId);
        wire.geometry.dispose();
        wire.material.dispose();
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
    // Rebuild when the theme (accent) or the skill list changes.
  }, [theme, skills]);

  return (
    <div ref={mountRef} className="relative h-full w-full">
      {/* hover tooltip (imperatively positioned — no re-renders per frame) */}
      <div
        ref={tooltipRef}
        className="glass-strong pointer-events-none absolute left-0 top-0 z-10 rounded-full px-3 py-1 text-xs font-medium text-foreground opacity-0 transition-opacity duration-150"
      />
    </div>
  );
}
