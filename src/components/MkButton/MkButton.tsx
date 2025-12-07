import type { MkButtonProps } from "./MkButton.props.ts";
import { DynamicIcon } from "lucide-react/dynamic";

function MkButton({
  variant = "filled",
  color = "neutral",
  size = "medium",
  fullWidth = false,
  iconOnly = false,
  iconName,
  className = "",
  disabled,
  children,
  ...props
}: MkButtonProps) {
  const baseStyles =
    "flex items-center justify-center transition-colors duration-300" +
    "text-center rounded-[7px] uppercase" +
    "disabled:pointer-events-none disabled:cursor-not-allowed focus:outline-none";

  const colorStyles: Record<string, Record<string, string>> = {
    filled: {
      primary:
        "bg-primary-300 text-primary-900 " +
        "hover:bg-primary-400 hover:text-primary-900 " +
        "disabled:bg-primary-100 disabled:text-primary-200",
      neutral:
        "bg-neutral-100 text-neutral-900 " +
        "hover:bg-neutral-200 hover:text-neutral-900 " +
        "disabled:bg-neutral-200 disabled:text-neutral-400",
      success:
        "bg-success-200 text-success-900 " +
        "hover:bg-success-300 hover:text-success-900 " +
        "disabled:bg-success-200 disabled:text-success-400",
      info:
        "bg-info-200 text-info-900 " +
        "hover:bg-info-300 hover:text-info-900 " +
        "disabled:bg-info-200 disabled:text-info-400",
      danger:
        "bg-danger-200 text-danger-900 " +
        "hover:bg-danger-300 hover:text-danger-900 " +
        "disabled:bg-danger-200 disabled:text-danger-400",
      warning:
        "bg-warning-200 text-warning-900 " +
        "hover:bg-warning-300 hover:text-warning-900 " +
        "disabled:bg-danger-200 disabled:text-danger-400",
    },
    outlined: {
      primary:
        "border border-primary-700 text-primary-800 bg-white hover:bg-primary-100",
      neutral:
        "border border-neutral-700 text-neutral-800 bg-white hover:bg-neutral-100",
      success:
        "border border-success-700 text-success-800 bg-white hover:bg-success-100",
      info: "border border-info-700 text-info-800 bg-white hover:bg-info-100",
      danger:
        "border border-danger-700 text-danger-800 bg-white hover:bg-danger-100",
      warning:
        "border border-warning-700 text-warning-800 bg-white hover:bg-warning-100",
    },
    transparent: {
      primary: "text-primary-800 hover:bg-primary-100",
      neutral: "text-neutral-800 hover:bg-neutral-100",
      success: "text-success-800 hover:bg-success-100",
      info: "text-info-800 hover:bg-info-100",
      danger: "text-danger-800 hover:bg-danger-100",
      warning: "text-warning-800 hover:bg-warning-100",
    },
  };

  const sizeStyles: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
  };

  const iconOnlySizeStyles: Record<string, string> = {
    small: "p-1 w-7 h-7",
    medium: "p-2 w-10 h-10",
    large: "p-2 w-13 h-13",
  };

  const iconSize: Record<string, string> = {
    small: "14",
    medium: "16",
    large: "18",
  };

  const styleClass: string = colorStyles[variant][color];
  const sizeStyleClass = iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size];
  const fullWidthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseStyles} 
                ${styleClass}
                ${sizeStyleClass} 
                ${fullWidthClass} 
                ${className}`}
      {...props}
    >
      <DynamicIcon
        name={iconName}
        size={iconSize[size]}
        className={!iconOnly ? "mr-2" : ""}
      />
      {iconOnly ? null : children}
    </button>
  );
}

export default MkButton;
