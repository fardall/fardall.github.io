import { ArrowRight } from "lucide-react";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/markdown";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default async function Home() {
  const allPosts = await getSortedPostsData();

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-surface text-on-surface min-h-screen`}>
      <Header activePage="projects" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[819px] flex flex-col justify-center px-6 md:px-12 bg-surface">
          <div className="max-w-6xl">
            <h1 className="font-headline font-black text-5xl md:text-8xl leading-none tracking-tighter text-primary mb-12">
              I ARCHITECT AND BUILD HIGH-PERFORMANCE MOBILE APPLICATIONS.
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 text-xl font-headline font-bold uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all active:translate-y-0.5 cursor-pointer">
                VIEW WORK
              </button>
              <Link href="/contact">
                <button className="w-full md:w-auto bg-transparent text-primary px-10 py-5 text-xl font-headline font-bold uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-all active:translate-y-0.5 cursor-pointer">
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Numbers Strip */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-y-2 border-black bg-surface-container-low">
          <div className="py-12 px-8 flex flex-col justify-center items-center md:border-r-2 border-black">
            <span className="font-headline font-black text-4xl mb-2">3+ YEARS</span>
            <span className="font-label uppercase tracking-widest text-sm font-bold">EXPERIENCE</span>
          </div>
          <div className="py-12 px-8 flex flex-col justify-center items-center md:border-r-2 border-black bg-white">
            <span className="font-headline font-black text-4xl mb-2">NATIVE</span>
            <span className="font-label uppercase tracking-widest text-sm font-bold">ANDROID</span>
          </div>
          <div className="py-12 px-8 flex flex-col justify-center items-center">
            <span className="font-headline font-black text-4xl mb-2">FLUTTER</span>
            <span className="font-label uppercase tracking-widest text-sm font-bold">CROSS-PLATFORM</span>
          </div>
        </section>

        {/* Selected Work */}
        <section className="bg-surface py-24 px-6 md:px-12">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter">SELECTED WORK</h2>
            <div className="hidden md:block h-0.5 flex-grow mx-8 bg-black"></div>
            <span className="font-label font-bold text-sm">ARCHIVE_V24</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Project 1 */}
            <div className="border-2 border-black p-4 flex flex-col gap-6 group hover:bg-surface-container-highest transition-colors cursor-pointer">
              <div className="aspect-video bg-surface-container-high overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale brightness-90"
                  alt="banking app interface revamp"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoYHV0nJrmcuPyM1BG4njqke6IkpU44LHeDAzNfkNSVqpBsTgeMsd1QICQQ6RyOTX9MZn1wDssL0nevMPoEG5gm1ajGjlqWBbk7YQj_WFReRsVp4GHjWcI40I9kLZZH10o6s-jgh94u2Q7xphXpTgng705W2P9ceHMh3psc7jVsJAXAD5LuGewjI-0PSKmzhAzB647zxmA60AZ64Vp3qi5OCiScRIY1htyFUiUVg7_cFhVV6Li0EmbcuppnR_PdwRy7tbeiBep4k7m"
                />
              </div>
              <div>
                <h3 className="font-headline font-black text-2xl mb-2 uppercase">Banking App Revamp</h3>
                <p className="font-body text-on-surface-variant max-w-md">
                  Advanced banking interface featuring credit card modules, Server-driven UI, and Glassmorphism architecture.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="border-2 border-black p-4 md:-ml-[2px] flex flex-col gap-6 group hover:bg-surface-container-highest transition-colors cursor-pointer">
              <div className="aspect-video bg-surface-container-high overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale brightness-90"
                  alt="fintech platform lead development"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVaQq__o2nnjSQed-PLyENerknNKnmOpFP5VKKk4s_9l81GyejeT3-T-dAWKXY3w2uHiS9llZmpCXk0uMy_074W9a8Kox3WkQWiXCl8QgRG3mcSq4L_AcHubBKhzv_n7nQ8XUhQRFa6POTXFKc_RWcTgWjl3tBQvnIEPTtDJodPAaGt2tJshdZn2frwjZtLli6eTmzdrSYdkRPkmx8OvV4a91G0-L5bc8dcaewoxsmeCBzKoQhq_B9qqmcBWVuNpqTuobxeUavmK_c"
                />
              </div>
              <div>
                <h3 className="font-headline font-black text-2xl mb-2 uppercase">Financial Technology</h3>
                <p className="font-body text-on-surface-variant max-w-md">
                  Comprehensive fintech platform development including EKYC, Gold, and Payment modules with advanced iOS configurations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="bg-black text-white py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
              ENGINEERING_WORKFLOW
            </h2>
            <div className="flex flex-col gap-0">
              {[
                { num: "01", title: "Architecture", desc: "Scalable Modular systems built for longevity." },
                {
                  num: "02",
                  title: "State Management",
                  desc: "Unidirectional data flow for predictable UI behavior.",
                },
                { num: "03", title: "Code Review", desc: "Rigorous peer assessment for maintainable codebases." },
                { num: "04", title: "CI/CD Deployment", desc: "Automated pipelines for flawless delivery cycles." },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group border-t border-gray-800 py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-primary-container transition-all cursor-pointer ${
                    index === 3 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-8">
                    <span className="font-headline text-4xl font-light text-gray-500">{item.num}</span>
                    <h4 className="font-headline text-3xl font-bold uppercase">{item.title}</h4>
                  </div>
                  <p className="mt-4 md:mt-0 font-body text-gray-400 max-w-xs text-sm uppercase tracking-widest">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Writing */}
        <section className="bg-surface py-24 px-6 md:px-12" id="blog">
          <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
            TECHNICAL_WRITING
          </h2>
          <div className="space-y-4">
            {allPosts.slice(0, 3).map((post, index) => (
              <Link
                key={index}
                className="block bg-white border-2 border-black p-6 group transition-all hover:bg-black hover:text-white"
                href={`/writings/${post.slug}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-label text-xs font-bold text-gray-400 group-hover:text-gray-500">
                      {post.date}
                    </span>
                    <h5 className="font-headline text-xl md:text-2xl font-bold uppercase mt-1">{post.title}</h5>
                  </div>
                  <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
