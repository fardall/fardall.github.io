import Image from "next/image";
import type { Project } from "@/content/projects";
import { PhoneShots } from "../ui/PhoneShots";

/** Screenshot stage, or a full-bleed concept image with its badge. */
export function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  if (project.concept) {
    const [shot] = project.shots;
    return (
      <div className={`relative overflow-hidden bg-[#1A211D] ${className}`}>
        <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 728px, 100vw" className="object-cover" />
        <span className="absolute top-5 left-5 rounded-full bg-[#0E1110CC] px-2.5 py-1.5 font-mono text-[11px] text-[#C9D0CB]">
          Concept visual
        </span>
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center bg-[#1A211D] px-4 py-6 ${className}`}>
      <PhoneShots shots={project.shots} />
    </div>
  );
}
