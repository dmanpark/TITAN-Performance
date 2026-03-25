import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, getProductBySlug } from "@/lib/data";
import ProductHero from "./ProductHero";
import ProductStatsBar from "./ProductStatsBar";
import ProductWhyItWorks from "./ProductWhyItWorks";
import ProductWhenToUse from "./ProductWhenToUse";
import ProductWhatsInside from "./ProductWhatsInside";
import ProductShell from "./ProductShell";
import ScrollReveal from "@/components/ScrollReveal";

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
    openGraph: {
      title: `${product.name} | TITAN Performance`,
      description: product.summary,
      url: `https://titan-performance-three.vercel.app/product/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.summary,
      images: [product.image],
    },
    alternates: {
      canonical: `/product/${product.slug}`,
    },
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.summary,
    image: `https://titan-performance-three.vercel.app${product.image}`,
    brand: {
      "@type": "Brand",
      name: "TITAN Performance",
    },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://titan-performance-three.vercel.app/product/${product.slug}`,
    },
    category: product.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://titan-performance-three.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: "https://titan-performance-three.vercel.app/shop",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://titan-performance-three.vercel.app/product/${product.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <ProductShell productId={product.id} accentColor={product.color}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero — dark split */}
      <ProductHero product={product} />

      {/* 2. Stats bar */}
      <ProductStatsBar product={product} />

      {/* 3. Why it works */}
      <ProductWhyItWorks product={product} />

      {/* 4. When to use */}
      <ProductWhenToUse product={product} />

      {/* 5. What's inside */}
      <ProductWhatsInside product={product} />

      {/* 6. FAQ — dark */}
      <section className="bg-[#0c1623] px-5 md:px-8 py-section">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 block mb-4">
                Questions
              </span>
              <h2 className="font-heading font-black text-[clamp(1.75rem,4vw,2.75rem)] text-white uppercase tracking-tight leading-none">
                Common Questions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Accordion items={FAQ_ITEMS} dark />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Cross-sell — light contrast break */}
      <section className="bg-surface px-5 md:px-8 py-section">
        <Container>
          <ScrollReveal>
            <div className="mb-14">
              <span className="block font-heading font-black text-[11px] tracking-[0.3em] uppercase mb-4 text-steel/60">
                Completes the Protocol
              </span>
              <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] uppercase tracking-tight">
                Works Best With
              </h2>
              <div className="w-[60px] h-1 mt-4 bg-navy" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {crossSell.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 120}>
                <ProductCard product={p} compact />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

    </ProductShell>
  );
}
