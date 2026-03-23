import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center text-center px-5 md:px-8 relative overflow-hidden">
      <div className="max-w-[900px] mx-auto relative z-[2]">
<h1 className="font-heading font-black text-[clamp(3rem,8vw,8rem)] uppercase leading-[0.9] tracking-[-0.05em] text-navy mb-6 animate-fade-up animation-delay-100">
          Architectural
          <br />
          Strength
        </h1>
        <p className="text-[clamp(1rem,2vw,1.375rem)] font-light text-steel max-w-[520px] mx-auto mb-6 tracking-tight leading-relaxed animate-fade-up animation-delay-200">
          A system built for strength, not hype. Structured supplementation for
          those who train with intent.
        </p>
        <div className="mb-10 animate-fade-up animation-delay-200">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.2em] uppercase text-steel/60">
            One for All &mdash; All for One
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up animation-delay-300">
          <Button href="/shop" size="lg">
            Shop the System
          </Button>
          <Button href="/stacks" variant="secondary" size="lg">
            View Stacks
          </Button>
        </div>
      </div>
    </section>
  );
}
