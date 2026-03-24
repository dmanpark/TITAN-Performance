"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/data";

export default function CartDrawer() {
  const cart = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cart.close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-all duration-300 ${
          cart.isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={cart.close}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[51] w-[min(420px,90vw)] bg-surface flex flex-col transition-transform duration-500 ease-out ${
          cart.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex justify-between items-center px-8 py-6 border-b border-navy/5">
          <span className="font-heading font-black text-lg uppercase tracking-[0.1em]">
            Your Cart
          </span>
          <button
            onClick={cart.close}
            className="w-8 h-8 flex items-center justify-center text-xl hover:opacity-50 transition-opacity"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-steel/60 text-center">
              <span className="text-5xl opacity-30">&#9651;</span>
              <p className="font-semibold">Your cart is empty</p>
              <p className="text-xs">Build your protocol.</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {cart.items.map((item) => {
                const product = getProductById(item.id);
                if (!product) return null;
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 py-4 border-b border-navy/5"
                  >
                    <div className="w-[72px] h-[72px] bg-surface-dim flex-shrink-0 flex items-center justify-center overflow-hidden p-1">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={72}
                        height={72}
                        className="w-full h-full object-contain"
                        style={{ filter: "drop-shadow(0 4px 8px rgba(27,38,59,0.15))" }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="font-heading font-bold text-sm uppercase">
                        {product.name}
                      </span>
                      <span className="font-semibold text-xs text-steel">
                        ${product.price}.00
                      </span>
                      <div className="flex items-center gap-2 mt-auto">
                        <button
                          onClick={() => cart.updateQty(item.id, -1)}
                          className="w-6 h-6 border border-navy/10 flex items-center justify-center text-xs font-bold hover:bg-container transition-colors"
                        >
                          &minus;
                        </button>
                        <span className="font-bold text-xs min-w-[20px] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => cart.updateQty(item.id, 1)}
                          className="w-6 h-6 border border-navy/10 flex items-center justify-center text-xs font-bold hover:bg-container transition-colors"
                        >
                          &#43;
                        </button>
                        <button
                          onClick={() => cart.remove(item.id)}
                          className="ml-auto text-[11px] text-steel/60 uppercase tracking-[0.1em] font-semibold hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="px-8 py-6 border-t border-navy/5">
            <div className="flex justify-between items-center mb-5">
              <span className="font-heading font-bold text-xs uppercase tracking-[0.1em]">
                Subtotal
              </span>
              <span className="font-heading font-black text-xl">
                ${cart.total}.00
              </span>
            </div>
            <button className="w-full bg-navy text-white font-heading font-bold uppercase tracking-[0.15em] text-xs py-[1.125rem] hover:opacity-90 transition-opacity active:scale-[0.97]">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
