import type { Project } from "@/content/projects";
import { StatBlock } from "../ui/Stat";
import { Tag } from "../ui/Tag";
import { PlayLink } from "./PlayLink";
import { ProjectVisual } from "./ProjectVisual";

/** Case study card: info and visual side by side on desktop (visual first when reversed), visual on top on mobile. */
export function ProjectCase({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-bg xl:h-[560px] ${
        reverse ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <div className="flex flex-col gap-8 p-6 xl:w-[520px] xl:shrink-0 xl:justify-between xl:p-12 order-2 xl:order-none">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-[13px] text-muted whitespace-pre-wrap">{project.kicker}</p>
          <h3
            id={`${project.slug}-title`}
            className="text-[32px] leading-[1.05] font-semibold tracking-[-1.5px] text-text xl:text-5xl"
          >
            {project.name}
          </h3>
          <p className="text-base leading-[1.6] text-muted xl:text-[17px]">{project.description}</p>
          {project.tags.length > 0 && (
            <ul aria-label="Tech used" className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          )}
          <PlayLink href={project.playUrl} />
        </div>
        {project.stats.length > 0 && (
          <div className="flex gap-8 xl:gap-12">
            {project.stats.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
        )}
      </div>
      <ProjectVisual project={project} className="order-1 min-h-[240px] xl:order-none xl:min-h-0 xl:flex-1" />
    </article>
  );
}
