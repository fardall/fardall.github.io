export type Stat = { value: string; label: string };
export type Shot = { src: string; alt: string; width: number; height: number };
export type Project = {
  slug: string;
  kicker: string;
  name: string;
  description: string;
  tags: string[];
  stats: Stat[];
  shots: Shot[];
  /** Single concept visual with a "Concept visual" badge instead of app screenshots. */
  concept?: boolean;
  /** Official Google Play listing. When undefined, no Google Play button is rendered. */
  playUrl?: string;
};

/** Intrinsic pixel sizes of the screenshots in public/images, keyed by file name. */
const sizes: Record<string, [number, number]> = {
  "play-jdsports": [480, 1040],
  "play-agenpegadaian": [480, 841],
  "play-mymrtj-1": [480, 984],
};

const shots = (file: string, name: string): Shot[] =>
  [1, 2, 3].map((n) => {
    const base = `play-${file}`;
    const [width, height] = sizes[`${base}-${n}`] ?? sizes[base] ?? [480, 854];
    return { src: `/images/${base}-${n}.webp`, alt: `${name} screen ${n}`, width, height };
  });

export const caseStudies: Project[] = [
  {
    slug: "credit-card-suite",
    kicker: "01  —  Bank Danamon · Mobile banking",
    name: "Credit Card Suite",
    description:
      "Built credit card features in Danamon's mobile banking app — limit management, bill payment, money transfer, cash withdrawal and autopay — plus a glassmorphism UI and a floating gamification button.",
    tags: ["Compose", "Coroutines", "Hilt", "Paging 3"],
    stats: [
      { value: "10+", label: "features shipped" },
      { value: "4", label: "payment flows" },
    ],
    shots: shots("danamon", "Danamon credit card"),
  },
  {
    slug: "design-system-sdui",
    kicker: "02  —  Telkomsel · Shared Android SDKs",
    name: "Design System & Server-Driven UI",
    description:
      "Built Telkomsel's Android design system from tokens up to atoms, molecules and components, then a server-driven UI layer on top of it with analytics built into every component.",
    tags: ["Kotlin", "Compose", "JUnit", "Detekt"],
    stats: [],
    shots: [{ src: "/images/generated.webp", alt: "Concept visual of design system components", width: 1408, height: 768 }],
    concept: true,
  },
  {
    slug: "jdsports",
    kicker: "03  —  Erajaya · E-commerce",
    name: "JDSports",
    description: "Built the core shopping flow: product detail, cart, promo and transaction detail pages.",
    tags: ["Kotlin", "Compose", "Jetpack", "Coroutines"],
    stats: [
      { value: "4.8★", label: "5.75k ratings" },
      { value: "100k+", label: "downloads" },
    ],
    shots: shots("jdsports", "JDSports"),
  },
  {
    slug: "agen-pegadaian",
    kicker: "04  —  Pegadaian · Flutter revamp",
    name: "Agen Pegadaian",
    description:
      "Led a team of two rebuilding the agent app in Flutter: pawn and booking for jewelry, gold bars, laptops, phones and vehicles, gold savings and installments, eKYC, home and profile.",
    tags: ["Flutter", "Dart", "Bloc", "iOS"],
    stats: [],
    shots: shots("agenpegadaian", "Agen Pegadaian"),
  },
];

export const moreWork: Project[] = [
  {
    slug: "eztrade-store",
    kicker: "Samsung Indonesia · Trade-in",
    name: "EZTrade Store",
    description: "Built the device checking and device assignment pages store staff use for Samsung trade-ins.",
    tags: [],
    stats: [{ value: "4.4★", label: "5k ratings" }],
    shots: shots("eztrade", "EZTrade Store"),
  },
  {
    slug: "mymrtj",
    kicker: "MRT Jakarta · Ticketing app",
    name: "MyMRTJ",
    description: "Built a horizontally scrollable promo dialog for the ticketing app Jakarta's commuters use daily.",
    tags: [],
    stats: [
      { value: "1M+", label: "downloads" },
      { value: "4.5★", label: "52k ratings" },
    ],
    shots: shots("mymrtj", "MyMRTJ"),
  },
];
