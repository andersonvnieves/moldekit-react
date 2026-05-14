export interface MkAlertProps {
  id: string;
  label: string;
  state?: "success" | "warning" | "danger" | "info";
  position?: "top-right" | "top-center" | "bottom-center";
  className?: string;
  leaving: boolean;
  onClose: () => void;
}
