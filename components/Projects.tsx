import { caseStudies, moreWork } from "@/content/projects";
import { sections } from "@/content/site";
import { Container } from "./Container";
import { MoreWork } from "./projects/MoreWork";
import { ProjectCase } from "./projects/ProjectCase";
import { SectionHead } from "./ui/SectionHead";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-surface">
      <Container className="flex flex-col gap-6 py-8 lg:gap-10 lg:py-[60px]">
        <div className="max-w-[700px]">
          <SectionHead id="projects-title" {...sections.projects} />
        </div>
        {caseStudies.map((p, i) => (
          <ProjectCase key={p.slug} project={p} reverse={i % 2 === 1} />
        ))}
        <MoreWork items={moreWork} />
      </Container>
    </section>
  );
}
