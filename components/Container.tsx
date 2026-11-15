import type { ReactNode } from "react";

/** Centers content at the design's 1440px frame with its 96px desktop gutters. */
export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-12 lg:px-24 ${className}`}>{children}</div>;
}
