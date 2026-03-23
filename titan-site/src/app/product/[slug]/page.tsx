import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, getProductBySlug } from "@/lib/data";
import ProductHero from "./ProductHero";
import ProductTabsClient from "./ProductTabs";
import ProductShell from "./ProductShell";
import ScrollReveal from "./ScrollReveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.summary,
  };
}

const FAQ_ITEMS = [
  {
    question: "How does this fit into the TITAN system?",
    answer:
      "Each TITAN product is designed for a specific phase of the training cycle. Used individually, they address a targeted need. Used together as a stack, they create a comprehensive performance protocol that covers preparation, execution, and recovery.",
  },
  {
    question: "When should I take this product?",
    answer:
      "Timing depends on the specific product. Prime is taken 20-30 minutes before training. Perform is sipped during training. Fortify is taken post-training or before bed. Foundation is taken with your first meal daily.",
  },
  {
    question: "Are there any artificial additives?",
    answer:
      "No. TITAN products are formulated without artificial colors, flavors, or unnecessary fillers. Every ingredient is selected for function, dosed for efficacy, and sourced in its most bioavailable form.",
  },
  {
    question: "Can I use this product on its own?",
    answer:
      "Absolutely. Each product in the TITAN system is effective as a standalone supplement. The system is designed so that individual products deliver targeted benefits, while the full protocol provides comprehensive coverage across all phases of training and recovery.",
  },
];

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const crossSell = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <ProductShell productId={product.id} accentColor={product.color}>
      {/* Breadcrumb */}
      <Section className="!pt-6 !pb-0">
        <Container>
          <nav
            className="text-xs text-steel/60"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-navy transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy font-semibold">{product.name}</span>
          </nav>
        </Container>
      </Section>

      {/* Product Detail */}
      <Section className="!pt-8">
        <Container>
          <ProductHero product={product} />
        </Container>
      </Section>

      {/* Benefits */}
      <Section variant="dim">
        <Container>
          <ScrollReveal>
            <SectionHeader label="Why It Works" title="Key Benefits" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div className="flex flex-col gap-3 group/benefit">
                  <div className="w-12 h-12 flex items-center justify-center bg-navy/5 mb-2 transition-all duration-300 group-hover/benefit:bg-navy/10 group-hover/benefit:scale-105">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#1B263B"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm uppercase tracking-[0.05em]">
                    {b.title}
                  </h4>
                  <p className="text-sm text-steel leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tabs: Description / Ingredients */}
      <Section>
        <Container narrow>
          <ScrollReveal>
            <ProductTabs product={product} />
          </ScrollReveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="dim">
        <Container narrow>
          <ScrollReveal>
            <SectionHeader title="Common Questions" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Accordion items={FAQ_ITEMS} />
          </ScrollReveal>
        </Container>
      </Section>

      {/* Cross-sell */}
      <Section>
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Completes the Protocol"
              title="Works Best With"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {crossSell.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 120}>
                <ProductCard product={p} compact />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </ProductShell>
  );
}

function ProductTabs({ product }: { product: ReturnType<typeof getProductBySlug> & {} }) {
  return <ProductTabsClient product={product} />;
}
