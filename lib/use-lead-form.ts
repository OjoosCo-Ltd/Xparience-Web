"use client";

import { useState } from "react";

export type LeadStatus = "idle" | "submitting" | "success" | "error";

/**
 * Shared submit handler for the waitlist / newsletter email-capture forms.
 * Collects the form's named inputs and posts them (plus a `source` tag
 * identifying which form it was) to /api/lead, which appends a row to the
 * waitlist Google Sheet.
 */
export function useLeadForm(source: string) {
  const [status, setStatus] = useState<LeadStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const fields: Record<string, string> = { source };
    for (const [key, value] of new FormData(form).entries()) {
      if (typeof value === "string") fields[key] = value;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await response.json();
      setStatus(data.ok ? "success" : "error");
      if (data.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
