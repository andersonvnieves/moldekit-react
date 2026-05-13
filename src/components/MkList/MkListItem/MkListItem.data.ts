export interface MkListItemData {
  id: string;
  title?: string;
  numericValue?: string;
  status?: {
    color: "primary" | "neutral" | "success" | "warning" | "danger" | "info";
    text?: string;
  };
}
