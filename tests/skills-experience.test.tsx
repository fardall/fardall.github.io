import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

describe("Skills", () => {
  it("shows the four groups and their items", () => {
    render(<Skills />);
    for (const g of ["LANGUAGES", "PLATFORMS", "TOOLS", "SOFTWARE DESIGN"]) {
      expect(screen.getByText(g)).toBeInTheDocument();
    }
    expect(screen.getByText("Jetpack Compose")).toBeInTheDocument();
  });
});

describe("Experience", () => {
  it("lists four jobs in order, starting with Telkomsel", () => {
    render(<Experience />);
    const items = within(screen.getByRole("list")).getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent("PT Telkomsel");
    expect(items[0]).toHaveTextContent("Android Engineer");
  });
});
