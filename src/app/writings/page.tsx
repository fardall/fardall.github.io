import { ArrowRight } from "lucide-react";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { posts } from "@/lib/posts";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function WritingsPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-surface text-on-surface min-h-screen`}>
      <Header activePage="writings" />

      <main className="pt-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          {/* Page Header */}
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-black font-headline tracking-tighter text-primary uppercase text-5xl md:text-6xl">
              WRITINGS
            </h1>
          </div>

          {/* Blog List Section */}
          <section className="mb-24">
            <div className="flex flex-col">
              {posts.map((post, index) => (
                <Link
                  key={index}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 px-4 border-b border-black transition-all duration-300 hover:bg-black hover:text-white"
                  href={`/writings/${post.slug}`}
                >
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <span className="font-mono text-sm tracking-widest text-neutral-500 group-hover:text-neutral-400 uppercase">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-tight">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 transition-transform group-hover:translate-x-2">
                    <ArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
