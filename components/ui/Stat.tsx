import type { Stat } from "@/content/projects";

export function StatBlock({ value, label, size = "lg" }: Stat & { size?: "lg" | "md" }) {
  return (
    <div className="flex flex-col gap-1">
      <span className={`font-semibold tracking-tight text-accent ${size === "lg" ? "text-4xl" : "text-[28px]"}`}>
        {value}
      </span>
      <span className="font-mono text-[13px] text-muted">{label}</span>
    </div>
  );
}
