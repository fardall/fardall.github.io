export const contact = {
  email: "mfardal08@gmail.com",
  mailto: "mailto:mfardal08@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhamad-fardal-akter-min-gali/",
  cv: "/cv.pdf",
  cvFileName: "Muhamad-Fardal-CV.pdf",
} as const;

export const brand = "fardal.dev";

export const nav: { label: string; href: `#${string}` }[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export const hero = {
  status: "Mobile Engineer · Android & Flutter — Jakarta, Indonesia",
  headline: "I build mobile apps millions of people tap every day.",
  intro:
    "I'm Muhamad Fardal — a mobile engineer shipping ticketing, banking and e-commerce apps with Kotlin, Jetpack Compose and Flutter.",
};

export const sections = {
  projects: { index: "01 / work", title: "Products I helped ship" },
  skills: { index: "02 / toolkit", title: "What I work with" },
  experience: { index: "03 / experience", title: "Teams I've built with" },
};

export const skillGroups: { group: string; items: string[] }[] = [
  { group: "LANGUAGES", items: ["Kotlin", "Java", "Dart", "Swift"] },
  { group: "PLATFORMS", items: ["Android", "Android TV", "Jetpack Compose", "Flutter", "iOS"] },
  { group: "TOOLS", items: ["Jenkins", "GitLab", "Postman", "Figma", "Jira", "Confluence"] },
  { group: "SOFTWARE DESIGN", items: ["Clean Architecture", "SOLID", "Design Patterns", "System Design"] },
];

export const jobs: { company: string; role: string; period?: string }[] = [
  { company: "PT Telkomsel", role: "Android Engineer" },
  { company: "PT Pegadaian", role: "Mobile Engineer" },
  { company: "Bank Danamon Indonesia", role: "Android Engineer" },
  { company: "PT Kode Aplikasi Indonesia", role: "Software Engineer" },
];

export const contactSection = {
  index: "04 / contact",
  headline: "Have a mobile product to build? Let's talk.",
};

export const footer = {
  brand,
  disclaimer:
    "App names and trademarks belong to their respective owners. Shown only to describe my contributions.",
  location: "Jakarta, Indonesia",
};
