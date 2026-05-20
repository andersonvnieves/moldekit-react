import type { MkDropdownProps } from "./MkDropdown.props.ts";
import { useEffect, useState } from "react";

function MkDropdown({
  open = false,
  onClose,
  children,
  className = "",
}: MkDropdownProps) {
  const [isMounted, setIsMounted] = useState(open);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsMounted(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);

      const timeout = setTimeout(() => {
        setIsMounted(false);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!isMounted) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const contentStyles = [
    //"relative top-14 left-2 right-2 origin-top",
    "relative inline-block",
    "rounded-[12px]",
    "border border-[var(--border-default)] bg-[var(--surface-level1)]",
    "shadow-2xl",
    "transition-all duration-200",
  ].join(" ");

  return (
    <div className={"fixed inset-0 z-40"} onClick={handleBackdropClick}>
      <div
        className={`${contentStyles}
          ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-2 opacity-0 scale-95"
          }
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default MkDropdown;
