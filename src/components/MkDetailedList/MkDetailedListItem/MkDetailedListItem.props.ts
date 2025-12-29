import type { IconName } from "lucide-react/dynamic";

export interface MkDetailedListItemProps {
  title?: string;
  description?: string;
  numericValue?: string;
  icon?: {
    color: "primary" | "neutral" | "success" | "warning" | "danger" | "info";
    iconName: IconName;
  };
}
