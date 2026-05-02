import { ArrowLeft } from "lucide-react";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
import { posts } from "@/lib/posts";
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
  const post = posts.find((p) => p.slug === slug);

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
            <article className="text-on-surface max-w-none space-y-8">
              {post.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="text-xl leading-relaxed">
                        {block.text}
                      </p>
                    );
                  case "blockquote":
                    return (
                      <blockquote
                        key={index}
                        className="italic text-on-surface-variant py-8 border-y-2 border-black/10 text-2xl font-headline font-medium"
                      >
                        &quot;{block.text}&quot;
                      </blockquote>
                    );
                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="font-headline text-3xl font-bold mt-16 mb-8 uppercase tracking-tight"
                      >
                        {block.text}
                      </h2>
                    );
                  default:
                    return null;
                }
              })}
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
