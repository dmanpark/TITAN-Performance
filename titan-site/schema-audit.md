# Schema.org Structured Data Audit
## TITAN Performance - https://titan-performance-three.vercel.app/
### Audit Date: 2026-03-24

---

## 1. DETECTION RESULTS

### Existing Schema Markup Found: NONE

- JSON-LD: None detected
- Microdata (itemscope/itemprop): None detected
- RDFa (typeof/vocab): None detected

The site has zero structured data markup across all pages. This is a significant gap for an e-commerce site.

---

## 2. PAGES ANALYZED

| Page | URL | Schema Found |
|------|-----|-------------|
| Homepage | `/` | None |
| Shop | `/shop` | None |
| Stacks | `/stacks` | None |
| Philosophy | `/philosophy` | None |
| Product: Foundation | `/product/foundation` | None |
| Product: Prime | `/product/prime` | None |
| Product: Perform | `/product/perform` | None |
| Product: Fortify | `/product/fortify` | None |

---

## 3. MISSING SCHEMA OPPORTUNITIES (by priority)

### CRITICAL (high impact for search visibility)

1. **Product** (on each `/product/[slug]` page)
   - Google supports Product rich results (price, availability, review snippets)
   - All four products have name, price, description, and image data available
   - Required: name, image, offers (with price, priceCurrency, availability)
   - Recommended: description, brand, sku, category

2. **Organization** (site-wide, in layout)
   - Establishes the brand entity for Knowledge Graph
   - Required: name, url, logo
   - Recommended: description, sameAs (social links), contactPoint

3. **WebSite** (homepage)
   - Enables sitelinks searchbox potential
   - Required: name, url
   - Recommended: potentialAction (SearchAction) if site search exists

4. **BreadcrumbList** (all interior pages)
   - Google supports breadcrumb rich results
   - Clear hierarchy: Home > Shop > [Product Name], Home > Stacks, Home > Philosophy

### HIGH (good supplemental value)

5. **WebPage** (all pages)
   - Provides page-level metadata context
   - Required: name, url
   - Recommended: description, isPartOf (linking to WebSite)

6. **Product** with **Offer** for Stacks
   - The 3 curated stacks (Strength Stack, Full TITAN System, Recovery Stack) are purchasable bundles
   - Use Product with multiple offers or ProductGroup

7. **AggregateRating** / **Review** (on product pages)
   - Homepage shows testimonials with 5-star ratings
   - Could be attached to individual products or the Organization
   - NOTE: Google requires reviews to be about the specific product on that page

### INFORMATIONAL

8. **FAQPage** (product pages have FAQ sections)
   - Google restricted FAQ rich results to government/healthcare sites (August 2023)
   - FAQPage schema still benefits AI/LLM citation and discoverability (GEO value)
   - Not critical, but worth adding if GEO (generative engine optimization) is a priority

---

## 4. RECOMMENDED JSON-LD IMPLEMENTATIONS

See companion file: `schema-recommendations.json` for copy-paste-ready JSON-LD blocks.

---

## 5. IMPLEMENTATION PLAN

### Phase 1: Layout-level (site-wide)
- Add Organization schema to `layout.tsx`
- Add WebSite schema to `layout.tsx`

### Phase 2: Page-level
- Add BreadcrumbList to each interior page
- Add Product schema to each `/product/[slug]` page (dynamic, data-driven)
- Add Product/Offer schema for stacks on `/stacks`

### Phase 3: Enhancement
- Add WebPage schema to all pages
- Consider AggregateRating if review collection is formalized
