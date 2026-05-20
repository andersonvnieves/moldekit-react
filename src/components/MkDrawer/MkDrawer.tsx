import { useEffect, useState } from "react";

import type { MkDrawerProps } from "./MkDrawer.props.ts";

function MkDrawer({
  position = "left",
  open = false,
  className = "",
  children,
  onClose,
}: MkDrawerProps) {
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
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  const requestClose = () => {
    onClose?.();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      requestClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      requestClose();
    }
  };

  if (!isMounted) {
    return null;
  }

  const backdropStyles =
    "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300";

  const backdropOpacityAnimation = isVisible ? "opacity-100" : "opacity-0";

  const baseDrawerStyles = [
    "fixed z-50",
    "bg-[var(--surface-level1)]",
    "border-[var(--border-default)]",
    "shadow-2xl",
    "transition-transform duration-300 ease-out",
    "flex flex-col",
  ].join(" ");

  const positionStyles = {
    left: [
      "top-0 left-0 h-full w-[320px]",
      "border-r",
      isVisible ? "translate-x-0" : "-translate-x-full",
    ].join(" "),

    right: [
      "top-0 right-0 h-full w-[320px]",
      "border-l",
      isVisible ? "translate-x-0" : "translate-x-full",
    ].join(" "),
  };

  return (
    <>
      <div
        className={`${backdropStyles} ${backdropOpacityAnimation}`}
        onClick={handleBackdropClick}
      />

      <div
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={`
          ${baseDrawerStyles}
          ${positionStyles[position]}
          ${className}
        `}
      >
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </>
  );
}

export default MkDrawer;
