export interface MkListItemProps {
  title?: string;
  numericValue?: string;
  status?: {
    color: "primary" | "neutral" | "success" | "warning" | "danger" | "info";
    text?: string;
  };
}
