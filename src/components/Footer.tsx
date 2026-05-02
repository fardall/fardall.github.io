import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="font-headline text-xs font-bold uppercase tracking-widest text-black dark:text-white">
        ©2026 MUHAMAD FARDAL
      </div>
      <div className="flex gap-8">
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
        <Link
          className="font-headline text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:italic active:opacity-70"
          href="mailto:mfardal08@gmail.com"
        >
          EMAIL
        </Link>
      </div>
    </footer>
  );
}
