import type { Product } from "@/lib/types";

export default function ProductWhenToUse({ product }: { product: Product }) {
  const data = product.whenToUse;
  if (!data) return null;

  return (
    <section className="bg-[#0c1623] px-5 md:px-8 py-section">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

          {/* Left — steps */}
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 block mb-4">
                Protocol
              </span>
              <h2 className="font-heading font-black text-[clamp(2rem,4.5vw,3.25rem)] text-white uppercase tracking-tight leading-none mb-5">
                {data.heading}
              </h2>
              <div className="flex items-center gap-3">
                <span className="w-5 h-px bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                  {data.timing}
                </span>
              </div>
            </div>

            {/* Numbered steps */}
            <div className="flex flex-col">
              {data.steps.map((step, i) => (
                <div
                  key={step.number}
                  className={[
                    "flex gap-7 items-start py-8",
                    i < data.steps.length - 1
                      ? "border-b border-white/[0.06]"
                      : "",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="font-heading font-black text-[2.75rem] leading-none text-white/[0.08] w-[52px] flex-shrink-0 text-right select-none"
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white/55 leading-relaxed pt-2 max-w-[480px]">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-4 lg:pt-[76px]">

            {/* System position card */}
            <div className="bg-[#1a2638] border border-white/[0.07] p-7">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 block mb-5">
                System Position
              </span>
              <p className="font-heading font-black text-lg text-white uppercase tracking-tight leading-tight mb-3">
                {data.stackRole}
              </p>
              <span className="block w-6 h-px bg-white/15 mb-3" />
              <p className="text-xs text-white/35 leading-relaxed">
                Engineered to function independently. Optimized within the full TITAN protocol.
              </p>
            </div>

            {/* Key compound card */}
            <div className="bg-[#1a2638] border border-white/[0.07] p-7">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 block mb-5">
                Key Compound
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading font-black text-[2.25rem] text-white leading-none tracking-tight">
                  {data.keyCompound.dose}
                </span>
              </div>
              <p className="font-heading font-black text-[0.9rem] text-white/75 uppercase tracking-tight mb-4">
                {data.keyCompound.name}
              </p>
              <span className="block w-8 h-px bg-white/15 mb-4" />
              <p className="text-xs text-white/40 leading-relaxed">
                {data.keyCompound.detail}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
