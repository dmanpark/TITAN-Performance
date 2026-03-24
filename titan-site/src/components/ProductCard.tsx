"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({
  product,
  compact = false,
}: ProductCardProps) {
  const [activeVariant, setActiveVariant] = useState(0);

  const currentImage =
    product.variants && product.variants.length > 0
      ? product.variants[activeVariant].image
      : product.image;

  return (
    <div className="group flex flex-col bg-container transition-all duration-300 hover:bg-container-high hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(27,38,59,0.1)]">
      <Link
        href={`/product/${product.slug}`}
        className="flex flex-col flex-1"
      >
        <div className="h-80 overflow-hidden flex items-center justify-center bg-surface-dim">
          <Image
            key={currentImage}
            src={currentImage}
            alt={product.name}
            width={1200}
            height={1200}
            className="h-full w-auto object-contain scale-[1.3] group-hover:scale-[1.38] transition-transform duration-500 ease-out"
            style={{
              filter: "drop-shadow(0 12px 24px rgba(27,38,59,0.18)) drop-shadow(0 3px 8px rgba(27,38,59,0.10))",
            }}
          />
        </div>
        <div className="flex flex-col gap-2 p-5 pb-4 flex-1">
          <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-steel/60">
            {product.tagline}
          </span>
          <h3 className="font-heading font-black text-xl uppercase tracking-tight">
            {product.name}
          </h3>
          {!compact && (
            <p className="text-sm text-steel leading-relaxed">
              {product.summary}
            </p>
          )}
        </div>
      </Link>

      {/* Flavor selector on card */}
      {product.variants && product.variants.length > 1 && (
        <div className="flex gap-1.5 px-5 pb-3">
          {product.variants.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActiveVariant(i)}
              className={`px-3 py-1 border text-[10px] font-heading font-semibold uppercase tracking-[0.05em] transition-all duration-150 ${
                activeVariant === i
                  ? "bg-navy text-white border-navy"
                  : "border-navy/10 hover:border-navy/30 text-steel"
              }`}
              aria-label={`View ${v.name} flavor`}
            >
              {v.name}
            </button>
          ))}
        </div>
      )}

      <Link
        href={`/product/${product.slug}`}
        className="flex justify-between items-center px-5 pb-5"
      >
        <span className="font-heading font-black text-lg">
          ${product.price}.00
        </span>
        <span className="font-heading font-bold text-[11px] uppercase tracking-[0.15em] border-b-2 border-navy pb-0.5 transition-opacity group-hover:opacity-60">
          {compact ? "View" : "View Product"}
        </span>
      </Link>
    </div>
  );
}
