import type { MkDropdownProps } from "./MkDropdown.props.ts";
import { useState } from "react";

function MkDropdown({
  trigger,
  children,
  align = "left-top",
  className = "",
}: MkDropdownProps) {
  const [open, setOpen] = useState(false);
  const contentStyles = [
    "absolute mt-2 w-max min-w-40",
    "border border-[var(--border-default)] bg-[var(--surface-level1)]",
    "shadow-2xl",
    "transition-all duration-200",
    "p-2 z-50",
  ].join(" ");

  const alignStyle = {
    "left-top": "left-0 top-full",
    "right-top": "right-0 top-full",
    "left-bottom": "left-0 bottom-full",
    "right-bottom": "right-0 bottom-full",
  };

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>
      {open && (
        <div
          className={`${contentStyles} ${alignStyle[align]}
          ${
            open
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-2 opacity-0 scale-95"
          }
          ${className}
        `}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default MkDropdown;
