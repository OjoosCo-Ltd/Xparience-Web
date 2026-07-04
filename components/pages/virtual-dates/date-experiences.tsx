import Image from "next/image";
import { cn } from "@/lib/utils";

// Zigzag rows: odd rows image left, even rows image right.
const EXPERIENCES = [
  {
    eyebrow: "01 / Watch Together",
    title: "Shared cinematic journeys.",
    body: "Enjoy films, series, and shared moments together in real time, creating a more relaxed and natural way to connect no matter where you are.",
    quote:
      "“It creates natural conversation topics and comfortable silence—the ultimate compatibility test.”",
    image: "/images/cinematic.png",
    imageRight: false,
  },
  {
    eyebrow: "02 / Play Together",
    title: "Spontaneity through play.",
    body: "From collaborative puzzles to lighthearted competitive trivia, discover the playful side of your match’s personality in a low-pressure environment.",
    quote:
      "“Play lowers barriers and encourages the kind of spontaneity that builds lasting attraction.”",
    image: "/images/through.png",
    imageRight: true,
  },
  {
    eyebrow: "03 / Plan Meal Together",
    title: "Collaborative dreaming.",
    body: "Design your dream meal or map out a weekend getaway. Explore your shared tastes, discover your food compatibility, and plan memorable dining experiences you’ll both genuinely enjoy",
    quote:
      "“Planning together reveals real-life compatibility and how you navigate decisions as a pair.”",
    image: "/images/dreaming.png",
    imageRight: false,
  },
  {
    eyebrow: "04 / Shop Together",
    title: "Wishlist Chemistry",
    body: "Browse, discover, and react to products together while building a shared wishlist filled with things you both genuinely love and enjoy.",
    quote:
      "“Exploring each other’s tastes and shopping preferences helps strengthen connection and creates a deeper sense of familiarity before meeting in person.”",
    image: "/images/chemistry.png",
    imageRight: true,
  },
];

export function DateExperiences() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-[100rem] space-y-20 lg:space-y-28">
        {EXPERIENCES.map((experience) => (
          <div
            key={experience.eyebrow}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Image
              src={experience.image}
              alt=""
              width={912}
              height={513}
              className={cn(
                "w-full rounded-3xl object-cover",
                experience.imageRight && "lg:order-last",
              )}
            />

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f5063]">
                {experience.eyebrow}
              </p>
              <h3 className="font-heading mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {experience.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
                {experience.body}
              </p>
              <blockquote className="mt-8 max-w-xl rounded-2xl border-l-4 border-[#1f5063] bg-[#e8edf2] px-6 py-5 text-[15px] leading-relaxed text-slate-700">
                {experience.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
