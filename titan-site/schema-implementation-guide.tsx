// =============================================================================
// SCHEMA IMPLEMENTATION GUIDE - TITAN Performance
// =============================================================================
// This file contains copy-paste-ready code blocks for adding JSON-LD structured
// data to each page. Each section shows the exact code to add and where.
// =============================================================================

// =============================================================================
// FILE: src/app/layout.tsx
// ACTION: Add Organization + WebSite schema in the <head>
// =============================================================================
// Add this inside <html>, before <body>:

/*
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://titan-performance-three.vercel.app/#organization",
          "name": "TITAN Performance",
          "url": "https://titan-performance-three.vercel.app",
          "logo": {
            "@type": "ImageObject",
            "url": "https://titan-performance-three.vercel.app/assets/logo.png"
          },
          "description":
            "A performance supplement system built for strength, not hype. Precision-formulated supplements for structured training protocols.",
          "brand": {
            "@type": "Brand",
            "name": "TITAN Performance"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://titan-performance-three.vercel.app/#website",
          "name": "TITAN Performance",
          "url": "https://titan-performance-three.vercel.app",
          "publisher": {
            "@id": "https://titan-performance-three.vercel.app/#organization"
          }
        }
      ])
    }}
  />
</head>
*/

// =============================================================================
// FILE: src/app/product/[slug]/page.tsx
// ACTION: Add Product + BreadcrumbList schema dynamically per product
// =============================================================================
// Add this inside the ProductPage component return, before the first child:

/*
const BASE = "https://titan-performance-three.vercel.app";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  url: `${BASE}/product/${product.slug}`,
  image: `${BASE}${product.image}`,
  description: product.summary,
  brand: {
    "@type": "Brand",
    name: "TITAN Performance",
  },
  category: "Dietary Supplements",
  offers: {
    "@type": "Offer",
    price: product.price.toFixed(2),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${BASE}/product/${product.slug}`,
    priceValidUntil: "2026-12-31",
    seller: {
      "@id": `${BASE}/#organization`,
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Shop",
      item: `${BASE}/shop`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: product.name,
    },
  ],
};

// Then in JSX, add before <ProductShell>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([productSchema, breadcrumbSchema]),
  }}
/>
*/

// =============================================================================
// FILE: src/app/shop/page.tsx
// ACTION: Add CollectionPage + BreadcrumbList schema
// =============================================================================

/*
const BASE = "https://titan-performance-three.vercel.app";

// Add inside the component return, at the top of the fragment:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Shop the System",
        url: `${BASE}/shop`,
        description:
          "Browse the complete TITAN Performance supplement system. Precision-formulated for strength, focus, and recovery.",
        isPartOf: { "@id": `${BASE}/#website` },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Shop" },
        ],
      },
    ]),
  }}
/>
*/

// =============================================================================
// FILE: src/app/stacks/page.tsx
// ACTION: Add BreadcrumbList + Product schema for each stack bundle
// =============================================================================

/*
const BASE = "https://titan-performance-three.vercel.app";

// Add inside the component return, at the top of the fragment:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Stacks" },
        ],
      },
      ...STACKS.map((stack) => ({
        "@context": "https://schema.org",
        "@type": "Product",
        name: stack.name,
        description: stack.desc,
        url: `${BASE}/stacks`,
        brand: { "@type": "Brand", name: "TITAN Performance" },
        offers: {
          "@type": "Offer",
          price: stack.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
      })),
    ]),
  }}
/>
*/

// =============================================================================
// FILE: src/app/philosophy/page.tsx
// ACTION: Add AboutPage + BreadcrumbList schema
// =============================================================================

/*
const BASE = "https://titan-performance-three.vercel.app";

// Add inside the component return, at the top of the fragment:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Philosophy | TITAN Performance",
        url: `${BASE}/philosophy`,
        description:
          "The TITAN Performance philosophy. Strength is built through discipline, structure, and intent.",
        isPartOf: { "@id": `${BASE}/#website` },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Philosophy" },
        ],
      },
    ]),
  }}
/>
*/

export {};
