import type { MkAlertTypes } from "./MkAlert.types.ts";
import { BehaviorSubject, timer } from "rxjs";

class MkAlertService {
  private alertsSubject = new BehaviorSubject<MkAlertTypes[]>([]);

  alerts$ = this.alertsSubject.asObservable();

  private get alerts() {
    return this.alertsSubject.getValue();
  }

  private set alerts(alerts: MkAlertTypes[]) {
    this.alertsSubject.next(alerts);
  }

  show(
    label: string,
    state: "success" | "warning" | "danger" | "info" = "info"
  ) {
    const id = crypto.randomUUID();

    const alert: MkAlertTypes = {
      id,
      label,
      state,
    };

    this.alerts = [...this.alerts, alert];

    timer(4000).subscribe(() => {
      this.remove(id);
    });
  }

  remove(id: string) {
    this.alerts = this.alerts.map((alert) =>
      alert.id === id
        ? {
            ...alert,
            leaving: true,
          }
        : alert
    );

    setTimeout(() => {
      this.alerts = this.alerts.filter((alert) => alert.id !== id);
    }, 200);
  }

  success(label: string) {
    this.show(label, "success");
  }

  warning(label: string) {
    this.show(label, "warning");
  }

  danger(label: string) {
    this.show(label, "danger");
  }

  info(label: string) {
    this.show(label, "info");
  }
}

export const mkAlertService = new MkAlertService();
