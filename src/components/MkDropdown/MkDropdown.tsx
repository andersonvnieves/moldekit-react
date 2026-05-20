import type { MkDropdownProps } from "./MkDropdown.props.ts";
import { useEffect, useRef, useState } from "react";

function MkDropdown({
  trigger,
  children,
  align = "left-top",
  className = "",
}: MkDropdownProps) {
  const [open, setOpen] = useState(false);
  const [mobileTop, setMobileTop] = useState(0);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setMobileTop(rect.bottom);
  }, [open]);

  const contentStyles = [
    "absolute w-max min-w-40",
    "max-md:fixed",
    "max-md:left-0",
    "max-md:right-0",
    "max-md:w-full",
    "border border-[var(--border-default)] bg-[var(--surface-level1)]",
    "shadow-2xl",
    "transition-all duration-200",
    "p-2 z-50",
    "rounded-[12px]",
  ].join(" ");

  const alignStyle = {
    "left-top": "left-0 top-full",
    "right-top": "right-0 top-full",
    "left-bottom": "left-0 bottom-full",
    "right-bottom": "right-0 bottom-full",
  };

  return (
    <div className="relative inline-block">
      <div ref={triggerRef} onClick={() => setOpen((prev) => !prev)}>
        {trigger}
      </div>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            onClick={() => setOpen(false)}
            style={{
              top: isMobile ? `${mobileTop}px` : undefined,
            }}
            className={`
              ${contentStyles}
              ${alignStyle[align]}
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
        </>
      )}
    </div>
  );
}

export default MkDropdown;
