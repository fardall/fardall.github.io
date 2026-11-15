import { ArrowDown, Download } from "lucide-react";
import { LinkedinIcon } from "./ui/LinkedinIcon";
import { contact, hero } from "@/content/site";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./Container";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <Container className="flex flex-col gap-6 pt-14 pb-14 md:gap-8 md:pt-[120px] md:pb-24">
        <p className="flex items-start gap-2.5 font-mono text-sm text-muted md:items-center">
          <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-accent md:mt-0" />
          {hero.status}
        </p>
        <h1
          id="hero-title"
          className="max-w-[1080px] text-[44px] leading-[1.05] font-semibold tracking-[-2.5px] text-text md:text-[64px] lg:text-[80px]"
        >
          {hero.headline}
        </h1>
        <p className="max-w-[680px] text-[17px] leading-[1.6] text-muted md:text-[19px]">{hero.intro}</p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:gap-4">
          <ButtonLink
            href="#projects"
            variant="primary"
            icon={<ArrowDown aria-hidden size={18} />}
            iconPosition="end"
          >
            See my work
          </ButtonLink>
          <ButtonLink href={contact.linkedin} variant="secondary" external icon={<LinkedinIcon />}>
            LinkedIn
          </ButtonLink>
          <ButtonLink
            href={contact.cv}
            variant="secondary"
            download={contact.cvFileName}
            icon={<Download aria-hidden size={18} />}
          >
            Download CV
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
