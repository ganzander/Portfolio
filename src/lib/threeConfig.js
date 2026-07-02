/**
 * Configuration for the ambient three.js particle background.
 *
 * Tweak these values (or pass a partial `config` prop to <ThreeBackground />)
 * to restyle the scene without touching the render code.
 *
 * A few ready-made presets are exported below — import one and spread it, e.g.
 *   <ThreeBackground config={backgroundPresets.nebula} />
 */
export const defaultBackgroundConfig = {
  // Scene style: "drift" | "embers" | "stars" | "aurora" | "nebula".
  // Each renders a genuinely different backdrop (see ThreeBackground.jsx).
  sceneType: "drift",
  // Rising-ember tuning (used by sceneType "embers").
  riseSpeed: 1,
  swayAmp: 26,

  // Particle count. If `count` is null it is derived from viewport width
  // using `countDesktop` / `countMobile`.
  count: null,
  countDesktop: 1800,
  countMobile: 900,
  mobileBreakpoint: 768,

  // Colors (hex or 0x). `warmRatio` = fraction of particles using warmColor.
  warmColor: "#fa7317",
  coolColor: "#8c8c9e",
  warmRatio: 0.28,

  // Spread of the point cloud around the origin (world units).
  spread: { x: 1400, y: 900, z: 800 },

  // Point appearance.
  size: 2.4,
  opacity: 0.7,
  additiveBlending: true,

  // Motion.
  autoRotate: { x: 0.012, y: 0.03 }, // radians per second
  parallaxStrength: { x: 0.25, y: 0.18 }, // response to pointer
  parallaxEase: 0.04, // 0..1 smoothing per frame

  // Camera.
  cameraZ: 400,
  fov: 70,

  // Performance.
  maxPixelRatio: 1.5,

  // Respect the OS "reduce motion" setting (renders one static frame).
  respectReducedMotion: true,

  // Overrides applied only in light mode (merged over the base config).
  // Additive blending disappears on white, so light mode uses normal blending
  // with darker, warmer particles so the field stays visible.
  light: {
    warmColor: "#ea580c",
    coolColor: "#94a3b8",
    opacity: 0.55,
    size: 2.2,
    additiveBlending: false,
  },
};

/**
 * Full background themes for the theme switcher. Each one completely changes
 * the backdrop: particle scene (colors/density/motion) + page tint via the
 * `data-bg-theme` attribute styled in globals.css. `swatch` colors the picker.
 */
export const backgroundThemes = {
  ember: {
    label: "Ember",
    swatch: ["#f97316", "#1c1108"],
    accent: { base: "#f97316", strong: "#ea580c", light: "#ffb877" },
    config: {
      ...defaultBackgroundConfig,
      sceneType: "embers", // sparks drifting upward
      countDesktop: 900,
      countMobile: 450,
      warmColor: "#f97316",
      coolColor: "#fbbf24",
      warmRatio: 0.6,
      size: 2.6,
      opacity: 0.8,
    },
  },
  nebula: {
    label: "Nebula",
    swatch: ["#818cf8", "#0b0b1e"],
    accent: { base: "#818cf8", strong: "#6366f1", light: "#c7d2fe" },
    config: {
      ...defaultBackgroundConfig,
      sceneType: "nebula", // drifting gas clouds + stars
      countDesktop: 700,
      countMobile: 350,
      warmColor: "#6366f1",
      coolColor: "#38bdf8",
      warmRatio: 0.5,
      size: 1.9,
      opacity: 0.8,
      autoRotate: { x: 0.006, y: 0.018 },
    },
  },
  aurora: {
    label: "Aurora",
    swatch: ["#2dd4bf", "#04131a"],
    accent: { base: "#2dd4bf", strong: "#14b8a6", light: "#99f6e4" },
    config: {
      ...defaultBackgroundConfig,
      sceneType: "aurora", // flowing aurora-borealis curtains
      countDesktop: 600,
      countMobile: 300,
      warmColor: "#2dd4bf",
      coolColor: "#818cf8",
      warmRatio: 0.55,
      size: 2.2,
      opacity: 0.75,
      parallaxStrength: { x: 0.35, y: 0.25 },
    },
  },
  starfield: {
    label: "Starfield",
    swatch: ["#e2e8f0", "#05060d"],
    accent: { base: "#93c5fd", strong: "#60a5fa", light: "#dbeafe" },
    config: {
      ...defaultBackgroundConfig,
      sceneType: "stars", // dense twinkling starfield
      countDesktop: 3200,
      countMobile: 1400,
      warmColor: "#f8fafc",
      coolColor: "#94a3b8",
      warmRatio: 0.4,
      size: 1.6,
      opacity: 0.9,
      autoRotate: { x: 0.002, y: 0.006 },
      parallaxStrength: { x: 0.1, y: 0.08 },
    },
  },
  magma: {
    label: "Magma",
    swatch: ["#ef4444", "#1a0505"],
    accent: { base: "#ef4444", strong: "#dc2626", light: "#fca5a5" },
    config: {
      ...defaultBackgroundConfig,
      sceneType: "magma", // molten pool low on screen + slow drifting embers
      riseSpeed: 1.0,
      swayAmp: 30,
      countDesktop: 700,
      countMobile: 350,
      warmColor: "#f97316", // glowing vein / ember highlights
      coolColor: "#991b1b", // deep molten base
      warmRatio: 0.55,
      size: 2.8,
      opacity: 0.8,
      parallaxStrength: { x: 0.4, y: 0.3 },
    },
  },
};

export const backgroundPresets = {
  // Calm, sparse, brand default
  default: defaultBackgroundConfig,

  // Denser, cooler, slower — good for content-heavy pages
  nebula: {
    ...defaultBackgroundConfig,
    countDesktop: 2600,
    warmColor: "#6ea8ff",
    coolColor: "#aab0c8",
    warmRatio: 0.2,
    size: 1.8,
    autoRotate: { x: 0.006, y: 0.016 },
  },

  // Punchy, bright, energetic
  ember: {
    ...defaultBackgroundConfig,
    warmColor: "#ff5e00",
    coolColor: "#ffb877",
    warmRatio: 0.55,
    size: 3.0,
    opacity: 0.85,
    autoRotate: { x: 0.02, y: 0.05 },
  },

  // Minimal — few, quiet particles
  minimal: {
    ...defaultBackgroundConfig,
    countDesktop: 700,
    countMobile: 400,
    warmRatio: 0.15,
    size: 2.0,
    opacity: 0.5,
    autoRotate: { x: 0.004, y: 0.01 },
    parallaxStrength: { x: 0.12, y: 0.09 },
  },
};

/** Convert a "#rrggbb" (or 0xrrggbb number) to normalized {r,g,b} 0..1. */
export function toRGB(color) {
  const n =
    typeof color === "number" ? color : parseInt(String(color).replace("#", ""), 16);
  return {
    r: ((n >> 16) & 255) / 255,
    g: ((n >> 8) & 255) / 255,
    b: (n & 255) / 255,
  };
}
