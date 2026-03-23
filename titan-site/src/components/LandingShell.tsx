"use client";

import { type ReactNode } from "react";
import { MouseProvider, useMouse } from "@/lib/use-mouse";

export default function LandingShell({ children }: { children: ReactNode }) {
  return (
    <MouseProvider>
      <div className="relative">
        <LandingBackground />
        <LightingOverlay />
        <div className="relative z-10">{children}</div>
      </div>
    </MouseProvider>
  );
}

function LandingBackground() {
  const mouse = useMouse();
  const ox = mouse.nx * 15;
  const oy = mouse.ny * 15;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle structural grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1B263B 1px, transparent 1px),
            linear-gradient(to bottom, #1B263B 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          transform: `translate(${ox * 0.25}px, ${oy * 0.25}px)`,
        }}
      />
      {/* Soft radial accent */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background: `radial-gradient(ellipse 800px 600px at ${50 + mouse.nx * 8}% ${50 + mouse.ny * 8}%, #d7e2ff, transparent)`,
        }}
      />
      {/* Secondary depth layer */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `radial-gradient(circle 400px at ${50 + mouse.nx * 14}% ${50 + mouse.ny * 14}%, #1B263B, transparent)`,
        }}
      />
    </div>
  );
}

function LightingOverlay() {
  const mouse = useMouse();
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 900px 700px at ${50 + mouse.nx * 12}% ${50 + mouse.ny * 12}%, rgba(215,226,255,0.06), transparent 70%)`,
      }}
    />
  );
}
