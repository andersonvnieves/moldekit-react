export interface MkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "transparent";
  color?: "primary" | "neutral" | "success" | "warning" | "danger" | "info";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  iconOnly?: boolean;
  iconName?: string;
}
