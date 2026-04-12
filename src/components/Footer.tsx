import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="font-headline text-xs font-bold uppercase tracking-widest text-black dark:text-white">
        ©2024 TECHNICAL_MONOLITH
      </div>
      <div className="flex gap-8">
        <Link
          className="font-headline text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:italic active:opacity-70"
          href="#"
        >
          GITHUB
        </Link>
        <Link
          className="font-headline text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:italic active:opacity-70"
          href="#"
        >
          LINKEDIN
        </Link>
        <Link
          className="font-headline text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:italic active:opacity-70"
          href="#"
        >
          EMAIL
        </Link>
      </div>
    </footer>
  );
}
