import { ArrowUpRight } from "lucide-react";
import { contact, contactSection, footer } from "@/content/site";
import { Container } from "./Container";
import { LinkedinIcon } from "./ui/LinkedinIcon";

const darkFocus = "focus-visible:outline-bg";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-accent text-bg">
      <Container className="flex flex-col gap-7 pt-16 lg:gap-10 lg:pt-[120px]">
        <h2
          id="contact-title"
          className="max-w-[1000px] text-[40px] leading-[1.05] font-semibold tracking-[-2.5px] md:text-[56px] lg:text-[72px]"
        >
          {contactSection.headline}
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={contact.mailto}
            className={`inline-flex items-center justify-between gap-2.5 rounded-md bg-bg px-7 py-[18px] text-[17px] font-medium text-text transition hover:bg-bg/90 sm:justify-center ${darkFocus}`}
          >
            Send email
            <ArrowUpRight aria-hidden size={18} className="text-accent" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2.5 rounded-md border-[1.5px] border-bg px-7 py-[18px] text-[17px] font-medium transition hover:bg-bg/10 ${darkFocus}`}
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-accent text-bg">
      <Container className="flex flex-col gap-2 pt-10 pb-8 font-mono text-[13px] xl:flex-row xl:items-center xl:justify-between xl:gap-8 xl:pt-16 xl:pb-12">
        <span>{footer.brand}</span>
        <span className="text-xs leading-[1.5] xl:text-[13px]">{footer.disclaimer}</span>
        <span>{footer.location}</span>
      </Container>
    </footer>
  );
}
