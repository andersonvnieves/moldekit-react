import type { MkBottomSheetProps } from "./MkBottomSheet.props.ts";
import { useEffect, useState, useRef } from "react";

function MkBottomSheet({
  open = false,
  onClose,
  children,
  height = "md",
  className = "",
}: MkBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(open);
  const [isMounted, setIsMounted] = useState(open);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (open) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsMounted(true);

      if (isInitialMount.current) {
        setIsOpen(true);
        isInitialMount.current = false;
      } else {
        requestAnimationFrame(() => {
          setIsOpen(true);
        });
      }
    } else {
      isInitialMount.current = false;
      setIsOpen(false);
      timeoutRef.current = setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  const heightClasses = {
    sm: "max-h-[30vh]",
    md: "max-h-[60vh]",
    lg: "max-h-[85vh]",
    full: "h-screen max-h-screen",
  };

  const backdropStyles =
    "fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-200";
  const backdropOpcatityAnimation = isOpen ? "opacity-100" : "opacity-0";

  const sheetStyles = [
    "fixed bottom-0 left-0 right-0 z-50",
    "w-full bg-[var(--surface-level1)]",
    "border-t border-[var(--border-default)] rounded-t-[20px] shadow-2xl",
    "transition-transform duration-300 ease-out",
  ].join(" ");
  const sheetTranslateAnimation = isOpen ? "translate-y-0" : "translate-y-full";

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose?.();
      setIsOpen(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className={`${backdropStyles} ${backdropOpcatityAnimation}`}
        onClick={handleBackdropClick}
      />

      <div
        className={`${sheetStyles}          
          ${heightClasses[height]}
          ${sheetTranslateAnimation}
          ${className}
        `}
        role="dialog"
        aria-modal="true"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <div className="p-4 pt-6 flex items-center justify-center">
          <div className="w-8 h-1.5 bg-neutral-300 rounded-full" />
        </div>

        <div className="p-6 pb-12 max-h-full overflow-y-auto">{children}</div>
      </div>
    </>
  );
}

export default MkBottomSheet;
