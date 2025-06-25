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
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-opacity-40 bg-white/5">
      {/* Simple Spinner Loader */}
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-red-200 bg-red-900/50 px-4 py-2 rounded-md">
            {error}
          </p>
        </div>
      )}

      {/* 3D Viewer */}
      <model-viewer
        ref={viewerRef}
        src={modelPath}
        alt="3D Model of Ganesh Kumar Mangla's creative work"
        camera-controls
        disable-zoom
        interaction-prompt="none"
        auto-rotate
        autoPlay
        environment-image="neutral"
        shadow-intensity="1"
        camera-orbit="0deg 90deg auto"
        min-camera-orbit="auto 90deg auto"
        max-camera-orbit="auto 90deg auto"
        style={{
          width: "100%",
          height: "100%",
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
