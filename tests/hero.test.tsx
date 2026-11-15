import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

const LINKEDIN = "https://www.linkedin.com/in/muhamad-fardal-akter-min-gali/";

describe("Nav", () => {
  it("links to each section and to email", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(within(nav).getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
    expect(within(nav).getByRole("link", { name: "Skills" })).toHaveAttribute("href", "#skills");
    expect(within(nav).getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "mailto:mfardal08@gmail.com");
  });
});

describe("Hero", () => {
  it("shows the headline as the h1", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "I build mobile apps millions of people tap every day.",
    );
  });

  it("wires the three calls to action", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "See my work" })).toHaveAttribute("href", "#projects");
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toHaveAttribute("href", LINKEDIN);
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
    const cv = screen.getByRole("link", { name: "Download CV" });
    expect(cv).toHaveAttribute("href", "/cv.pdf");
    expect(cv).toHaveAttribute("download");
  });
});
