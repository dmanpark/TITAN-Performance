import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "The TITAN Performance philosophy. Strength is built through discipline, structure, and intent.",
};

const values = [
  {
    num: "01",
    title: "Structure Over Chaos",
    desc: "Random supplementation produces random results. TITAN is designed as a system — each product occupies a specific role in a structured protocol. Preparation, execution, recovery. No overlap, no redundancy.",
  },
  {
    num: "02",
    title: "Efficacy Over Marketing",
    desc: "Every ingredient is selected for demonstrated efficacy, dosed at clinically relevant levels, and delivered in its most bioavailable form. If it doesn't work at the dose we can fit, we don't include it.",
  },
  {
    num: "03",
    title: "Discipline Over Hype",
    desc: "We don't chase trends, manufacture urgency, or make claims we can't substantiate. Our products are built for people who value long-term progression over short-term excitement.",
  },
  {
    num: "04",
    title: "Transparency Over Proprietary",
    desc: "No proprietary blends. No hidden dosages. Every ingredient and every amount is clearly listed. You should know exactly what you're putting into your body and why.",
  },
  {
    num: "05",
    title: "Minimal Effective Dose",
    desc: "More is not always better. TITAN formulations target the minimum effective dose for each ingredient — enough to produce measurable benefit without unnecessary surplus or interaction risk.",
  },
  {
    num: "06",
    title: "Built for the Long Game",
    desc: "Supplements should support a training practice that spans years, not weeks. Our formulations are designed for consistent, sustained use — building cumulative benefit over time, not acute spikes.",
  },
];

const credentials = [
  {
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    title: "Evidence-Based",
    desc: "Every ingredient backed by peer-reviewed research at the dose used.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Third-Party Tested",
    desc: "Independent verification for purity, potency, and banned substances.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Clean Formulation",
    desc: "No artificial colors, flavors, or unnecessary fillers. Function first.",
  },
  {
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    title: "Precision Dosing",
    desc: "Clinically relevant doses. No pixie-dusting. No proprietary blends.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="min-h-[60vh] flex items-center text-center">
        <Container narrow>
          <span className="block font-heading font-black text-[11px] tracking-[0.3em] uppercase text-steel/60 mb-4">
            Our Approach
          </span>
          <h1 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] uppercase tracking-tight mb-6">
            Strength is Built,
            <br />
            Not Bought
          </h1>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-steel leading-relaxed font-light max-w-[600px] mx-auto">
            TITAN exists for people who understand that performance is earned
            through consistency, structure, and intent. We build tools that
            support the process — nothing more, nothing less.
          </p>
        </Container>
      </Section>

      {/* Manifesto */}
      <Section variant="navy">
        <Container narrow className="text-center">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-light tracking-tight">
            We don&apos;t sell shortcuts. We don&apos;t promise overnight
            transformation. We build precision tools for people who already know
            what they&apos;re doing — and want to do it better.
          </h2>
          <div className="w-12 h-1 bg-white mx-auto mt-10" />
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <SectionHeader label="What We Stand For" title="Principles" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.num}
                className="border border-navy/10 p-8 flex flex-col gap-4"
              >
                <span className="font-heading font-black text-[3.75rem] text-navy/10 leading-none">
                  {v.num}
                </span>
                <h3 className="font-heading font-black text-xl uppercase">
                  {v.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section variant="dim">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block font-heading font-black text-[11px] tracking-[0.3em] uppercase text-steel/60 mb-4">
                Formulation Philosophy
              </span>
              <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] uppercase tracking-tight mb-6">
                Every Decision is Deliberate
              </h2>
              <div className="space-y-6 text-steel leading-relaxed">
                <p>
                  When we formulate a product, we start with the training demand
                  — not the ingredient list. We ask: what does the body need at
                  this specific phase of the training cycle? Then we build the
                  minimum effective formula to address that need.
                </p>
                <p>
                  We don&apos;t add ingredients to make labels look impressive.
                  We don&apos;t underdose to fit more SKUs into a margin. We
                  don&apos;t follow trends. We solve specific, well-defined
                  problems with precision.
                </p>
                <p>
                  The result is a lean, focused system where every product has a
                  clear role and every ingredient has a clear reason.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {credentials.map((c) => (
                <div key={c.title} className="flex gap-6 items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-navy/5 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="text-navy"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={c.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm uppercase mb-1">
                      {c.title}
                    </h4>
                    <p className="text-xs text-steel leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="!py-32 text-center">
        <Container narrow>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight mb-6">
            Built for Those Who Build
          </h2>
          <p className="text-steel text-base leading-relaxed mb-10">
            TITAN isn&apos;t for everyone. It&apos;s for people who train with
            purpose, who value consistency over novelty, and who understand that
            real strength is a long-term project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/shop" size="lg">
              Shop the System
            </Button>
            <Button href="/stacks" variant="secondary" size="lg">
              View Stacks
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
