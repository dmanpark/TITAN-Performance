"use client";

import Image from "next/image";
import type { Stack } from "@/lib/types";
import { getProductById } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Button from "./Button";

interface StackCardProps {
  stack: Stack;
}

export default function StackCard({ stack }: StackCardProps) {
  const cart = useCart();
  const featured = stack.featured;

  const handleAdd = () => {
    stack.products.forEach((pid) => cart.add(pid, 1));
  };

  return (
    <div
      className={`border p-10 md:p-12 flex flex-col items-center text-center gap-6 transition-colors duration-300 ${
        featured
          ? "bg-navy text-white border-transparent"
          : "border-navy/10 hover:border-navy/20"
      }`}
    >
      <span
        className={`font-heading font-black text-[11px] tracking-[0.3em] uppercase ${
          featured ? "text-white/40" : "text-steel/60"
        }`}
      >
        {stack.label}
      </span>
      <h3 className="font-heading font-black text-[2rem] uppercase">
        {stack.name}
      </h3>
      <p
        className={`max-w-[320px] text-sm leading-relaxed ${
          featured ? "text-white/65" : "text-steel"
        }`}
      >
        {stack.desc}
      </p>
      <div className="flex gap-2 my-2">
        {stack.products.map((pid) => {
          const p = getProductById(pid);
          if (!p) return null;
          return (
            <div
              key={pid}
              className={`w-14 h-14 flex items-center justify-center overflow-hidden ${
                featured ? "bg-white/10" : "bg-navy/5"
              }`}
            >
              <Image
                src={p.image}
                alt={p.name}
                width={56}
                height={56}
                className="w-full h-full object-contain p-1"
              />
            </div>
          );
        })}
      </div>
      <div>
        <span
          className={`line-through text-sm font-semibold mr-2 ${
            featured ? "text-white/40" : "text-steel/60"
          }`}
        >
          ${stack.originalPrice}.00
        </span>
        <span className="font-heading font-black text-[2rem]">
          ${stack.price}.00
        </span>
      </div>
      <Button
        variant={featured ? "white" : "primary"}
        full
        onClick={handleAdd}
      >
        Add Stack to Cart
      </Button>
    </div>
  );
}
