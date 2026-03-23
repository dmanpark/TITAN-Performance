"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabsClient({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "ingredients">(
    "description"
  );

  return (
    <>
      <div className="flex border-b border-navy/10 gap-8">
        <button
          onClick={() => setActiveTab("description")}
          className={`font-heading font-bold text-xs uppercase tracking-[0.1em] py-4 border-b-2 -mb-px transition-all duration-150 ${
            activeTab === "description"
              ? "text-navy border-navy"
              : "text-steel/60 border-transparent hover:text-navy"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={`font-heading font-bold text-xs uppercase tracking-[0.1em] py-4 border-b-2 -mb-px transition-all duration-150 ${
            activeTab === "ingredients"
              ? "text-navy border-navy"
              : "text-steel/60 border-transparent hover:text-navy"
          }`}
        >
          Ingredients & Usage
        </button>
      </div>

      <div className="py-8">
        {activeTab === "description" ? (
          <p className="text-steel leading-relaxed">{product.description}</p>
        ) : (
          <div className="space-y-4 text-steel leading-relaxed">
            <p>
              <strong className="text-navy">Ingredients:</strong>{" "}
              {product.ingredients}
            </p>
            <p>
              <strong className="text-navy">Suggested Use:</strong>{" "}
              {product.usage}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
