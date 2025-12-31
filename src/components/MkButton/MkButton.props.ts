import type { IconName } from "lucide-react/dynamic";

export interface MkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "transparent";
  color?: "primary" | "neutral" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconOnly?: boolean;
  iconName?: IconName;
}
