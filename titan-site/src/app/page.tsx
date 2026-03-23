import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { PRODUCTS, TESTIMONIALS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* System: 3-Phase */}
      <Section variant="dim">
        <Container>
          <SectionHeader title="Built Around Strength" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                phase: "01",
                title: "Prime",
                desc: "Prepare your body and mind. Cognitive activation, neural drive, and focused readiness for the task ahead.",
              },
              {
                phase: "02",
                title: "Perform",
                desc: "Train at full capacity. Sustained endurance, metabolic stability, and consistent output during high-intensity work.",
              },
              {
                phase: "03",
                title: "Fortify",
                desc: "Build what lasts. Deep recovery, cellular repair, and long-term structural adaptation while you rest.",
              },
            ].map((item) => (
              <div key={item.phase} className="flex flex-col gap-5">
                <span className="font-heading font-black text-[11px] tracking-[0.3em] uppercase text-steel/60">
                  Phase {item.phase}
                </span>
                <h3 className="font-heading font-black text-[2rem] uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product Showcase */}
      <Section>
        <Container>
          <SectionHeader label="The Protocol" title="The System" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Stacks CTA */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-navy/10 p-10 md:p-12 flex flex-col items-center text-center gap-6 hover:border-navy/20 transition-colors">
              <span className="font-heading font-black text-[11px] tracking-[0.3em] uppercase text-steel/60">
                Performance Layer
              </span>
              <h3 className="font-heading font-black text-[2rem] uppercase">
                Strength Stack
              </h3>
              <p className="text-steel max-w-[320px] text-sm leading-relaxed">
                Prime + Perform. Everything you need to train with focus and
                sustained output.
              </p>
              <div>
                <span className="line-through text-steel/60 text-sm font-semibold mr-2">
                  $106.00
                </span>
                <span className="font-heading font-black text-[2rem]">
                  $99.00
                </span>
              </div>
              <Button href="/stacks" full>
                Get the Stack
              </Button>
            </div>
            <div className="bg-navy text-white p-10 md:p-12 flex flex-col items-center text-center gap-6">
              <span className="font-heading font-black text-[11px] tracking-[0.3em] uppercase text-white/40">
                Complete Ecosystem
              </span>
              <h3 className="font-heading font-black text-[2rem] uppercase">
                Full TITAN System
              </h3>
              <p className="text-white/65 max-w-[320px] text-sm leading-relaxed">
                Foundation + Prime + Perform + Fortify. The definitive
                performance protocol.
              </p>
              <div>
                <span className="line-through text-white/40 text-sm font-semibold mr-2">
                  $221.00
                </span>
                <span className="font-heading font-black text-[2rem]">
                  $189.00
                </span>
              </div>
              <Button href="/stacks" variant="white" full>
                Upgrade System
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section className="!py-32">
        <Container narrow className="text-center">
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.75rem)] uppercase tracking-tight mb-6">
            Strength is Built, Not Bought
          </h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-steel leading-relaxed font-light">
            TITAN is designed for people who train with intent. No unnecessary
            formulas. No distractions. Just a system that supports real
            progression. We believe in the discipline of the process.
          </p>
          <div className="w-12 h-1 bg-navy mx-auto mt-8" />
        </Container>
      </Section>

      {/* Social Proof */}
      <Section variant="dim">
        <Container>
          <SectionHeader label="Trusted By" title="Real Athletes. Real Results." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="flex gap-0.5 text-navy">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg font-medium italic leading-relaxed text-navy">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-steel">
                  {t.author} &mdash; {t.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="!py-32 text-center">
        <Container narrow>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] uppercase tracking-tight mb-8">
            Commit to Strength
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/shop" size="lg">
              Shop Now
            </Button>
            <Button href="/stacks" variant="secondary" size="lg">
              View System
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
