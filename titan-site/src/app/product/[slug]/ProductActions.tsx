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
        <div className="flex flex-col gap-2">
          <span className="font-heading font-bold text-[11px] uppercase tracking-[0.15em]">
            Flavor
          </span>
          <div className="flex gap-2 flex-wrap">
            {variants.map((v, i) => (
              <button
                key={v.name}
                onClick={() => onVariantChange?.(i)}
                className={`px-5 py-2.5 border font-heading font-semibold text-xs uppercase tracking-[0.05em] transition-all duration-150 ${
                  selectedVariant === i
                    ? "bg-navy text-white border-navy"
                    : "border-navy/10 hover:border-navy/50"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center border border-navy/10 w-fit">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-11 h-11 flex items-center justify-center text-lg font-semibold hover:bg-container transition-colors"
            aria-label="Decrease quantity"
          >
            &minus;
          </button>
          <span className="w-12 h-11 flex items-center justify-center font-bold text-sm border-x border-navy/10">
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-11 h-11 flex items-center justify-center text-lg font-semibold hover:bg-container transition-colors"
            aria-label="Increase quantity"
          >
            &#43;
          </button>
        </div>
        <button
          onClick={() => cart.add(product.id, qty)}
          className="bg-navy text-white font-heading font-bold uppercase tracking-[0.15em] text-xs px-12 py-[1.375rem] transition-all duration-300 ease-out hover:shadow-[0_6px_24px_rgba(27,38,59,0.25)] hover:scale-[1.03] active:scale-[0.97]"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
