import type { MkDeltaIndicatorProps } from "./MkDeltaIndicator.props.ts";
import { ArrowDown, ArrowUp } from "lucide-react";

function MkDeltaIndicator({
  value,
  arrow = "none",
  sentiment = "neutral",
}: MkDeltaIndicatorProps) {
  const baseStyles = [
    "inline-flex items-center gap-1 px-2 py-1",
    "rounded-[15px]",
    sentiment === "positive" && "bg-success-200 text-[var(--text-success)]",
    sentiment === "negative" && "bg-danger-200 text-[var(--text-danger)]",
    sentiment === "neutral" && "bg-neutral-200 text-[var(--text-neutral)]",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={baseStyles}>
      {arrow === "up" && <ArrowUp size={14} />}
      {arrow === "down" && <ArrowDown size={14} />}

      <label className="text-sm font-medium">{value}</label>
    </section>
  );
}

export default MkDeltaIndicator;
