import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
  download?: boolean | string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  className?: string;
  children: ReactNode;
};

const variants = {
  primary: "bg-accent text-bg font-semibold hover:brightness-110",
  secondary: "border border-line text-text font-medium hover:border-muted",
};

export function ButtonLink({
  href,
  variant,
  external,
  download,
  icon,
  iconPosition = "start",
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: download === true ? "" : download } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md px-7 py-4 text-base transition ${variants[variant]} ${className}`}
    >
      {iconPosition === "start" && icon}
      {children}
      {iconPosition === "end" && icon}
    </a>
  );
}
