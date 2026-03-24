import type { Product } from "@/lib/types";

export default function ProductWhatsInside({ product }: { product: Product }) {
  const formula = product.formula;
  if (!formula || formula.length === 0) return null;

  return (
    <section className="bg-navy px-5 md:px-8 py-section">
      <div className="max-w-[1200px] mx-auto">

        {/* Section header */}
        <div className="mb-14 pb-10 border-b border-white/[0.07]">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 block mb-4">
            Formula
          </span>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] text-white uppercase tracking-tight leading-none">
            What&apos;s Inside
          </h2>
        </div>

        {/* Table — scrolls horizontally on small screens */}
        <div className="overflow-x-auto">
          <div className="min-w-[560px]">

            {/* Column headers */}
            <div className="grid grid-cols-[140px_1fr_1.4fr] gap-6 md:gap-10 pb-5 border-b border-white/[0.07]">
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25">
                Dose
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25">
                Compound
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25">
                Function
              </span>
            </div>

            {/* Rows */}
            {formula.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[140px_1fr_1.4fr] gap-6 md:gap-10 py-5 border-b border-white/[0.04] transition-colors duration-150 hover:bg-white/[0.02] -mx-2 px-2"
              >
                <span className="font-heading font-black text-[1.05rem] text-white leading-tight tracking-tight">
                  {row.dose}
                </span>
                <span className="font-body font-bold text-[0.8rem] text-white/70 leading-snug pt-0.5">
                  {row.compound}
                </span>
                <span className="font-body text-[0.8rem] text-white/38 leading-relaxed">
                  {row.function}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
