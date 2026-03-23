"use client";

import { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/data";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "essentials", label: "Essentials" },
  { value: "pre-training", label: "Pre-Training" },
  { value: "intra-training", label: "Intra-Training" },
  { value: "recovery", label: "Recovery" },
] as const;

type SortOption = "default" | "price-low" | "price-high" | "name";

export default function ShopGrid() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState<SortOption>("default");

  const products = useMemo(() => {
    let filtered: Product[] =
      filter === "all"
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.category === filter);

    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [filter, sort]);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2.5 font-heading font-bold text-[11px] uppercase tracking-[0.1em] border transition-all duration-150 ${
                filter === f.value
                  ? "bg-navy text-white border-navy"
                  : "text-steel border-navy/10 hover:border-navy/50 hover:text-navy"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="font-heading font-semibold text-[11px] uppercase tracking-[0.1em] px-5 py-2.5 border border-navy/10 bg-transparent text-navy appearance-none cursor-pointer pr-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2710%27%20height%3D%276%27%20viewBox%3D%270%200%2010%206%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M1%201L5%205L9%201%27%20stroke%3D%27%231B263B%27%20stroke-width%3D%271.5%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
          aria-label="Sort products"
        >
          <option value="default">Sort by</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
