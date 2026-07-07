import { NextResponse } from "next/server";

// Google Apps Script web-app URL that appends a row to the waitlist sheet
const SHEET_URL = process.env.WAITLIST_SHEET_URL;

// Sources that are newsletter subscriptions rather than waitlist signups
const NEWSLETTER_SOURCES = new Set(["blog-newsletter", "footer-newsletter"]);

export async function POST(request: Request) {
  if (!SHEET_URL) {
    return NextResponse.json(
      { ok: false, error: "not-configured" },
      { status: 500 },
    );
  }

  let fields: Record<string, unknown>;
  try {
    fields = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad-request" },
      { status: 400 },
    );
  }

  const email =
    typeof fields.email === "string" ? fields.email.trim().slice(0, 200) : "";
  if (!email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "invalid-email" },
      { status: 400 },
    );
  }

  const source =
    typeof fields.source === "string" ? fields.source.slice(0, 100) : "";

  const body = new URLSearchParams({
    source,
    // Routes the row to the "Newsletter" or "Waitlist" tab of the sheet
    type: NEWSLETTER_SOURCES.has(source) ? "newsletter" : "waitlist",
    name: typeof fields.name === "string" ? fields.name.trim().slice(0, 200) : "",
    email,
  });

  try {
    const response = await fetch(SHEET_URL, { method: "POST", body });
    if (!response.ok) throw new Error(`Sheet responded ${response.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
