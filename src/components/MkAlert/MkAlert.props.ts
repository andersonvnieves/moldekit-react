export interface MkAlertProps {
  label: string;
  state?: "success" | "warning" | "danger" | "info";
  position?: "top-right" | "top-center" | "bottom-center";
  leaving?: boolean;
  onClose?: () => void;
  className?: string;
}
