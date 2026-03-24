"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

interface ProductActionsProps {
  product: Product;
  selectedVariant?: number;
  onVariantChange?: (index: number) => void;
}

export default function ProductActions({
  product,
  selectedVariant = 0,
  onVariantChange,
}: ProductActionsProps) {
  const cart = useCart();
  const [qty, setQty] = useState(1);

  const variants = product.variants;

  return (
    <>
      {/* Flavor Selector */}
      {variants && variants.length > 1 && (
        <div className="flex flex-col gap-2.5">
          <span className="font-heading font-black text-[9px] uppercase tracking-[0.22em] text-white/30">
            Flavor
          </span>
          <div className="flex gap-2 flex-wrap">
            {variants.map((v, i) => (
              <button
                key={v.name}
                onClick={() => onVariantChange?.(i)}
                className={[
                  "px-5 py-2.5 border font-heading font-bold text-xs uppercase tracking-[0.08em] transition-all duration-150",
                  selectedVariant === i
                    ? "bg-white text-navy border-white"
                    : "border-white/15 text-white/55 hover:border-white/35 hover:text-white/80",
                ].join(" ")}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Quantity selector */}
        <div className="flex items-center border border-white/15">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            aria-label="Decrease quantity"
            className="w-11 h-11 flex items-center justify-center text-lg font-semibold text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            &minus;
          </button>
          <span className="w-12 h-11 flex items-center justify-center font-bold text-sm text-white border-x border-white/15">
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            aria-label="Increase quantity"
            className="w-11 h-11 flex items-center justify-center text-lg font-semibold text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            &#43;
          </button>
        </div>

        {/* Add to cart */}
        <button
          onClick={() => cart.add(product.id, qty)}
          className="flex-1 min-w-[160px] bg-white text-navy font-heading font-black uppercase tracking-[0.18em] text-xs py-[1.375rem] px-8 transition-all duration-300 ease-out hover:bg-white/90 hover:shadow-[0_6px_28px_rgba(255,255,255,0.12)] active:scale-[0.97]"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
