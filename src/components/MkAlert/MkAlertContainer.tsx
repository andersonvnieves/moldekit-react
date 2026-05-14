import { useEffect, useState } from "react";
import {
  MkAlert,
  type MkAlertContainerProps,
  type MkAlertProps,
} from "./index.ts";
import { mkAlertService } from "./MkAlert.service.ts";

function MkAlertContainer({ position = "top-right" }: MkAlertContainerProps) {
  const [alerts, setAlerts] = useState<MkAlertProps[]>([]);

  useEffect(() => {
    const subscription = mkAlertService.alerts$.subscribe(setAlerts);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const baseStyles = "fixed z-[999] flex flex-col gap-2";

  const positionStyles: Record<string, string> = {
    "top-right": "top-4 right-4 items-end",
    "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  };

  return (
    <div className={`${baseStyles} ${positionStyles[position]}`}>
      {alerts.map((alert) => (
        <MkAlert
          id={alert.id}
          label={alert.label}
          state={alert.state}
          leaving={alert.leaving}
          onClose={() => mkAlertService.remove(alert.id)}
        />
      ))}
    </div>
  );
}

export default MkAlertContainer;
