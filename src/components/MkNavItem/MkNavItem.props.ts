import type { IconName } from "lucide-react/dynamic";

export interface MkNavItemProps {
  label: string;
  iconName?: IconName;
  link?: string;
  collapsed?: boolean;
}
