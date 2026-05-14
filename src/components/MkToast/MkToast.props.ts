export interface MkToastProps {
  id: string;
  label: string;
  state?: "success" | "warning" | "danger" | "info";
  position?: "top-center" | "bottom-center";
  className?: string;
  leaving: boolean;
}
