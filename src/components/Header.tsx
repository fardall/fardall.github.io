import Link from "next/link";

interface HeaderProps {
  activePage?: "projects" | "writings" | "about" | "contact";
}

export default function Header({ activePage }: HeaderProps) {
  const getLinkClass = (page: string) => {
    const isActive = activePage === page;
    return `font-headline uppercase tracking-tighter font-bold transition-colors duration-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ${
      isActive
        ? "text-black dark:text-white underline decoration-4 underline-offset-8"
        : "text-gray-500 dark:text-gray-400"
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-white dark:bg-black border-b-2 border-black dark:border-white">
      <div className="text-2xl font-black text-black dark:text-white tracking-tight font-headline uppercase">
        Muhamad Fardal Akter Min Gali
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <Link className={getLinkClass("projects")} href="/">
          PROJECTS
        </Link>
        <Link className={getLinkClass("writings")} href="/writings">
          WRITINGS
        </Link>
        <Link className={getLinkClass("about")} href="/about">
          ABOUT
        </Link>
        <Link className={getLinkClass("contact")} href="/contact">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
