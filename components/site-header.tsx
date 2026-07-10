"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  // Features, Blog, and Pricing are hidden until those pages go live:
  // { label: "Features", href: "/features" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
  // { label: "Blog", href: "/blog" },
  // { label: "Pricing", href: "/pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          aria-label="Xparience home"
        >
          <Image
            src="/images/x-logo.png"
            alt="Xparience"
            width={180}
            height={39}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[15px] font-medium transition-colors",
                pathname === link.href
                  ? "rounded-full bg-slate-200/70 px-4 py-2 text-slate-900"
                  : "text-slate-700 hover:text-brand",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/waitlist"
            className="bg-brand-gradient rounded-full px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-black/5 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-2 py-2.5 text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-700 hover:bg-slate-50 hover:text-brand",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            onClick={() => setOpen(false)}
            className="bg-brand-gradient mt-2 rounded-full px-6 py-3 text-center text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Join the Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
