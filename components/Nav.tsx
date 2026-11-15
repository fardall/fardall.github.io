import { brand, contact, nav } from "@/content/site";
import { Container } from "./Container";

export function Nav() {
  return (
    <header>
      <Container className="flex items-center justify-between py-5 md:py-7">
        <a href="#top" className="font-mono text-base font-semibold text-text">
          {brand}
        </a>
        <div className="flex items-center gap-10">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[15px] text-muted transition hover:text-text">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={contact.mailto}
            className="rounded-md border border-accent px-[18px] py-2.5 text-[15px] font-medium text-accent transition hover:bg-accent hover:text-bg"
          >
            Get in touch
          </a>
        </div>
      </Container>
    </header>
  );
}
