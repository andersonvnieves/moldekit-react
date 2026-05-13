import type { MkModalProps } from "./MkModal.props.ts";
import { useRef, useEffect } from "react";

function MkModal({
  open = false,
  onClose,
  children,
  className = "",
}: MkModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const requestClose = () => {
    onClose?.();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      requestClose();
    }
  };

  const handleClose = () => {
    requestClose();
  };

  const baseStyles = [
    "rounded-[15px]",
    "bg-transparent",
    "shadow-2xl",
    "overflow-hidden",
    "backdrop:backdrop-blur-sm",
    "m-auto",
    "outline-none",
    className,
  ].join(" ");

  const borderContentStyles = [
    "p-[3px]",
    "bg-[var(--color-neutral-300)] ",
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
      onCancel={handleClose}
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
