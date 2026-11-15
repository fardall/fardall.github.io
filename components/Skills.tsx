import { sections, skillGroups } from "@/content/site";
import { SplitSection } from "./SplitSection";

export function Skills() {
  return (
    <SplitSection id="skills" {...sections.skills}>
      <div className="flex flex-col gap-7 lg:gap-9">
        {skillGroups.map((g) => (
          <div key={g.group} className="flex flex-col gap-3.5">
            <h3 className="font-mono text-xs tracking-[1.5px] text-muted">{g.group}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-4 py-[9px] text-[15px] text-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
