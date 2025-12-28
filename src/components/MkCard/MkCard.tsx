import type { MkCardProps } from "./MkCard.props.ts";

function MkCard({ className = "", noPadding = false, children }: MkCardProps) {
  const baseStyles = [
    "w-full h-full p-[3px]",
    "bg-[var(--color-neutral-200)] ",
    "rounded-[15px]",
  ].join(" ");

  const contentStyles = [
    "w-full h-full",
    "bg-[var(--surface-level3)] ",
    "border border-[var(--border-default)] rounded-[12px]",
    "overflow-hidden",
  ].join(" ");

  const paddingStyle = noPadding ? "" : "p-4";

  return (
    <section className={`${baseStyles} ${className}`}>
      <div className={`${contentStyles} ${paddingStyle}`}>{children}</div>
    </section>
  );
}

export default MkCard;
