import type { MkTopBarProps } from "./MkTopBar.props.ts";

function MkTopBar({
  left,
  right,
  hasBorder = false,
  children,
  className = "",
}: MkTopBarProps) {
  const baseStyles = [
    "w-full h-14 px-4",
    "flex items-center",
    "bg-[var(--surface-level1)]",
  ].join(" ");

  return (
    <header
      className={`
        ${baseStyles}   
        ${hasBorder && "border-b border-[var(--border-default)]"}     
        ${className}
      `}
    >
      <div className="flex min-w-0 flex-1 items-center justify-start">
        {left}
      </div>

      <div className="flex shrink-0 items-center justify-center px-4">
        {children}
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end">
        {right}
      </div>
    </header>
  );
}

export default MkTopBar;
