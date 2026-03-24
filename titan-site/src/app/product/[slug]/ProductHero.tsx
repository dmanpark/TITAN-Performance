"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import ProductActions from "./ProductActions";
import { useMouse } from "@/lib/use-mouse";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const mouse = useMouse();

  const currentImage =
    product.variants && product.variants.length > 0
      ? product.variants[selectedVariant].image
      : product.image;

  const px = mouse.nx * 8;
  const py = mouse.ny * 6;
  const sx = mouse.nx * 12;

  return (
    <div className="bg-[#0c1623] grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-72px)]">

      {/* ── Left: Image panel ──────────────────────────── */}
      <div className="bg-[#111c2d] relative flex flex-col items-center justify-center min-h-[500px] p-10 md:p-14 gap-7 overflow-hidden">

        {/* Subtle grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Radial vignette edge */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(12,22,35,0.5) 100%)",
          }}
        />

        {/* Product image with parallax */}
        <div
          className="relative w-full max-w-[720px] aspect-square flex items-center justify-center z-10"
          style={{
            transform: `translate(${px}px, ${py}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {/* Ambient colour glow behind tub */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 55% at 50% 60%, ${product.color}22 0%, transparent 70%)`,
            }}
          />

          {/* Ground contact shadow — shifts with cursor */}
          <div
            aria-hidden="true"
            className="absolute bottom-[4%] left-1/2 w-[55%] h-[18px] rounded-[50%] blur-[18px] bg-black/50"
            style={{
              transform: `translateX(calc(-50% + ${sx * 0.4}px))`,
            }}
          />

          <Image
            key={currentImage}
            src={currentImage}
            alt={product.name}
            width={740}
            height={740}
            priority
            className="max-w-[740px] w-full object-contain relative z-[1] animate-[heroFloat_6s_ease-in-out_infinite]"
            style={{
              filter:
                "drop-shadow(0 24px 40px rgba(0,0,0,0.55)) drop-shadow(0 6px 14px rgba(0,0,0,0.35))",
            }}
          />
        </div>

        {/* Flavor thumbnail carousel */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex gap-3 relative z-10">
            {product.variants.map((variant, i) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(i)}
                aria-label={`View ${variant.name} flavor`}
                className={[
                  "w-16 h-16 border-2 p-1.5 transition-all duration-200 hover:scale-105",
                  selectedVariant === i
                    ? "border-white/50 bg-white/5"
                    : "border-white/10 hover:border-white/25",
                ].join(" ")}
              >
                <Image
                  src={variant.image}
                  alt={variant.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Right: Info panel ──────────────────────────── */}
      <div className="flex flex-col justify-center gap-7 px-8 py-12 md:px-12 md:py-16 xl:px-16">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/22"
        >
          <Link href="/" className="hover:text-white/45 transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-white/15">/</span>
          <Link href="/shop" className="hover:text-white/45 transition-colors">
            Shop
          </Link>
          <span aria-hidden="true" className="text-white/15">/</span>
          <span className="text-white/38">{product.name}</span>
        </nav>

        {/* Phase / tagline label */}
        <div className="flex items-center gap-3">
          <span className="w-7 h-px bg-white/18 flex-shrink-0" />
          <span className="text-[9px] font-black uppercase tracking-[0.32em] text-white/30">
            {product.tagline}
          </span>
        </div>

        {/* Product title */}
        <h1 className="font-heading font-black text-[clamp(2rem,4.5vw,3.5rem)] uppercase tracking-tight leading-none text-white">
          {product.name}
        </h1>

        {/* Summary */}
        <p className="text-sm text-white/48 leading-relaxed max-w-[400px]">
          {product.summary}
        </p>

        {/* Price row */}
        <div className="flex items-baseline gap-3">
          <span className="font-heading font-black text-[2.25rem] text-white leading-none tracking-tight">
            ${product.price}.00
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/22">
            / 30 servings
          </span>
        </div>

        {/* Quantity + CTA */}
        <ProductActions
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />

        {/* Feature bullets */}
        {product.heroFeatures && product.heroFeatures.length > 0 && (
          <ul className="flex flex-col gap-2.5 pt-3 border-t border-white/[0.07]">
            {product.heroFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-[11px] text-white/38 font-medium"
              >
                <span className="w-5 h-px bg-white/18 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}
