import { BehaviorSubject, timer } from "rxjs";
import type { MkToastProps } from "./MkToast.props.ts";

class MkToastService {
  private toastsSubject = new BehaviorSubject<MkToastProps[]>([]);

  toasts$ = this.toastsSubject.asObservable();

  private get toasts() {
    return this.toastsSubject.getValue();
  }

  private set toasts(toasts: MkToastProps[]) {
    this.toastsSubject.next(toasts);
  }

  show(
    label: string,
    state: "success" | "warning" | "danger" | "info" = "info"
  ) {
    const id = crypto.randomUUID();

    const toast: MkToastProps = {
      id,
      label,
      state,
    };

    this.toasts = [...this.toasts, toast];

    timer(4000).subscribe(() => {
      this.remove(id);
    });
  }

  remove(id: string) {
    this.toasts = this.toasts.map((toast) =>
      toast.id === id
        ? {
            ...toast,
            leaving: true,
          }
        : toast
    );

    setTimeout(() => {
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
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

export const mkToastService = new MkToastService();
