import type { Product } from "@/lib/types";

export default function ProductWhyItWorks({ product }: { product: Product }) {
  const items = product.whyItWorks;
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-navy px-5 md:px-8 py-section">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 block mb-4">
            Mechanism
          </span>
          <h2 className="font-heading font-black text-[clamp(2.2rem,5vw,3.75rem)] text-white uppercase tracking-tight leading-none">
            Why It Works
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;
            const isTop = i < 2;

            return (
              <div
                key={item.index}
                className={[
                  "relative overflow-hidden py-12 md:py-16",
                  isLeft
                    ? "md:pr-14 md:border-r border-white/[0.07]"
                    : "md:pl-14",
                  isTop
                    ? "border-b border-white/[0.07]"
                    : "",
                ].join(" ")}
              >
                {/* Ghost background number */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-2 font-heading font-black leading-none select-none pointer-events-none text-white/[0.025]"
                  style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
                >
                  {item.index}
                </span>

                {/* Index label */}
                <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/25 block mb-5">
                  {item.index}
                </span>

                {/* Thin rule */}
                <span className="block w-8 h-px bg-white/20 mb-6" />

                {/* Title */}
                <h3 className="font-heading font-black text-[1.3rem] text-white uppercase tracking-tight leading-tight mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/45 leading-relaxed max-w-[380px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
