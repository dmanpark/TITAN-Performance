"use client";

import { useCallback, type ReactNode } from "react";
import { MouseProvider, useMouse } from "@/lib/use-mouse";

type ProductId = "foundation" | "prime" | "perform" | "fortify";

interface ShellProps {
  productId: string;
  accentColor: string;
  children: ReactNode;
}

export default function ProductShell({
  productId,
  accentColor,
  children,
}: ShellProps) {
  return (
    <MouseProvider>
      <div className="relative">
        <BackgroundLayer
          productId={productId as ProductId}
          accentColor={accentColor}
        />
        <LightingOverlay />
        <div className="relative z-10">{children}</div>
      </div>
    </MouseProvider>
  );
}

/* ── Product-specific background ────────────────────────── */

function BackgroundLayer({
  productId,
  accentColor,
}: {
  productId: ProductId;
  accentColor: string;
}) {
  const mouse = useMouse();

  const bg = useCallback(() => {
    const ox = mouse.nx * 15;
    const oy = mouse.ny * 15;

    switch (productId) {
      case "foundation":
        return (
          <>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #1B263B 1px, transparent 1px),
                  linear-gradient(to bottom, #1B263B 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
                transform: `translate(${ox * 0.3}px, ${oy * 0.3}px)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                background: `radial-gradient(ellipse 600px 600px at ${50 + mouse.nx * 5}% ${50 + mouse.ny * 5}%, ${accentColor}, transparent)`,
              }}
            />
          </>
        );

      case "prime":
        return (
          <>
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                background: `radial-gradient(circle 500px at ${50 + mouse.nx * 8}% ${50 + mouse.ny * 8}%, ${accentColor}, transparent)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                background: `radial-gradient(circle 250px at ${50 + mouse.nx * 12}% ${50 + mouse.ny * 12}%, #1B263B, transparent)`,
              }}
            />
          </>
        );

      case "perform":
        return (
          <>
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  ${90 + mouse.nx * 3}deg,
                  transparent,
                  transparent 40px,
                  #1B263B 40px,
                  #1B263B 41px
                )`,
                transform: `translateX(${ox * 0.8}px)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                background: `linear-gradient(${180 + mouse.nx * 10}deg, ${accentColor} 0%, transparent 60%)`,
              }}
            />
          </>
        );

      case "fortify":
        return (
          <>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                background: `
                  radial-gradient(ellipse 800px 400px at ${48 + mouse.nx * 3}% ${45 + mouse.ny * 3}%, #1B263B, transparent),
                  radial-gradient(ellipse 500px 300px at ${52 + mouse.nx * 6}% ${55 + mouse.ny * 6}%, ${accentColor}, transparent)
                `,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                background: `radial-gradient(circle 300px at ${50 + mouse.nx * 10}% ${50 + mouse.ny * 10}%, #1B263B, transparent)`,
              }}
            />
          </>
        );

      default:
        return null;
    }
  }, [productId, accentColor, mouse.nx, mouse.ny]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {bg()}
    </div>
  );
}

/* ── Global lighting overlay ────────────────────────────── */

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
