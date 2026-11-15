import { jobs, sections } from "@/content/site";
import { SplitSection } from "./SplitSection";

export function Experience() {
  return (
    <SplitSection id="experience" {...sections.experience}>
      <ol className="border-b border-line">
        {jobs.map((job) => (
          <li
            key={job.company}
            className="flex flex-col gap-1 border-t border-line py-5 md:flex-row md:items-center md:justify-between md:gap-2 md:py-7"
          >
            <span className="text-xl font-semibold tracking-[-0.5px] text-text md:text-[26px]">{job.company}</span>
            <span className="text-[15px] text-muted md:text-[17px]">
              {job.role}
              {job.period && <span className="ml-3 font-mono text-[13px]">{job.period}</span>}
            </span>
          </li>
        ))}
      </ol>
    </SplitSection>
  );
}
