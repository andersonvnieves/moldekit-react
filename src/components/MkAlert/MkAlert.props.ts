export interface MkAlertProps {
  label: string;
  state?: "success" | "warning" | "danger" | "info";
  position?: "top-right" | "top-center" | "bottom-center";
  className?: string;
}
