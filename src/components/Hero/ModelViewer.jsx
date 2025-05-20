"use client";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

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
    <div className="relative w-full h-full rounded-lg hover-cursor overflow-hidden bg-opacity-40">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Loading />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
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
        // camera-controls
        // auto-rotate
        autoPlay
        exposure="0.8"
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
