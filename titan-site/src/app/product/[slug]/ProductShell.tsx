"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
} from "react";

/* ── Mouse position context ─────────────────────────────── */

interface MousePos {
  /** normalised –1 → 1 */
  nx: number;
  ny: number;
  /** raw pixel pos */
  x: number;
  y: number;
}

const MouseCtx = createContext<MousePos>({ nx: 0, ny: 0, x: 0, y: 0 });
export const useMouse = () => useContext(MouseCtx);

/* ── Background configs per product ─────────────────────── */

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
  const [mouse, setMouse] = useState<MousePos>({
    nx: 0,
    ny: 0,
    x: 0,
    y: 0,
  });
  const smoothRef = useRef({ nx: 0, ny: 0 });
  const rafRef = useRef<number>(0);
  const rawRef = useRef({ nx: 0, ny: 0, x: 0, y: 0 });
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile.current) return;

    const onMove = (e: MouseEvent) => {
      rawRef.current = {
        nx: (e.clientX / window.innerWidth) * 2 - 1,
        ny: (e.clientY / window.innerHeight) * 2 - 1,
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* smooth damping at 60fps */
  useEffect(() => {
    if (isMobile.current) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const loop = () => {
      smoothRef.current.nx = lerp(
        smoothRef.current.nx,
        rawRef.current.nx,
        0.06
      );
      smoothRef.current.ny = lerp(
        smoothRef.current.ny,
        rawRef.current.ny,
        0.06
      );
      setMouse({
        nx: smoothRef.current.nx,
        ny: smoothRef.current.ny,
        x: rawRef.current.x,
        y: rawRef.current.y,
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <MouseCtx.Provider value={mouse}>
      <div className="relative">
        {/* Background layer */}
        <BackgroundLayer
          productId={productId as ProductId}
          accentColor={accentColor}
          mouse={mouse}
        />
        {/* Lighting overlay */}
        <LightingOverlay mouse={mouse} />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </MouseCtx.Provider>
  );
}

/* ── Product-specific background ────────────────────────── */

function BackgroundLayer({
  productId,
  accentColor,
  mouse,
}: {
  productId: ProductId;
  accentColor: string;
  mouse: MousePos;
}) {
  const bg = useCallback(() => {
    const ox = mouse.nx * 15; // subtle offset in px
    const oy = mouse.ny * 15;

    switch (productId) {
      /* Foundation: subtle structural grid */
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

      /* Prime: radial energy / compression */
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
                transition: "background 0.3s ease-out",
              }}
            />
          </>
        );

      /* Perform: directional flow lines */
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

      /* Fortify: layered depth shadows */
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

function LightingOverlay({ mouse }: { mouse: MousePos }) {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 900px 700px at ${50 + mouse.nx * 12}% ${50 + mouse.ny * 12}%, rgba(215,226,255,0.06), transparent 70%)`,
      }}
    />
  );
}
