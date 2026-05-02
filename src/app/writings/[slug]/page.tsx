import { ArrowLeft } from "lucide-react";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/markdown";
import { notFound } from "next/navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default async function WritingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-surface text-on-surface min-h-screen`}
    >
      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 relative justify-center">
          {/* Sidebar Navigation (Back Arrow) */}
          <aside className="md:absolute md:-left-12 lg:-left-24 top-0">
            <Link
              href="/writings"
              className="inline-flex items-center group transition-opacity hover:opacity-60"
              aria-label="Go back"
            >
              <ArrowLeft className="w-8 h-8" />
            </Link>
          </aside>

          {/* Main Content Column */}
          <div className="max-w-2xl w-full">
            {/* Header Section */}
            <header className="mb-16">
              <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">
                {post.title}
              </h1>
              <div className="flex flex-col gap-1">
                <span className="font-headline text-on-surface-variant text-lg font-bold">
                  {post.date}
                </span>
                <span className="font-headline text-on-surface-variant text-sm uppercase tracking-widest opacity-60">
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Article Body */}
            <article 
              className="markdown-content text-on-surface max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const allPosts = await getSortedPostsData();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
