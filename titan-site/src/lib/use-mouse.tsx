"use client";

import {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  type ReactNode,
} from "react";

export interface MousePos {
  /** normalised –1 → 1 */
  nx: number;
  ny: number;
  /** raw pixel pos */
  x: number;
  y: number;
}

const MouseCtx = createContext<MousePos>({ nx: 0, ny: 0, x: 0, y: 0 });
export const useMouse = () => useContext(MouseCtx);

export function MouseProvider({ children }: { children: ReactNode }) {
  const [mouse, setMouse] = useState<MousePos>({ nx: 0, ny: 0, x: 0, y: 0 });
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

  useEffect(() => {
    if (isMobile.current) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const loop = () => {
      smoothRef.current.nx = lerp(smoothRef.current.nx, rawRef.current.nx, 0.06);
      smoothRef.current.ny = lerp(smoothRef.current.ny, rawRef.current.ny, 0.06);
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

  return <MouseCtx.Provider value={mouse}>{children}</MouseCtx.Provider>;
}
