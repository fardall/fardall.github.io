import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHead } from "@/components/ui/SectionHead";
import { PhoneShots } from "@/components/ui/PhoneShots";
import { Tag } from "@/components/ui/Tag";
import { StatBlock } from "@/components/ui/Stat";

describe("ButtonLink", () => {
  it("opens external links in a new tab safely", () => {
    render(<ButtonLink href="https://example.com" variant="secondary" external>Go</ButtonLink>);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("keeps internal links in the same tab", () => {
    render(<ButtonLink href="#projects" variant="primary">Work</ButtonLink>);
    const link = screen.getByRole("link", { name: "Work" });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("passes a download filename through", () => {
    render(<ButtonLink href="/cv.pdf" variant="secondary" download="Muhamad-Fardal-CV.pdf">CV</ButtonLink>);
    expect(screen.getByRole("link", { name: "CV" })).toHaveAttribute("download", "Muhamad-Fardal-CV.pdf");
  });
});

describe("SectionHead", () => {
  it("renders the title as a level-2 heading", () => {
    render(<SectionHead title="Products I helped ship" />);
    expect(screen.getByRole("heading", { level: 2, name: "Products I helped ship" })).toBeInTheDocument();
  });
});

describe("PhoneShots", () => {
  it("renders one image per shot with its alt text", () => {
    const shots = [1, 2, 3].map((n) => ({ src: `/images/s${n}.png`, alt: `App screen ${n}`, width: 720, height: 1280 }));
    render(<PhoneShots shots={shots} />);
    expect(screen.getAllByRole("img").map((i) => i.getAttribute("alt"))).toEqual(["App screen 1", "App screen 2", "App screen 3"]);
  });
});

describe("Tag and StatBlock", () => {
  it("render their text", () => {
    render(<><Tag>Compose</Tag><StatBlock value="10+" label="features shipped" /></>);
    expect(screen.getByText("Compose")).toBeInTheDocument();
    expect(screen.getByText("10+")).toBeInTheDocument();
    expect(screen.getByText("features shipped")).toBeInTheDocument();
  });
});
