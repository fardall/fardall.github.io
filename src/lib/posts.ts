export interface PostContent {
  type: "paragraph" | "blockquote" | "heading";
  text: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: PostContent[];
}

export const posts: Post[] = [
  {
    slug: "server-driven-ui",
    title: "Building a Server-Driven UI Framework",
    date: "OCT 24, 2024",
    readTime: "8 MIN READ",
    content: [
      {
        type: "paragraph",
        text: "Server-driven UI (SDUI) is a powerful paradigm where the server dictates the UI components and layout to the client. This allows for rapid iteration without waiting for app store reviews. In this technical deep-dive, we'll explore the architecture of a bespoke SDUI system built for high-performance mobile applications.",
      },
      {
        type: "paragraph",
        text: "At its core, SDUI is about decoupling the presentation logic from the client. Instead of hardcoding views, the client acts as a \"dumb renderer,\" interpreting a JSON payload from the server. This payload describes a tree of UI nodes, each with a specific type and properties.",
      },
      {
        type: "blockquote",
        text: "The shift from imperative client-side rendering to declarative server-driven construction fundamentally changes how we approach mobile engineering velocity.",
      },
      {
        type: "paragraph",
        text: "To achieve this, we need a robust contract between the client and the server. We chose to represent this contract using a strongly-typed JSON schema, ensuring that both sides agree on the available components and their respective properties.",
      },
      {
        type: "paragraph",
        text: "Let's look at a simplified example of what this JSON payload might look like for a basic \"Hero\" component. Notice the intentional lack of styling information; the server dictates what to render, not necessarily how it's styled (which is governed by the client-side design system).",
      },
      {
        type: "paragraph",
        text: "The client receives this payload and iterates through the tree, mapping each type to a native (or React Native/Flutter) component registry.",
      },
      {
        type: "heading",
        text: "Client-Side Rendering Engine",
      },
      {
        type: "paragraph",
        text: "Building the renderer requires careful consideration of performance and state management. We utilize a recursive functional component approach, parsing the JSON and yielding UI elements.",
      },
      {
        type: "paragraph",
        text: "Key components include the Component Registry, which is a strict mapping of string types to actual UI components; Action Handling, a centralized dispatcher that interprets action strings; and Error Boundaries, crucial for ensuring that a malformed node doesn't crash the entire screen.",
      },
      {
        type: "paragraph",
        text: "Bugs encountered during development included weird border flicker when expanding, subpixel jitter when animating font-variation-settings weight, and backdrop rendering inconsistencies across different engines.",
      },
    ],
  },
  {
    slug: "kotlin-multiplatform",
    title: "Optimizing Kotlin Multiplatform Performance",
    date: "MAR 12, 2024",
    readTime: "12 MIN READ",
    content: [
      {
        type: "paragraph",
        text: "Kotlin Multiplatform (KMP) has revolutionized how we share logic across platforms, but performance remains a critical concern for high-load applications...",
      },
    ],
  },
  {
    slug: "zenith-flutter",
    title: "Architecting Zenith: A Flutter Case Study",
    date: "FEB 08, 2024",
    readTime: "15 MIN READ",
    content: [
      {
        type: "paragraph",
        text: "In this case study, we examine the architecture of Zenith, a large-scale Flutter application focusing on state management and modularity...",
      },
    ],
  },
  {
    slug: "legacy-android-compose",
    title: "Refactoring Legacy Android Systems for Jetpack Compose",
    date: "JAN 22, 2024",
    readTime: "10 MIN READ",
    content: [
      {
        type: "paragraph",
        text: "Transitioning from XML to Compose isn't just about the UI; it's about changing how we think about state and view updates...",
      },
    ],
  },
  {
    slug: "cicd-mobile-monorepos",
    title: "CI/CD Automation for Mobile Monorepos",
    date: "DEC 15, 2023",
    readTime: "8 MIN READ",
    content: [
      {
        type: "paragraph",
        text: "Managing build pipelines for large monorepos requires specialized strategies to keep developer velocity high...",
      },
    ],
  },
];
