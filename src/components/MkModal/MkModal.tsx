import type { MkModalProps } from "./MkModal.props.ts";
import { useRef, useEffect, useState } from "react";

function MkModal({
  open = false,
  onClose,
  children,
  className = "",
}: MkModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isMounted, setIsMounted] = useState(open);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

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
        if (dialog && dialog.open) {
          dialog.close();
        }
        setIsMounted(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  useEffect(() => {
    if (isMounted) {
      const dialog = dialogRef.current;
      if (dialog && !dialog.open) {
        dialog.showModal();
      }
    }
  }, [isMounted]);

  const requestClose = () => {
    onClose?.();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      requestClose();
    }
  };

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    requestClose();
  };

  if (!isMounted) {
    return null;
  }

  const animationClasses = isVisible
    ? "opacity-100 scale-100 backdrop:opacity-100"
    : open
      ? "opacity-0 scale-95 backdrop:opacity-0"
      : "opacity-0 scale-105 backdrop:opacity-0";

  const baseStyles = [
    "rounded-[15px]",
    "bg-transparent",
    "shadow-2xl",
    "overflow-hidden",
    "backdrop:bg-black/40",
    "backdrop:backdrop-blur-sm",
    "m-auto",
    "outline-none",
    "transition-all duration-300 ease-out",
    "backdrop:transition-opacity backdrop:duration-300 backdrop:ease-out",
    animationClasses,
    className,
  ].join(" ");

  const borderContentStyles = [
    "p-[3px]",
    "bg-[var(--color-neutral-300)]",
    "rounded-[15px]",
  ].join(" ");

  const contentStyles = [
    "w-full h-full p-[3px]",
    "bg-[var(--surface-level1)]",
    "border border-[var(--border-default)] rounded-[12px]",
    "overflow-hidden",
  ].join(" ");

  return (
    <dialog
      ref={dialogRef}
      className={baseStyles}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className={borderContentStyles}>
        <div className={contentStyles}>
          <div className="w-full max-h-[80vh] p-2 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default MkModal;
