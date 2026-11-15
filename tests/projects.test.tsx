import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "@/components/Projects";
import { ProjectCase } from "@/components/projects/ProjectCase";
import { MoreWork } from "@/components/projects/MoreWork";
import type { Project } from "@/content/projects";

const base: Project = {
  slug: "x",
  kicker: "Kicker",
  name: "Example App",
  description: "Did things.",
  tags: ["Kotlin"],
  stats: [{ value: "4.5★", label: "52k ratings" }],
  shots: [1, 2, 3].map((n) => ({ src: `/images/s${n}.png`, alt: `Example screen ${n}`, width: 720, height: 1280 })),
};

describe("Projects section", () => {
  it("renders case studies then more work, in design order", () => {
    render(<Projects />);
    expect(screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual([
      "Credit Card Suite",
      "Design System & Server-Driven UI",
      "JDSports",
      "Agen Pegadaian",
      "EZTrade Store",
      "MyMRTJ",
    ]);
  });
});

describe("Google Play link", () => {
  it("renders when playUrl is set and opens a new tab safely", () => {
    render(<ProjectCase project={{ ...base, playUrl: "https://play.google.com/store/apps/details?id=x" }} reverse={false} />);
    const link = screen.getByRole("link", { name: /google play/i });
    expect(link).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=x");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("is omitted when playUrl is missing, for case studies and more work", () => {
    render(<><ProjectCase project={base} reverse={false} /><MoreWork items={[base]} /></>);
    expect(screen.queryByRole("link", { name: /google play/i })).toBeNull();
  });
});

describe("concept visual", () => {
  it("shows a single image with the Concept visual badge", () => {
    const concept: Project = { ...base, concept: true, shots: [base.shots[0]] };
    render(<ProjectCase project={concept} reverse />);
    expect(screen.getByText("Concept visual")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
