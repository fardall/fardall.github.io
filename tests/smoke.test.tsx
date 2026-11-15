import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("home page", () => {
  it("renders the main landmark anchored at #top", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toHaveAttribute("id", "top");
  });

  it("has exactly one h1", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("orders the sections as in the design", () => {
    const { container } = render(<Home />);
    const ids = [...container.querySelectorAll("section[id]")].map((s) => s.id);
    expect(ids).toEqual(["hero", "projects", "skills", "experience", "contact"]);
  });

  it("gives every image alt text", () => {
    render(<Home />);
    for (const img of screen.getAllByRole("img")) {
      expect(img.getAttribute("alt")?.trim()).toBeTruthy();
    }
  });
});

describe("focus styles", () => {
  it("keep the global focus outline in a cascade layer so utilities can override it", async () => {
    const fs = await import("node:fs");
    const css = fs.readFileSync("app/globals.css", "utf8");
    const layered = css.match(/@layer base\s*{[\s\S]*?:focus-visible[\s\S]*?}\s*}/);
    expect(layered, "a:focus-visible rule must live inside @layer base").not.toBeNull();
  });
});
