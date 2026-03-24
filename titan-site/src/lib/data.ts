import { Product, Stack, Testimonial, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Stacks", href: "/stacks" },
  { label: "Philosophy", href: "/philosophy" },
];

export const PRODUCTS: Product[] = [
  {
    id: "foundation",
    name: "TITAN Foundation",
    slug: "foundation",
    category: "essentials",
    phase: "daily",
    price: 59,
    tagline: "Strength & Power Foundation",
    summary:
      "Pure creatine monohydrate. The most researched performance compound in existence — standardized, unflavored, and dosed to build.",
    description:
      "TITAN Foundation is 100% pure micronized creatine monohydrate — nothing else. Creatine is the most extensively studied performance supplement in sports science, with decades of research confirming its ability to increase strength, power output, and lean muscle mass. By saturating phosphocreatine stores in muscle tissue, it accelerates ATP regeneration during high-intensity efforts. The result: more reps, heavier lifts, faster adaptation. No fluff. No stacking gimmicks. Just the compound that works.",
    benefits: [
      {
        title: "Strength & Power",
        desc: "Increases phosphocreatine stores for rapid ATP resynthesis during maximal and near-maximal efforts.",
      },
      {
        title: "Lean Muscle Mass",
        desc: "Supports intramuscular water retention and protein synthesis signaling for measurable hypertrophy over time.",
      },
      {
        title: "Training Volume",
        desc: "Delays fatigue on high-intensity sets, enabling more total work per session — the primary driver of adaptation.",
      },
      {
        title: "Cognitive Output",
        desc: "Creatine phosphate supports brain energy metabolism. Improved focus and mental resilience under training load.",
      },
    ],
    usage:
      "Mix 1 scoop (5g) with water, juice, or your preferred beverage. Take daily — timing is flexible. Consistency over weeks drives results.",
    ingredients:
      "Micronized Creatine Monohydrate (5g per serving). No additives. No fillers. No flavoring.",
    color: "#dde5dc",
    image: "/assets/products/foundation_creatine.png",
    heroFeatures: [
      "5g micronized creatine monohydrate per serving",
      "No fillers, no flavoring — pure compound",
      "Backed by 40+ years of peer-reviewed research",
    ],
    stats: [
      { label: "Servings", value: "30" },
      { label: "Timing", value: "Any Time Daily" },
      { label: "Creatine", value: "5g" },
      { label: "Phase", value: "Daily" },
    ],
    whyItWorks: [
      {
        index: "01",
        title: "ATP Resynthesis",
        desc: "Phosphocreatine donates a phosphate group to ADP, rapidly regenerating ATP during explosive and high-intensity efforts.",
      },
      {
        index: "02",
        title: "Volumization",
        desc: "Creatine draws water into muscle cells, increasing cell volume — a key anabolic signal for protein synthesis.",
      },
      {
        index: "03",
        title: "Satellite Cell Activation",
        desc: "Creatine supplementation enhances satellite cell signaling, directly supporting muscle fiber repair and growth.",
      },
      {
        index: "04",
        title: "Cumulative Saturation",
        desc: "Effects build over 2–4 weeks of daily use as intramuscular stores reach full saturation. Consistency is the mechanism.",
      },
    ],
    whenToUse: {
      heading: "Daily Loading",
      timing: "Any Time — Consistency Is What Matters",
      steps: [
        {
          number: 1,
          instruction:
            "Mix 1 scoop (5g) with 8–12oz of water or any beverage.",
        },
        {
          number: 2,
          instruction:
            "Take daily — pre-training, post-training, or with a meal. Timing is secondary to consistency.",
        },
        {
          number: 3,
          instruction:
            "Full saturation takes 2–4 weeks of daily use. Do not skip. The compound accumulates.",
        },
      ],
      stackRole: "Phase: Daily — Base Layer",
      keyCompound: {
        name: "Micronized Creatine Monohydrate",
        dose: "5g",
        detail:
          "Micronization increases surface area for faster dissolution and uptake. The most validated form — no ester, no HCl, no shortcuts.",
      },
    },
    formula: [
      {
        dose: "5g",
        compound: "Micronized Creatine Monohydrate",
        function: "Phosphocreatine replenishment, ATP resynthesis, strength and power output",
      },
    ],
  },
  {
    id: "prime",
    name: "TITAN Prime",
    slug: "prime",
    category: "pre-training",
    phase: "prime",
    price: 54,
    tagline: "Cognitive & Neural Activation",
    summary:
      "Prepare your body and mind. Activation, focus, and cognitive readiness for the work ahead.",
    description:
      "TITAN Prime is a precision pre-training formula built around cognitive activation and neuromuscular readiness. No excessive stimulants, no crash. Instead, a targeted nootropic and vasodilation stack designed to sharpen focus, elevate drive, and prepare your nervous system for high-output performance. This is Phase 01 of the TITAN protocol — preparation with intent.",
    benefits: [
      {
        title: "Neural Drive",
        desc: "Alpha-GPC and tyrosine for heightened focus, reaction time, and mind-muscle connection.",
      },
      {
        title: "Smooth Energy",
        desc: "Calibrated caffeine with L-theanine for sustained energy without jitter or crash.",
      },
      {
        title: "Vasodilation",
        desc: "L-Citrulline and beetroot extract for enhanced blood flow and nutrient delivery.",
      },
      {
        title: "Adaptogenic Buffer",
        desc: "Rhodiola rosea to modulate cortisol and maintain composure under training stress.",
      },
    ],
    usage:
      "Mix 1 scoop with 10-12oz cold water 20-30 minutes before training. Assess tolerance with half scoop.",
    ingredients:
      "L-Citrulline (6g), Alpha-GPC (300mg), L-Tyrosine (1.5g), Caffeine Anhydrous (200mg), L-Theanine (100mg), Rhodiola Rosea (300mg), Beetroot Extract (500mg), BioPerine (5mg).",
    color: "#d7e2ff",
    image: "/assets/products/prime_tropic.png",
    variants: [
      { name: "Tropic Surge", image: "/assets/products/prime_tropic.png" },
      { name: "Sakura Edge", image: "/assets/products/prime_sakura.png" },
    ],
    heroFeatures: [
      "No crash, no excessive stimulants",
      "Clinical-grade nootropic stack",
      "Vasodilation protocol for max output",
    ],
    stats: [
      { label: "Servings", value: "30" },
      { label: "Timing", value: "20–30 Min Pre" },
      { label: "L-Citrulline", value: "6g" },
      { label: "Phase", value: "01 — Prime" },
    ],
    whyItWorks: [
      {
        index: "01",
        title: "Neural Drive",
        desc: "Alpha-GPC and tyrosine for heightened focus, reaction time, and mind-muscle connection.",
      },
      {
        index: "02",
        title: "Smooth Energy",
        desc: "Calibrated caffeine with L-theanine for sustained energy without jitter or crash.",
      },
      {
        index: "03",
        title: "Vasodilation",
        desc: "L-Citrulline and beetroot extract for enhanced blood flow and nutrient delivery.",
      },
      {
        index: "04",
        title: "Adaptogenic Buffer",
        desc: "Rhodiola rosea to modulate cortisol and maintain composure under training stress.",
      },
    ],
    whenToUse: {
      heading: "Pre-Training Activation",
      timing: "20–30 Minutes Before Training",
      steps: [
        {
          number: 1,
          instruction: "Mix 1 scoop with 10–12oz of cold water.",
        },
        {
          number: 2,
          instruction:
            "Consume 20–30 minutes before training begins.",
        },
        {
          number: 3,
          instruction:
            "First use: start with half a scoop to assess individual tolerance.",
        },
      ],
      stackRole: "Phase 01 — Prime",
      keyCompound: {
        name: "Alpha-GPC",
        dose: "300mg",
        detail:
          "Clinically-dosed precursor to acetylcholine. Neural drive, focus, and mind-muscle connection.",
      },
    },
    formula: [
      {
        dose: "6g",
        compound: "L-Citrulline",
        function: "Nitric oxide production, blood flow, muscular pump",
      },
      {
        dose: "300mg",
        compound: "Alpha-GPC",
        function:
          "Acetylcholine synthesis, cognitive output, neural drive",
      },
      {
        dose: "1.5g",
        compound: "L-Tyrosine",
        function: "Dopamine precursor, stress resistance, mental focus",
      },
      {
        dose: "200mg",
        compound: "Caffeine Anhydrous",
        function: "CNS activation, alertness, training performance",
      },
      {
        dose: "100mg",
        compound: "L-Theanine",
        function: "Smooth energy, jitter suppression, calm focus",
      },
      {
        dose: "300mg",
        compound: "Rhodiola Rosea",
        function:
          "Cortisol modulation, mental endurance, adaptogenic buffer",
      },
      {
        dose: "500mg",
        compound: "Beetroot Extract",
        function:
          "Nitrate conversion, vasodilation, oxygen efficiency",
      },
      {
        dose: "5mg",
        compound: "BioPerine",
        function: "Bioavailability enhancement",
      },
    ],
  },
  {
    id: "perform",
    name: "TITAN Perform",
    slug: "perform",
    category: "intra-training",
    phase: "perform",
    price: 52,
    tagline: "Metabolic Power & Stability",
    summary:
      "Train at full capacity. Endurance, output, and metabolic stability during high-intensity work.",
    description:
      "TITAN Perform is an intra-training formula engineered for sustained output. While others focus on the start of a session, Perform is designed for the middle and end — maintaining power, hydration, and metabolic stability when fatigue sets in. Essential amino acids, electrolytes, and endurance-specific compounds keep you operating at capacity throughout the entire session.",
    benefits: [
      {
        title: "Sustained Output",
        desc: "Full-spectrum EAA complex to prevent catabolism and sustain training intensity.",
      },
      {
        title: "Hydration Matrix",
        desc: "Precision electrolyte blend calibrated for sweat-rate replacement during training.",
      },
      {
        title: "Endurance Support",
        desc: "Beta-alanine and taurine to buffer lactic acid and delay neuromuscular fatigue.",
      },
      {
        title: "Metabolic Stability",
        desc: "Cluster dextrin for measured glycogen replenishment without insulin spikes.",
      },
    ],
    usage:
      "Mix 1 scoop with 16-20oz water. Sip throughout training session. Best consumed during workouts exceeding 45 minutes.",
    ingredients:
      "Essential Amino Acids (10g, full spectrum), Cluster Dextrin (15g), Beta-Alanine (3.2g), Taurine (2g), Electrolyte Complex (sodium, potassium, magnesium), Coconut Water Powder (1g).",
    color: "#f2f4ef",
    image: "/assets/products/perform_blue_razz.png",
    heroFeatures: [
      "Full-spectrum essential amino acids",
      "Stable glycogen fuel — no insulin spike",
      "Precision electrolyte matrix",
    ],
    stats: [
      { label: "Servings", value: "30" },
      { label: "Timing", value: "Intra-Training" },
      { label: "Full-Spec EAAs", value: "10g" },
      { label: "Phase", value: "02 — Perform" },
    ],
    whyItWorks: [
      {
        index: "01",
        title: "Sustained Output",
        desc: "Full-spectrum EAA complex to prevent catabolism and sustain training intensity.",
      },
      {
        index: "02",
        title: "Hydration Matrix",
        desc: "Precision electrolyte blend calibrated for sweat-rate replacement during training.",
      },
      {
        index: "03",
        title: "Endurance Support",
        desc: "Beta-alanine and taurine to buffer lactic acid and delay neuromuscular fatigue.",
      },
      {
        index: "04",
        title: "Metabolic Stability",
        desc: "Cluster dextrin for measured glycogen replenishment without insulin spikes.",
      },
    ],
    whenToUse: {
      heading: "Intra-Training Window",
      timing: "During Your Training Session",
      steps: [
        {
          number: 1,
          instruction: "Mix 1 scoop with 16–20oz of water before the session.",
        },
        {
          number: 2,
          instruction:
            "Begin sipping at the start of training. Maintain steady intake throughout.",
        },
        {
          number: 3,
          instruction:
            "Optimal for sessions exceeding 45 minutes in duration.",
        },
      ],
      stackRole: "Phase 02 — Perform",
      keyCompound: {
        name: "Cluster Dextrin",
        dose: "15g",
        detail:
          "High-molecular-weight carbohydrate. Sustained glycogen fuel with low osmolarity — no spikes, no crash.",
      },
    },
    formula: [
      {
        dose: "10g",
        compound: "Essential Amino Acids",
        function:
          "Full-spectrum muscle protein synthesis and anti-catabolism",
      },
      {
        dose: "15g",
        compound: "Cluster Dextrin",
        function:
          "Sustained glycogen fuel, low osmolarity, no insulin spike",
      },
      {
        dose: "3.2g",
        compound: "Beta-Alanine",
        function: "Lactic acid buffering, muscular endurance extension",
      },
      {
        dose: "2g",
        compound: "Taurine",
        function:
          "Neuromuscular function, cellular hydration, antioxidant",
      },
      {
        dose: "—",
        compound: "Electrolyte Complex",
        function:
          "Sodium, potassium, magnesium — calibrated sweat-rate replacement",
      },
      {
        dose: "1g",
        compound: "Coconut Water Powder",
        function: "Natural electrolyte source, hydration co-factor",
      },
    ],
  },
  {
    id: "fortify",
    name: "TITAN Fortify",
    slug: "fortify",
    category: "recovery",
    phase: "fortify",
    price: 56,
    tagline: "Recovery & Structural Integrity",
    summary:
      "Build what lasts. Recovery, cellular growth, and long-term structural adaptation.",
    description:
      "TITAN Fortify is a post-training and evening recovery formula designed for deep restoration. While most recovery products focus only on protein synthesis, Fortify targets the full spectrum of adaptation — connective tissue repair, inflammation modulation, sleep architecture, and hormonal recovery. This is where the real building happens. Phase 03 of the TITAN protocol — fortification.",
    benefits: [
      {
        title: "Deep Recovery",
        desc: "Magnesium glycinate, zinc, and ashwagandha for hormonal recovery and sleep quality.",
      },
      {
        title: "Tissue Repair",
        desc: "Collagen peptides and vitamin C for connective tissue synthesis and joint integrity.",
      },
      {
        title: "Anti-Inflammatory",
        desc: "Curcumin (with enhanced absorption) and tart cherry for systemic inflammation modulation.",
      },
      {
        title: "Sleep Architecture",
        desc: "Glycine and magnesium to support deep sleep phases where growth hormone peaks.",
      },
    ],
    usage:
      "Mix 1 scoop with 8oz water 30-60 minutes before bed, or immediately post-training. Consistent nightly use recommended.",
    ingredients:
      "Collagen Peptides (10g), Magnesium Glycinate (400mg), Ashwagandha KSM-66 (600mg), Curcumin C3 Complex (500mg), Tart Cherry Extract (500mg), Glycine (3g), Zinc Picolinate (15mg), Vitamin C (250mg).",
    color: "#ebefe9",
    image: "/assets/products/fortify_chocolate.png",
    heroFeatures: [
      "Multi-system recovery architecture",
      "Sleep-phase optimization protocol",
      "Zero synthetic additives",
    ],
    stats: [
      { label: "Servings", value: "30" },
      { label: "Timing", value: "PM / Post-Train" },
      { label: "KSM-66", value: "600mg" },
      { label: "Phase", value: "03 — Fortify" },
    ],
    whyItWorks: [
      {
        index: "01",
        title: "Deep Recovery",
        desc: "Magnesium glycinate, zinc, and ashwagandha for hormonal recovery and sleep quality.",
      },
      {
        index: "02",
        title: "Tissue Repair",
        desc: "Collagen peptides and vitamin C for connective tissue synthesis and joint integrity.",
      },
      {
        index: "03",
        title: "Anti-Inflammatory",
        desc: "Curcumin (with enhanced absorption) and tart cherry for systemic inflammation modulation.",
      },
      {
        index: "04",
        title: "Sleep Architecture",
        desc: "Glycine and magnesium to support deep sleep phases where growth hormone peaks.",
      },
    ],
    whenToUse: {
      heading: "Recovery Window",
      timing: "Post-Training or 30–60 Min Before Bed",
      steps: [
        {
          number: 1,
          instruction: "Mix 1 scoop with 8oz of water.",
        },
        {
          number: 2,
          instruction:
            "Take immediately post-training or 30–60 minutes before sleep.",
        },
        {
          number: 3,
          instruction:
            "Consistent nightly use accelerates structural adaptation over time.",
        },
      ],
      stackRole: "Phase 03 — Fortify",
      keyCompound: {
        name: "KSM-66 Ashwagandha",
        dose: "600mg",
        detail:
          "Full-spectrum root extract. Cortisol suppression, testosterone maintenance, and sleep architecture support.",
      },
    },
    formula: [
      {
        dose: "10g",
        compound: "Collagen Peptides",
        function: "Connective tissue synthesis, joint integrity",
      },
      {
        dose: "400mg",
        compound: "Magnesium Glycinate",
        function:
          "Sleep architecture, muscle recovery, hormonal reset",
      },
      {
        dose: "600mg",
        compound: "Ashwagandha KSM-66",
        function:
          "Cortisol suppression, testosterone support, stress adaptation",
      },
      {
        dose: "500mg",
        compound: "Curcumin C3 Complex",
        function:
          "Systemic inflammation modulation, joint health",
      },
      {
        dose: "500mg",
        compound: "Tart Cherry Extract",
        function:
          "Antioxidant recovery, muscle soreness reduction",
      },
      {
        dose: "3g",
        compound: "Glycine",
        function:
          "Deep sleep phases, collagen cross-linking, detoxification",
      },
      {
        dose: "15mg",
        compound: "Zinc Picolinate",
        function: "Testosterone maintenance, immune support",
      },
      {
        dose: "250mg",
        compound: "Vitamin C",
        function: "Collagen hydroxylation, antioxidant protection",
      },
    ],
  },
];

export const STACKS: Stack[] = [
  {
    id: "strength-stack",
    name: "Strength Stack",
    label: "Performance Layer",
    desc: "Prime + Perform. Everything you need to train with focus and sustained output.",
    products: ["prime", "perform"],
    price: 99,
    originalPrice: 106,
    featured: false,
  },
  {
    id: "full-system",
    name: "Full TITAN System",
    label: "Complete Ecosystem",
    desc: "Foundation + Prime + Perform + Fortify. The definitive performance protocol. Prepare, perform, recover, build.",
    products: ["foundation", "prime", "perform", "fortify"],
    price: 189,
    originalPrice: 221,
    featured: true,
  },
  {
    id: "recovery-stack",
    name: "Recovery Stack",
    label: "Restoration Layer",
    desc: "Foundation + Fortify. The structural base for consistent recovery and long-term adaptation.",
    products: ["foundation", "fortify"],
    price: 105,
    originalPrice: 115,
    featured: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The clarity of the system is what sets it apart. No more guessing what to take when. It\u2019s disciplined.",
    author: "Marcus H.",
    role: "Strength Coach",
    rating: 5,
  },
  {
    quote:
      "Fortify has completely changed my recovery profile. I wake up ready for high-output days without the usual lag.",
    author: "Sarah L.",
    role: "Hybrid Athlete",
    rating: 5,
  },
  {
    quote:
      "Minimalist design, maximalist results. The Perform formula keeps me locked in throughout 2-hour sessions.",
    author: "David K.",
    role: "Competitive Powerlifter",
    rating: 5,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
