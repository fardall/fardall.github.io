import type { Project } from "@/content/projects";
import { StatBlock } from "../ui/Stat";
import { PlayLink } from "./PlayLink";
import { ProjectVisual } from "./ProjectVisual";

export function MoreWork({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((p) => (
        <article
          key={p.slug}
          aria-labelledby={`${p.slug}-title`}
          className="flex flex-col overflow-hidden rounded-2xl border border-line bg-bg"
        >
          <ProjectVisual project={p} className="min-h-[240px] lg:h-[380px]" />
          <div className="flex flex-col gap-4 p-6 lg:p-10">
            <p className="font-mono text-[13px] text-muted">{p.kicker}</p>
            <h3 id={`${p.slug}-title`} className="text-[32px] font-semibold tracking-[-1px] text-text">
              {p.name}
            </h3>
            <p className="text-base leading-[1.6] text-muted">{p.description}</p>
            {p.stats.length > 0 && (
              <div className="flex gap-8 lg:gap-12">
                {p.stats.map((s) => (
                  <StatBlock key={s.label} {...s} />
                ))}
              </div>
            )}
            <PlayLink href={p.playUrl} />
          </div>
        </article>
      ))}
    </div>
  );
}
