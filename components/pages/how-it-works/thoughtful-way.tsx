import Image from "next/image";

export function ThoughtfulWay() {
  return (
    <section id="how" className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl lg:text-5xl">
        This is a more thoughtful and <br className="hidden sm:block" />
        <span className="text-[#2d6e8d]">meaningful</span> way to connect.
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
        We&rsquo;ve reimagined the journey of human connection from the ground
        up, focusing on <br className="hidden lg:block" />
        quality, depth, and well-being.
      </p>

      {/* Steps, with a vertical divider down the center on desktop */}
      <div className="relative mx-auto mt-20 w-full max-w-6xl lg:mt-28">
        <div
          aria-hidden
          className="absolute inset-y-0 left-1/2 hidden w-px bg-slate-200 lg:block"
        />

        {/* Step 01 — image left, text right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/tell-us.png"
            alt="Onboarding screen: “Your Authentic Profile”, step 1, with the prompt “Describe a moment where you felt most like yourself...”"
            width={1116}
            height={704}
            className="h-auto w-full"
          />
          <div>
            <span className="font-heading flex size-14 items-center justify-center rounded-2xl bg-[#26607a] text-lg font-bold text-white shadow-md">
              01
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-[#16191c] sm:text-3xl">
              Tell Us About You
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Our mindful onboarding isn&rsquo;t just a form; it&rsquo;s a
              reflection. We move beyond basic stats to understand your core
              values, communication style, and what truly makes you feel
              alive.
            </p>
          </div>
        </div>

        {/* Step 02 — text left (right-aligned), image right */}
        <div className="mt-20 grid items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-first lg:flex lg:flex-col lg:items-end lg:text-right">
            <span className="font-heading flex size-14 items-center justify-center rounded-2xl bg-[#26607a] text-lg font-bold text-white shadow-md">
              02
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-[#16191c] sm:text-3xl">
              Receive Intentional Matches
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Forget the paradox of choice. Our algorithm prioritizes
              alignment over appearance, delivering a curated selection of
              people who resonate with your fundamental outlook on life.
            </p>
          </div>
          <Image
            src="/images/matches.png"
            alt="Match card for Sophia R., 94% compatible, matched based on shared vision for community and personal growth"
            width={1116}
            height={567}
            className="h-auto w-full"
          />
        </div>

        {/* Step 03 — image left, text right */}
        <div className="mt-20 grid items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/better.png"
            alt="Chat card with the message “I saw you love hiking in the Lake District! What’s your favorite trail?” and Ice Breakers, Tone Enhancer, and Deepen Conversation tools"
            width={1116}
            height={510}
            className="h-auto w-full"
          />
          <div>
            <span className="font-heading flex size-14 items-center justify-center rounded-2xl bg-[#26607a] text-lg font-bold text-white shadow-md">
              03
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-[#16191c] sm:text-3xl">
              Build Better Conversations
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              No more &ldquo;hey&rdquo; or &ldquo;how&rsquo;s your day.&rdquo;
              Our integrated AI tools provide thoughtful prompts, ice breakers
              based on shared interests, and ways to move the conversation
              toward deeper meaning.
            </p>
          </div>
        </div>

        {/* Step 04 — text left (right-aligned), image right */}
        <div className="mt-20 grid items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-first lg:flex lg:flex-col lg:items-end lg:text-right">
            <span className="font-heading flex size-14 items-center justify-center rounded-2xl bg-[#26607a] text-lg font-bold text-white shadow-md">
              04
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-[#16191c] sm:text-3xl">
              Connect Through Shared Experiences
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              Connection happens when you&rsquo;re doing something together.
              From curated virtual movie nights to AI-suggested physical date
              spots that fit your shared lifestyle, we make the transition
              from screen to reality seamless.
            </p>
          </div>
          <Image
            src="/images/connect.png"
            alt="Artisan Pottery Workshop card, recommended for your first meeting, with a Book Now button"
            width={1116}
            height={813}
            className="h-auto w-full"
          />
        </div>

        {/* Step 05 — image left, text right */}
        <div className="mt-20 grid items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/being.png"
            alt="Well-being dashboard showing an 88% well-being score, 12 connections, and a community event"
            width={1116}
            height={594}
            className="h-auto w-full"
          />
          <div>
            <span className="font-heading flex size-14 items-center justify-center rounded-2xl bg-[#26607a] text-lg font-bold text-white shadow-md">
              05
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-[#16191c] sm:text-3xl">
              Grow Through Well-being &amp; Community
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              We care about your growth, whether or not you&rsquo;ve found
              &lsquo;the one&rsquo; yet. Access well-being dashboards,
              exclusive community events, and workshops designed to help you
              become your most authentic self.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
