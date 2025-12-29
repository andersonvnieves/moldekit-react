import type { IconName } from "lucide-react/dynamic";

export interface MkIconBadgeProps {
  color: "primary" | "neutral" | "success" | "warning" | "danger" | "info";
  iconName: IconName;
}
