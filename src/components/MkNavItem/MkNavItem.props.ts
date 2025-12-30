import type { IconName } from "lucide-react/dynamic";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export interface MkNavItemProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
  iconName?: IconName;
  link: string;
  as?: ElementType;
  isActive?: boolean;
  collapsed?: boolean;
}
