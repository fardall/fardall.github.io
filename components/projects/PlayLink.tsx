import { Play } from "lucide-react";

export function PlayLink({ href }: { href?: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[15px] font-medium text-accent hover:underline"
    >
      <Play aria-hidden size={16} />
      View on Google Play
    </a>
  );
}
