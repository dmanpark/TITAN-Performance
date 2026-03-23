import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ShopGrid from "./ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the complete TITAN Performance supplement system. Precision-formulated for strength, focus, and recovery.",
};

export default function ShopPage() {
  return (
    <>
      {/* Page Header */}
      <Section variant="dim" className="!pt-24 !pb-12">
        <Container>
          <span className="block font-heading font-black text-[11px] tracking-[0.3em] uppercase text-steel/60 mb-4">
            The Protocol
          </span>
          <h1 className="font-heading font-black text-[clamp(2.5rem,5vw,3.75rem)] uppercase tracking-tight">
            Shop the System
          </h1>
          <div className="w-[60px] h-1 bg-navy mt-4" />
          <p className="mt-6 text-base text-steel max-w-[520px] leading-relaxed">
            Every product in the TITAN system is designed to work independently
            or as part of a structured protocol. No filler. No redundancy. Just
            what you need.
          </p>
        </Container>
      </Section>

      {/* Products Grid with Filters */}
      <Section>
        <Container>
          <ShopGrid />
        </Container>
      </Section>

      {/* Stacks Upsell */}
      <Section variant="navy" className="text-center">
        <Container narrow>
          <SectionHeader label="Save More" title="Build Your Stack" centered navy />
          <p className="text-white/65 text-base leading-relaxed mb-8 -mt-8">
            Products are stronger together. Combine them into a structured
            protocol and save.
          </p>
          <Button href="/stacks" variant="inverted">
            View Stacks
          </Button>
        </Container>
      </Section>
    </>
  );
}
