import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import StackCard from "@/components/StackCard";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { STACKS, PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stacks",
  description:
    "Build your TITAN stack. Curated supplement bundles for structured training protocols.",
};

const trainingCycle = [
  {
    num: "01",
    title: "Foundation",
    desc: "Daily micronutrient base. The non-negotiable starting point.",
  },
  {
    num: "02",
    title: "Prime",
    desc: "Pre-training activation. Focus, drive, and neural readiness.",
  },
  {
    num: "03",
    title: "Perform",
    desc: "Intra-training endurance. Sustained output under load.",
  },
  {
    num: "04",
    title: "Fortify",
    desc: "Post-training recovery. Deep restoration and structural repair.",
  },
];

export default function StacksPage() {
  return (
    <>
      {/* Page Header */}
      <Section className="!pt-24 !pb-12 text-center">
        <Container narrow>
          <span className="block font-heading font-black text-[11px] tracking-[0.3em] uppercase text-steel/60 mb-4">
            Structured Protocol
          </span>
          <h1 className="font-heading font-black text-[clamp(2.5rem,5vw,3.75rem)] uppercase tracking-tight mb-6">
            Build Your Stack
          </h1>
          <p className="text-base text-steel leading-relaxed">
            The TITAN system is designed for synergy. Each product addresses a
            specific training phase. Combined into a stack, they form a
            comprehensive protocol that covers preparation, performance, and
            recovery.
          </p>
        </Container>
      </Section>

      {/* Training Cycle */}
      <Section variant="dim">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] uppercase tracking-tight">
              The Training Cycle
            </h2>
            <div className="w-[60px] h-1 bg-navy mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trainingCycle.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 border-2 border-navy/20 flex items-center justify-center rounded-full font-heading font-black text-xl">
                  {step.num}
                </div>
                <h3 className="font-heading font-black text-xl uppercase">
                  {step.title}
                </h3>
                <p className="text-xs text-steel leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stacks Grid */}
      <Section>
        <Container>
          <SectionHeader
            label="Choose Your Protocol"
            title="Curated Stacks"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-4">
            {STACKS.map((stack) => (
              <StackCard key={stack.id} stack={stack} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Individual Products */}
      <Section variant="dim">
        <Container>
          <SectionHeader
            label="Or Shop Individually"
            title="Every Product in the System"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="navy" className="!py-32 text-center">
        <Container narrow>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,3rem)] uppercase tracking-tight mb-6">
            The System Works Together
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            Each product is designed to complement the others. The full TITAN
            system creates a complete performance protocol that leaves nothing to
            chance.
          </p>
          <Button href="/shop" variant="inverted">
            Shop All Products
          </Button>
        </Container>
      </Section>
    </>
  );
}
