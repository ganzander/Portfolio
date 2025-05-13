"use client";
import { useEffect, useRef, useState } from "react";

export default function ModelViewer({ modelPath }) {
  const viewerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    import("@google/model-viewer")
      .then((module) => {
        if (!window.customElements.get("model-viewer")) {
          window.customElements.define(
            "model-viewer",
            module.ModelViewerElement
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load model-viewer:", err);
        setError("Failed to load 3D viewer");
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-purple-400/30 bg-black bg-opacity-40 shadow-2xl backdrop-blur-sm">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-purple-500 border-purple-300/30 rounded-full animate-spin"></div>
            <p className="text-white mt-4">Loading 3D model...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
          <p className="text-red-200 bg-red-900/50 px-4 py-2 rounded-md">
            {error}
          </p>
        </div>
      )}

      <model-viewer
        ref={viewerRef}
        src={modelPath}
        alt="3D Model of Ganesh Kumar Mangla's creative work"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        autoPlay
        exposure="0.8"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.85)",
          "--poster-color": "transparent",
        }}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError("Failed to load 3D model");
          setLoading(false);
        }}
      />
    </div>
  );
}
