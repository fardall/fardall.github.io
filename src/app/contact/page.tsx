import { ArrowRight } from "lucide-react";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function ContactPage() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-surface text-on-surface min-h-screen flex flex-col`}
    >
      <Header activePage="contact" />

      <main className="flex-grow flex flex-col justify-center items-center px-6 md:px-24 py-24 pt-32 w-full max-w-5xl mx-auto text-center">
        <div className="space-y-12 w-full">
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter uppercase text-primary leading-tight">
            GET IN TOUCH
          </h1>
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="font-body text-lg md:text-2xl text-on-surface-variant leading-relaxed">
              I&apos;m always open to discussing high-performance mobile architecture,
              technical leadership, or new opportunities.
            </p>
          </div>
          <div className="pt-16 flex justify-center">
            <a
              className="inline-flex items-center justify-center bg-black text-white font-headline text-sm uppercase font-bold tracking-widest px-12 py-6 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 group"
              href="mailto:mfardal08@gmail.com"
            >
              EMAIL ME
              <ArrowRight className="ml-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <Link
              className="font-headline text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:italic active:opacity-70"
              href="https://github.com/fardall"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Link>
            <Link
              className="font-headline text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:italic active:opacity-70"
              href="https://www.linkedin.com/in/muhamad-fardal-akter-min-gali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
