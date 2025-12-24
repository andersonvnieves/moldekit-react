import type { MkMainProps } from "./MkCard.props.ts";

function MkCard({ className = "", children }: MkMainProps) {
  const baseStyles = [
    "w-full h-full p-[3px]",
    "bg-[var(--color-neutral-200)] ",
    "rounded-[15px]",
  ].join(" ");

  const contentStyles = [
    "w-full h-full p-4",
    "bg-[var(--surface-level3)] ",
    "border border-[var(--border-default)] rounded-[12px]",
  ].join(" ");

  return (
    <section className={`${baseStyles} ${className}`}>
      <div className={contentStyles}>{children}</div>
    </section>
  );
}

export default MkCard;
