import { useEffect, useState } from "react";
import type { MkAlertTypes } from "./MkAlert.types.ts";
import { MkAlert } from "./index.ts";
import { mkAlertService } from "./MkAlert.service.ts";

function MkAlertContainer() {
  const [alerts, setAlerts] = useState<MkAlertTypes[]>([]);

  useEffect(() => {
    const subscription = mkAlertService.alerts$.subscribe(setAlerts);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-[999] flex flex-col gap-2">
      {alerts.map((alert) => (
        <MkAlert
          key={alert.id}
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
