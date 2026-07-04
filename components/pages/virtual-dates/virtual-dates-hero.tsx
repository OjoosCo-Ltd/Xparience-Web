import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/33.jpg",
  "https://randomuser.me/api/portraits/men/61.jpg",
  "https://randomuser.me/api/portraits/women/57.jpg",
];

export function VirtualDatesHero() {
  return (
    <section className="bg-[#f5f7f9]">
      <div className="mx-auto grid w-full max-w-[100rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        {/* Copy */}
        <div>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.12] tracking-tight text-[#16191c] sm:text-6xl lg:text-7xl">
            Spark a Deeper <br className="hidden lg:block" />
            Connection <br className="hidden lg:block" />
            <span className="text-[#1f4f63]">
              Before <br className="hidden lg:block" />
              You Meet
            </span>{" "}
            <br className="hidden lg:block" />
            face-to-face.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-9">
            Virtual dating isn&rsquo;t just a video call. It&rsquo;s a bridge
            between the digital and the physical&mdash;a curated sanctuary
            where chemistry is tested through shared laughter, gaming, and
            cinematic storytelling.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/waitlist"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#1f4f63] px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#193f4f]"
            >
              Start an Experience
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/#how-it-works"
              className="flex items-center justify-center rounded-2xl bg-[#e8eaee] px-8 py-4 text-lg font-semibold text-slate-800 transition-colors hover:bg-slate-200"
            >
              How it Works
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-base text-slate-600">
              Joined by{" "}
              <span className="font-semibold text-[#1f4f63]">12,000+</span>{" "}
              seekers of real connection
            </p>
          </div>
        </div>

        {/* Visual — overlays and decorative circles are baked into the PNG */}
        <Image
          src="/images/spark.png"
          alt="A couple on a virtual date — watching a film, playing trivia, and picking dinner together"
          width={1182}
          height={1200}
          priority
          className="mx-auto h-auto w-full max-w-175 lg:max-w-none"
        />
      </div>
    </section>
  );
}
