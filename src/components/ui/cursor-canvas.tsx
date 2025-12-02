"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";

export function CursorCanvas() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <canvas
      className="pointer-events-none fixed inset-0 z-50"
      id="canvas"
    ></canvas>
  );
}
