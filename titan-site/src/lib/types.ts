export interface FlavorVariant {
  name: string;
  image: string;
}

export interface ProductStat {
  label: string;
  value: string;
}

export interface WhyItWorksItem {
  index: string;
  title: string;
  desc: string;
}

export interface WhenToUseStep {
  number: number;
  instruction: string;
}

export interface FormulaRow {
  dose: string;
  compound: string;
  function: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "essentials" | "pre-training" | "intra-training" | "recovery";
  phase: string;
  price: number;
  tagline: string;
  summary: string;
  description: string;
  benefits: Benefit[];
  usage: string;
  ingredients: string;
  color: string;
  image: string;
  variants?: FlavorVariant[];
  heroFeatures?: string[];
  stats?: ProductStat[];
  whyItWorks?: WhyItWorksItem[];
  whenToUse?: {
    heading: string;
    timing: string;
    steps: WhenToUseStep[];
    stackRole: string;
    keyCompound: { name: string; dose: string; detail: string };
  };
  formula?: FormulaRow[];
}

export interface Benefit {
  title: string;
  desc: string;
}

export interface Stack {
  id: string;
  name: string;
  label: string;
  desc: string;
  products: string[];
  price: number;
  originalPrice: number;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
