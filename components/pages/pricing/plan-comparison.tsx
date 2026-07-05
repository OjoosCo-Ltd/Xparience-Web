import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Cell =
  | { type: "text"; value: string; bold?: boolean }
  | { type: "check" }
  | { type: "dash" };

const text = (value: string, bold = false): Cell => ({ type: "text", value, bold });
const check: Cell = { type: "check" };
const dash: Cell = { type: "dash" };

const ROWS: { feature: string; cells: Cell[] }[] = [
  {
    feature: "Weekly Matches",
    cells: [
      text("5 Matches"),
      text("6-9 Matches"),
      text("10+ Matches", true),
      text("10+ Matches", true),
    ],
  },
  { feature: "Unlimited Chat", cells: [check, check, check, check] },
  {
    feature: "Ice Breakers",
    cells: [text("3 Daily"), text("3 Daily"), text("3 Daily"), text("3 Daily", true)],
  },
  {
    feature: "Virtual Dates",
    cells: [dash, text("2 per person"), text("2 per person"), text("2 per person", true)],
  },
  {
    feature: "Tone Enhancer",
    cells: [dash, check, text("Unlimited"), text("Unlimited", true)],
  },
  {
    feature: "Conversation Deepener",
    cells: [dash, text("5 per week"), text("10 per week"), text("10 per week")],
  },
  {
    feature: "Ads",
    cells: [text("Yes"), text("Yes"), text("No"), text("No", true)],
  },
  { feature: "Human Matchmaker", cells: [dash, dash, dash, check] },
  {
    feature: "1-On-1 Coaching",
    cells: [dash, dash, dash, text("1 per month", true)],
  },
  {
    feature: "Quarterly",
    cells: [dash, text("£35"), text("£80"), text("£110", true)],
  },
  {
    feature: "Yearly",
    cells: [dash, text("£130"), text("£310"), text("£420", true)],
  },
];

function CellContent({ cell }: { cell: Cell }) {
  if (cell.type === "check") {
    return <Check className="mx-auto size-5 text-[#1f4f63]" strokeWidth={2.5} />;
  }
  if (cell.type === "dash") {
    return <span className="text-slate-300">—</span>;
  }
  return (
    <span className={cn("text-slate-700", cell.bold && "font-bold text-slate-900")}>
      {cell.value}
    </span>
  );
}

export function PlanComparison() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Compare Our Plans
      </h2>

      <div className="mt-14 overflow-x-auto">
        <div className="mx-auto w-full min-w-190 max-w-[96rem]">
          {/* Header */}
          <div className="grid grid-cols-[1.6fr_repeat(4,1fr)] px-8 pb-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">
            <span>Features</span>
            <span className="text-center">Free</span>
            <span className="text-center">Basic</span>
            <span className="text-center">Premium</span>
            <span className="text-center">Elite</span>
          </div>

          {/* Rows, alternating background */}
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                "grid grid-cols-[1.6fr_repeat(4,1fr)] items-center rounded-2xl px-8 py-6",
                i % 2 === 0 && "bg-[#eef0f4]",
              )}
            >
              <span className="font-semibold text-slate-900">{row.feature}</span>
              {row.cells.map((cell, j) => (
                <span key={j} className="text-center">
                  <CellContent cell={cell} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
