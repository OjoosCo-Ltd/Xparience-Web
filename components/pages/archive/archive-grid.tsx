import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const FILTERS = [
  "All",
  "Dating Tips",
  "Mental Wellness",
  "Relationship Advice",
  "Community Stories",
  "Virtual Date Ideas",
];

const ARTICLES = [
  {
    image: "/images/silence.png",
    badge: "Connection",
    badgeColor: "bg-[#1f4f63]",
    date: "May 12, 2024",
    readTime: "8 min read",
    title: "The Art of Active Silence in Relationships",
    excerpt:
      "Understanding how quiet presence can strengthen emotional bonds more effectively than constant conversation...",
  },
  {
    image: "/images/detox.png",
    badge: "Mental Wellness",
    badgeColor: "bg-[#95604a]",
    date: "May 08, 2024",
    readTime: "6 min read",
    title: "Digital Detox: Reclaiming Your Mental Space",
    excerpt:
      "Practical steps to reduce screen time and rediscover the joy of the analog world in a hyper-connected age...",
  },
  {
    image: "/images/sustainable.png",
    badge: "Community",
    badgeColor: "bg-[#1f4f63]",
    date: "May 03, 2024",
    readTime: "12 min read",
    title: "Building Sustainable Communities",
    excerpt:
      "Why modern isolation is growing and how we can foster intentional neighborhoods and support systems...",
  },
  {
    image: "/images/creative.png",
    badge: "Virtual Ideas",
    badgeColor: "bg-[#1f4f63]",
    date: "April 28, 2024",
    readTime: "5 min read",
    title: "10 Creative Virtual Date Night Rituals",
    excerpt:
      "Break the repetitive cycle of video calls with these engaging and sensory-rich remote date activities...",
  },
  {
    image: "/images/motion.png",
    badge: "Mental Wellness",
    badgeColor: "bg-[#95604a]",
    date: "April 22, 2024",
    readTime: "10 min read",
    title: "Mindfulness in Motion: Everyday Zen",
    excerpt:
      "Finding meditation in the most mundane tasks of daily life, from washing dishes to morning commutes...",
  },
  {
    image: "/images/hobbies.png",
    badge: "Creativity",
    badgeColor: "bg-[#1f4f63]",
    date: "April 18, 2024",
    readTime: "7 min read",
    title: "The Psychology of Shared Hobbies",
    excerpt:
      "Exploring why learning a new skill together can significantly boost dopamine and relationship satisfaction...",
  },
];

const PAGES = ["1", "2", "3", "...", "12"];

export function ArchiveGrid() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
      <div className="mx-auto w-full max-w-[88rem]">
        {/* Filters + sort — visual only for now */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((filter, i) => (
              <button
                key={filter}
                type="button"
                className={
                  i === 0
                    ? "rounded-full bg-[#1f4f63] px-5 py-2 text-sm font-semibold text-white"
                    : "rounded-full bg-[#eef0f3] px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
                }
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">Sort by:</span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-[#eef0f3] px-4 py-2 text-sm font-semibold text-[#1f4f63] transition-colors hover:bg-[#e2e5e9]"
            >
              Newest First
              <ChevronDown className="size-4" />
            </button>
          </div>
        </div>

        {/* Article cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative">
                <Image
                  src={article.image}
                  alt=""
                  width={568}
                  height={426}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white ${article.badgeColor}`}
                >
                  {article.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="flex items-center gap-2 text-sm text-slate-500">
                  {article.date}
                  <span className="size-1 rounded-full bg-slate-400" />
                  {article.readTime}
                </p>
                <h2 className="font-heading mt-3 text-2xl font-bold leading-snug text-[#17546d]">
                  {article.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {article.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-wide text-[#1f4f63] transition-opacity hover:opacity-80"
                >
                  Read Article
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination — visual only for now */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            className="flex size-11 items-center justify-center rounded-xl bg-[#eef0f3] text-slate-600 transition-colors hover:bg-slate-200"
          >
            <ChevronLeft className="size-4" />
          </button>
          {PAGES.map((page) => (
            <button
              key={page}
              type="button"
              className={
                page === "1"
                  ? "flex size-11 items-center justify-center rounded-xl bg-[#1f4f63] text-sm font-semibold text-white"
                  : page === "..."
                    ? "flex size-11 items-center justify-center text-sm text-slate-500"
                    : "flex size-11 items-center justify-center rounded-xl bg-[#eef0f3] text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200"
              }
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            className="flex size-11 items-center justify-center rounded-xl bg-[#eef0f3] text-slate-600 transition-colors hover:bg-slate-200"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
