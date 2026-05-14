import { useEffect, useState } from "react";
import { type MkToastContainerProps, type MkToastProps } from "./index.ts";
import { mkToastService } from "./MkToast.service.ts";
import MkToast from "./MkToast.tsx";

function MkToastContainer({
  position = "bottom-center",
}: MkToastContainerProps) {
  const [toasts, setToasts] = useState<MkToastProps[]>([]);

  useEffect(() => {
    const subscription = mkToastService.toasts$.subscribe(setToasts);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const baseStyles = [
    "fixed inset-x-0 z-[999]",
    "flex flex-col gap-2 px-4",
    "pointer-events-none",
  ].join(" ");

  const positionStyles: Record<string, string> = {
    "top-center": "top-4 w-full items-center",
    "bottom-center": "bottom-4 w-full items-center",
  };

  return (
    <div className={`${baseStyles} ${positionStyles[position]}`}>
      {toasts.map((alert) => (
        <MkToast
          id={alert.id}
          label={alert.label}
          state={alert.state}
          leaving={alert.leaving}
        />
      ))}
    </div>
  );
}

export default MkToastContainer;
