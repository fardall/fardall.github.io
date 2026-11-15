import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { contact, jobs, skillGroups } from "@/content/site";
import { caseStudies, moreWork } from "@/content/projects";

describe("site content", () => {
  it("exposes the contact links from the spec", () => {
    expect(contact.mailto).toBe("mailto:mfardal08@gmail.com");
    expect(contact.linkedin).toBe("https://www.linkedin.com/in/muhamad-fardal-akter-min-gali/");
    expect(contact.cv).toBe("/cv.pdf");
  });

  it("lists the four skill groups and four jobs", () => {
    expect(skillGroups.map((g) => g.group)).toEqual(["LANGUAGES", "PLATFORMS", "TOOLS", "SOFTWARE DESIGN"]);
    expect(jobs).toHaveLength(4);
  });
});

describe("project content", () => {
  it("keeps case studies and more work in design order", () => {
    expect(caseStudies.map((p) => p.name)).toEqual([
      "Credit Card Suite",
      "Design System & Server-Driven UI",
      "JDSports",
      "Agen Pegadaian",
    ]);
    expect(moreWork.map((p) => p.name)).toEqual(["EZTrade Store", "MyMRTJ"]);
  });

  it("points every screenshot at an existing file with alt text", () => {
    for (const shot of [...caseStudies, ...moreWork].flatMap((p) => p.shots)) {
      expect(fs.existsSync(path.join("public", shot.src)), shot.src).toBe(true);
      expect(shot.alt.trim()).not.toBe("");
    }
  });

  it("keeps every screenshot light enough for mobile data (under 150 KB)", () => {
    for (const shot of [...caseStudies, ...moreWork].flatMap((p) => p.shots)) {
      const bytes = fs.statSync(path.join("public", shot.src)).size;
      expect(bytes, shot.src).toBeLessThan(150 * 1024);
    }
  });
});
