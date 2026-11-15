import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact, Footer } from "@/components/Contact";

describe("Contact", () => {
  it("shows the headline as an h2", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Have a mobile product to build? Let's talk.");
  });

  it("links to email and LinkedIn", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "Send email" })).toHaveAttribute("href", "mailto:mfardal08@gmail.com");
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/muhamad-fardal-akter-min-gali/");
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the footer with location and disclaimer", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveTextContent("Jakarta, Indonesia");
    expect(footer).toHaveTextContent("App names and trademarks belong to their respective owners.");
  });
});
