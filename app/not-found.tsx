import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center bg-[#f5f7f9] px-5 py-28 text-center sm:px-8 sm:py-36">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
          404
        </p>
        <h1 className="font-heading mt-4 text-4xl font-extrabold tracking-tight text-[#16191c] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#006786] px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-[#00546d]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#16191c]/20 px-10 py-4 text-base font-semibold text-[#16191c] transition-colors hover:bg-[#16191c]/5"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
