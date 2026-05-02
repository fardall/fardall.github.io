# Design System Documentation

## 1. Overview & Creative North Star
**Creative North Star: The Technical Monolith**

This design system is a high-end, editorial interpretation of a "brutalist-lite" aesthetic tailored for a mobile software engineer. It moves away from the chaotic nature of traditional brutalism toward a more disciplined, architectural approach—what we call "The Technical Monolith." 

The system rejects the "template" look by utilizing extreme typographic scale, 0px corner radii, and a rigid, monochromatic palette. It breaks the standard grid through intentional asymmetry and "blueprint" spacing. By removing decorative elements like rounded corners and traditional borders, we create a signature visual identity that feels like a precision-engineered instrument rather than a generic website.

## 2. Colors
This system operates on a strict monochromatic scale, utilizing the Material Design convention to manage depth and hierarchy without introducing hue.

*   **Primary (#000000):** Reserved for high-contrast elements, primary actions, and key headlines.
*   **Surface (#F9F9F9):** The foundation of the experience. It provides a clean, neutral canvas that allows the engineering content to lead.
*   **Neutral Tiers:** Use `surface-container-low` (#F3F3F4) to `surface-container-highest` (#E2E2E2) to define functional areas.

### The "No-Line" Rule
Contrary to standard wireframe aesthetics, this design system **prohibits the use of 1px solid black borders** for sectioning. To achieve a high-end editorial feel, boundaries must be defined solely through background color shifts. For example, a code snippet block (`surface-container-high`) should sit directly against the main background (`surface`), creating a clean, architectural edge that implies structure without the visual noise of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers. To create depth, use the nesting principle:
*   **Base:** `surface`
*   **Section:** `surface-container-low`
*   **Card/Item:** `surface-container-lowest` (pure white) to create a "lifted" feel.
This "stacking" of tonal values creates a sophisticated blueprint feel that is far more premium than flat, outlined boxes.

### The "Glass & Gradient" Rule
To prevent the monochrome look from feeling "dead," we introduce technical polish through:
*   **Monochromatic Gradients:** Use a subtle transition from `primary` (#000000) to `primary-container` (#3B3B3B) for main CTAs to give them a "machined metal" soul.
*   **Technical Glass:** For floating navigation or mobile overlays, use `surface-container-lowest` with 80% opacity and a high `backdrop-blur` (20px+). This allows the content beneath to bleed through as a blurred texture, maintaining the architectural depth.

## 3. Typography
The typography scale is the primary driver of the system's personality. We use a high-contrast pairing of **Space Grotesk** for technical impact and **Inter** for functional clarity.

*   **Display (Space Grotesk):** Set at `display-lg` (3.5rem) with tight letter-spacing. Use this for project titles and major personality statements. It should feel massive and unavoidable.
*   **Headlines (Space Grotesk):** Used to anchor the "Technical Monolith" aesthetic. High contrast between `headline-lg` and `body-md` is essential to guide the eye.
*   **Body (Inter):** All long-form text and technical descriptions use Inter. This provides a neutral, highly readable counterpoint to the aggressive Display fonts.
*   **Labels (Space Grotesk):** Small, all-caps labels (`label-sm`) are used for metadata (e.g., "TECH STACK," "YEAR") to reinforce the architectural blueprint vibe.

## 4. Elevation & Depth
In this system, "Elevation" does not mean "Distance from the screen," but rather "Clarity of Layering."

### The Layering Principle
Depth is achieved through **Tonal Layering**. Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle 2-3% shift in gray provides a soft, natural lift that feels like fine paper or frosted glass.

### Ambient Shadows
When a floating effect is required (such as a mobile fab or modal), use an **Ambient Shadow**:
*   **Blur:** 40px - 60px
*   **Opacity:** 4% - 6%
*   **Color:** Derived from `on-surface` (#1A1C1C).
The shadow should be almost invisible—felt rather than seen.

### The "Ghost Border" Fallback
If a visual divider is absolutely required for accessibility, use a **Ghost Border**: a 1px stroke using the `outline-variant` token at 15% opacity. Never use a 100% opaque black border; it breaks the "Technical Monolith" sophistication.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#000000) with `on-primary` text. 0px corner radius. No shadow.
*   **Secondary:** Ghost style. 1px `primary` border with 0px corner radius.
*   **Interaction:** On hover/active, invert the colors (White background, Black text).

### Input Fields
*   **Architecture:** Use a `surface-container-low` background with a 2px `primary` bottom-border only. This mimics a physical technical drawing.
*   **States:** Error states use `error` (#BA1A1A) text but maintain the 0px architectural structure.

### Cards & Lists
*   **Prohibition:** No divider lines between list items. Use vertical white space (8px, 16px, 24px) or a subtle background toggle between `surface` and `surface-container-low` to separate items.
*   **Layout:** Use edge-to-edge layouts where the container of the card meets the edge of the mobile screen.

### Project Chips
*   **Style:** Rectangular (0px radius), using `surface-container-high` background. No border. Text set in `label-md` Space Grotesk.

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place a large `display-lg` headline off-center to create a bespoke, editorial feel.
*   **Embrace White Space:** Use exaggerated margins to make the software engineering content feel like a gallery piece.
*   **Stick to 0px:** Every single element—buttons, cards, inputs—must have a strictly square corner.

### Don't:
*   **No Rounded Corners:** Even a 2px radius destroys the "Technical Monolith" aesthetic.
*   **No Standard Shadows:** Avoid the "Material Design" floating look. If it doesn't look like it was built by an architect, it doesn't belong.
*   **No Dividers:** Avoid the urge to put a line between everything. Trust the tonal shifts and spacing to do the work.