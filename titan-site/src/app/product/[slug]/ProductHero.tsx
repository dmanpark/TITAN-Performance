"use client";

import { useState } from "react";
import Image from "next/image";
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

  /* parallax offsets (clamped, very subtle) */
  const px = mouse.nx * 8;
  const py = mouse.ny * 6;
  /* shadow reacts to cursor */
  const sx = mouse.nx * 12;
  const sy = 20 + mouse.ny * 8;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Gallery */}
      <div className="bg-surface-dim flex flex-col items-center justify-center min-h-[500px] p-12 gap-6 overflow-hidden">
        <div
          className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
          style={{
            transform: `translate(${px}px, ${py}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {/* Reactive shadow under product */}
          <div
            className="absolute bottom-[-8px] left-1/2 w-[65%] h-[18px] rounded-[50%] bg-navy/[0.07] blur-[12px]"
            style={{
              transform: `translateX(calc(-50% + ${sx * 0.5}px))`,
              opacity: 0.6 + mouse.ny * 0.15,
            }}
          />
          <Image
            key={currentImage}
            src={currentImage}
            alt={product.name}
            width={400}
            height={400}
            className="max-w-[400px] w-full object-contain animate-[heroFloat_6s_ease-in-out_infinite] relative z-[1]"
            style={{ animationDelay: "0s" }}
          />
        </div>

        {/* Flavor thumbnail carousel */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex gap-3">
            {product.variants.map((variant, i) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(i)}
                className={`w-16 h-16 border-2 p-1.5 transition-all duration-200 hover:scale-105 ${
                  selectedVariant === i
                    ? "border-navy"
                    : "border-navy/10 hover:border-navy/30"
                }`}
                aria-label={`View ${variant.name} flavor`}
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

      {/* Info */}
      <div className="p-8 md:p-12 flex flex-col gap-6 justify-center">
        <span className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-steel/60">
          {product.tagline}
        </span>
        <h1 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] uppercase tracking-tight">
          {product.name}
        </h1>
        <p className="text-base text-steel leading-relaxed max-w-[480px]">
          {product.summary}
        </p>
        <span className="font-heading font-black text-[2rem]">
          ${product.price}.00
        </span>

        <ProductActions
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />

        <p className="text-xs text-steel/60 flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Part of the TITAN system. Works best with complementary products.
        </p>
      </div>
    </div>
  );
}
