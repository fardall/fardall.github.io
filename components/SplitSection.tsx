import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHead } from "./ui/SectionHead";

/** Section with its head in a 384px left column and content on the right (stacked on mobile). */
export function SplitSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <Container className="flex flex-col gap-8 py-16 xl:flex-row xl:gap-20 xl:py-[120px]">
        <div className="xl:w-[384px] xl:shrink-0">
          <SectionHead id={`${id}-title`} title={title} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </Container>
    </section>
  );
}
