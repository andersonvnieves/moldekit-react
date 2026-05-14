export interface MkAlertTypes {
  id: string;
  label: string;
  state: "success" | "warning" | "danger" | "info";
  leaving?: boolean;
}
