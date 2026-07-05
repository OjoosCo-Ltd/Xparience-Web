import Image from "next/image";
import Link from "next/link";
import { Bookmark, ChevronRight } from "lucide-react";

const ARTICLES = [
  {
    image: "/images/blog-anxiety.png",
    alt: "A couple chatting on a park bench under cherry blossom trees",
    readTime: "8 Min Read",
    category: "Wellness",
    title: "Navigating Anxiety in the Modern Dating World",
    description:
      "A therapist's guide to maintaining peace of mind while opening your heart to others.",
    author: "Elena S.",
    initials: "ES",
    avatarClass: "bg-[#bcdcee] text-[#1c5d7d]",
  },
  {
    image: "/images/blog-matchmaking.png",
    alt: "A warm, wood-toned restaurant interior with hanging lights",
    readTime: "5 Min Read",
    category: "Technology",
    title: "The Future of AI in Personal Matchmaking",
    description:
      "Can algorithms truly understand human chemistry? We explore the new frontier.",
    author: "Marcus K.",
    initials: "MK",
    avatarClass: "bg-[#1f4f63] text-white",
  },
  {
    image: "/images/blog-boundaries.png",
    alt: "An open book and a vase of flowers on a sunlit bedside table",
    readTime: "12 Min Read",
    category: "Advice",
    title: "Setting Boundaries Without Closing Doors",
    description:
      "How to articulate your needs while staying vulnerable and open to connection.",
    author: "Jules W.",
    initials: "JW",
    avatarClass: "bg-[#7a3f36] text-white",
  },
];

export function LatestExplorations() {
  return (
    <section className="bg-[#eff2f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Latest Explorations
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              New perspectives published weekly by our editorial team.
            </p>
          </div>
          <Link
            href="/archive"
            className="flex shrink-0 items-center gap-1 font-semibold text-brand transition-opacity hover:opacity-80 sm:mt-2"
          >
            Explore Archive
            <ChevronRight className="size-4.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm"
            >
              <Link
                href="/blog"
                className="group relative block aspect-[3/2] overflow-hidden"
              >
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {article.readTime}
                  <span className="size-1 rounded-full bg-slate-400" />
                  {article.category}
                </p>

                <h3 className="font-heading mt-5 text-2xl font-bold leading-snug text-slate-900">
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-brand"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {article.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-9 items-center justify-center rounded-full text-xs font-bold ${article.avatarClass}`}
                    >
                      {article.initials}
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {article.author}
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label={`Bookmark ${article.title}`}
                    className="text-slate-400 transition-colors hover:text-brand"
                  >
                    <Bookmark className="size-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
