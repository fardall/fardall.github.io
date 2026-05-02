---
title: "Building a Server-Driven UI Framework"
date: "OCT 24, 2024"
readTime: "8 MIN READ"
slug: "server-driven-ui"
---

Server-driven UI (SDUI) is a powerful paradigm where the server dictates the UI components and layout to the client. This allows for rapid iteration without waiting for app store reviews. In this technical deep-dive, we'll explore the architecture of a bespoke SDUI system built for high-performance mobile applications.

At its core, SDUI is about decoupling the presentation logic from the client. Instead of hardcoding views, the client acts as a "dumb renderer," interpreting a JSON payload from the server. This payload describes a tree of UI nodes, each with a specific type and properties.

> The shift from imperative client-side rendering to declarative server-driven construction fundamentally changes how we approach mobile engineering velocity.

To achieve this, we need a robust contract between the client and the server. We chose to represent this contract using a strongly-typed JSON schema, ensuring that both sides agree on the available components and their respective properties.

Let's look at a simplified example of what this JSON payload might look like for a basic "Hero" component. Notice the intentional lack of styling information; the server dictates what to render, not necessarily how it's styled (which is governed by the client-side design system).

The client receives this payload and iterates through the tree, mapping each type to a native (or React Native/Flutter) component registry.

## Client-Side Rendering Engine

Building the renderer requires careful consideration of performance and state management. We utilize a recursive functional component approach, parsing the JSON and yielding UI elements.

Key components include the Component Registry, which is a strict mapping of string types to actual UI components; Action Handling, a centralized dispatcher that interprets action strings; and Error Boundaries, crucial for ensuring that a malformed node doesn't crash the entire screen.

Bugs encountered during development included weird border flicker when expanding, subpixel jitter when animating font-variation-settings weight, and backdrop rendering inconsistencies across different engines.
