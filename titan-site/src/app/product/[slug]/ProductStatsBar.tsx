import type { Product } from "@/lib/types";

export default function ProductStatsBar({ product }: { product: Product }) {
  if (!product.stats) return null;

  return (
    <div className="bg-[#0c1623] border-t border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {product.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 md:px-8 gap-2 text-center"
            >
              <span className="font-heading font-black text-[clamp(1.25rem,2.5vw,1.75rem)] text-white leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
