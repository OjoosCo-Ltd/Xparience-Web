"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog } from "radix-ui";
import {
  ClipboardList,
  Clock3,
  ExternalLink,
  Lock,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd_KDgKubPzdvDMBE22uQmeKGUZ05EqqDC8hsq_Og43vghliQ/viewform";
const STORAGE_KEY = "xparience-survey-popup";
const OPEN_DELAY_MS = 0;
// If the visitor is typing in a form when the delay elapses, retry later.
const TYPING_RETRY_MS = 15000;

type StoredState = { status: "opened"; at: number };

function readStoredState(): StoredState | null {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
  } catch {
    return null;
  }
}

function remember() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "opened", at: Date.now() } satisfies StoredState),
    );
  } catch {
    // Storage unavailable (private mode) — the popup will simply show again.
  }
}

/**
 * Market-research survey popup. Shows as soon as the page loads, on every
 * page load, until the visitor starts the survey (or opens it in a new
 * tab) — that marks them as engaged and permanently hides the popup.
 * Closing it any other way only hides it for the current visit.
 */
export function SurveyPopup() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"intro" | "form">("intro");
  const [formLoaded, setFormLoaded] = useState(false);
  const startButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (readStoredState()?.status === "opened") return;

    let timer: number;
    const tryOpen = () => {
      const active = document.activeElement;
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement
      ) {
        timer = window.setTimeout(tryOpen, TYPING_RETRY_MS);
        return;
      }
      setOpen(true);
    };
    timer = window.setTimeout(tryOpen, OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function startSurvey() {
    remember();
    setView("form");
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-60 bg-[#16191c]/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
        <Dialog.Content
          onOpenAutoFocus={(event) => {
            // Land focus on the primary CTA instead of the close button.
            event.preventDefault();
            startButtonRef.current?.focus();
          }}
          onInteractOutside={(event) => {
            // A stray click outside mid-survey would destroy the iframe and
            // every in-progress answer — only the labeled close button (or
            // Escape) may close the form view.
            if (view === "form") event.preventDefault();
          }}
          className={cn(
            "fixed left-1/2 top-1/2 z-70 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-white shadow-xl focus:outline-none",
            "duration-300 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 motion-reduce:animate-none",
            view === "intro"
              ? "max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-2.5rem)] max-w-md overflow-y-auto"
              : "flex h-[min(46rem,88dvh)] w-[calc(100vw-2rem)] max-w-2xl flex-col overflow-hidden",
          )}
        >
          {view === "intro" ? (
            <>
              {/* Decorative gradient band with the floating badge */}
              <div className="bg-hero-gradient relative h-24">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full bg-white/40 blur-2xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-8 right-6 size-28 rounded-full bg-white/30 blur-2xl"
                />
                <Dialog.Close
                  aria-label="Close survey invitation"
                  className="absolute right-4 top-4 rounded-full bg-white/70 p-2 text-slate-700 backdrop-blur transition-colors hover:bg-white"
                >
                  <X className="size-4" />
                </Dialog.Close>
              </div>

              <div className="relative px-6 pb-8 text-center sm:px-9">
                <div className="mx-auto -mt-8 flex size-16 items-center justify-center rounded-full bg-white text-brand shadow-md">
                  <ClipboardList className="size-7" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
                  Market research · 5 min
                </p>

                <Dialog.Title asChild>
                  <h2 className="font-heading mt-3 text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[1.75rem]">
                    Help shape the future of{" "}
                    <span className="text-brand">Xparience</span>
                  </h2>
                </Dialog.Title>

                <Dialog.Description className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We&rsquo;re studying what people really want from dating
                  platforms — the good, the frustrating, and the missing. Your
                  answers directly shape what we build.
                </Dialog.Description>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {[
                    { icon: Clock3, label: "About 5 minutes" },
                    { icon: Lock, label: "100% anonymous" },
                    { icon: Sparkles, label: "Shapes the app" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 rounded-full bg-[#f1f3f5] px-3.5 py-1.5 text-xs font-medium text-[#1f4f63]"
                    >
                      <Icon className="size-3.5" />
                      {label}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  ref={startButtonRef}
                  onClick={startSurvey}
                  className="bg-brand-gradient mt-7 w-full rounded-full px-8 py-3.5 font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                >
                  Start the survey
                </button>
                <Dialog.Close className="mt-3 w-full rounded-full px-8 py-3 text-sm font-semibold text-slate-500 transition-colors hover:bg-[#f2f2f2] hover:text-slate-700">
                  Maybe later
                </Dialog.Close>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3 border-b border-black/5 px-5 py-3.5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f1f3f5] text-brand">
                    <ClipboardList className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <Dialog.Title asChild>
                      <p className="font-heading truncate text-sm font-extrabold tracking-tight text-slate-900">
                        Xparience Market Research Survey
                      </p>
                    </Dialog.Title>
                    <Dialog.Description className="truncate text-xs text-slate-500">
                      About 5 minutes · Anonymous
                    </Dialog.Description>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open survey in new tab"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-[#1f4f63] transition-colors hover:bg-[#f1f3f5]"
                  >
                    <ExternalLink className="size-3.5" />
                    <span className="hidden sm:inline">Open in new tab</span>
                  </a>
                  <Dialog.Close
                    aria-label="Close survey"
                    className="rounded-full p-2 text-slate-500 transition-colors hover:bg-[#f1f3f5] hover:text-slate-800"
                  >
                    <X className="size-4.5" />
                  </Dialog.Close>
                </div>
              </div>

              <div className="relative flex-1 bg-[#f5f7f9]">
                {!formLoaded ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#f5f7f9]">
                    <span className="size-8 animate-spin rounded-full border-2 border-brand/20 border-t-brand motion-reduce:animate-none" />
                    <p className="text-sm font-medium text-slate-500">
                      Loading survey…
                    </p>
                  </div>
                ) : null}
                <iframe
                  src={`${FORM_URL}?embedded=true`}
                  title="Xparience Market Research Survey"
                  onLoad={() => setFormLoaded(true)}
                  className={cn(
                    "h-full w-full border-0 transition-opacity duration-300",
                    formLoaded ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
