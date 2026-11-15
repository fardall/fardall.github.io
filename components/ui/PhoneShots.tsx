import Image from "next/image";
import type { Shot } from "@/content/projects";

/** Screenshots in a centered row; the middle one is ~10% larger, as in the design. */
export function PhoneShots({ shots, size = "lg" }: { shots: Shot[]; size?: "lg" | "md" }) {
  const base = size === "lg" ? "w-[28%] max-w-[201px]" : "w-[28%] max-w-[167px]";
  const middle = size === "lg" ? "w-[31%] max-w-[221px]" : "w-[31%] max-w-[184px]";
  return (
    <div className="flex w-full items-center justify-center gap-2.5 md:gap-4">
      {shots.map((shot, i) => (
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          className={`h-auto rounded-[10px] border border-line md:rounded-[18px] ${i === 1 ? middle : base}`}
        />
      ))}
    </div>
  );
}
