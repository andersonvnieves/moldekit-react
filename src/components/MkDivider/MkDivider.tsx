import type { MkDividerProps } from "./MkDivider.props.ts";

function MkDivider({
  className = "",
  orientation = "horizontal",
}: MkDividerProps) {
  const isVertical = orientation === "vertical";

  const baseStyles = [
    "bg-[var(--border-default)]",
    "border-0",
    isVertical ? "w-px self-stretch" : "h-px w-full",
  ].join(" ");

  if (isVertical) {
    return (
      <div
        className={`${baseStyles} ${className}`}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  return (
    <hr
      className={`${baseStyles} ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}

export default MkDivider;
