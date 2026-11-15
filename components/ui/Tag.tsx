import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-white/5 px-3 py-1.5 font-mono text-xs text-[#C9D0CB]">{children}</li>
  );
}
