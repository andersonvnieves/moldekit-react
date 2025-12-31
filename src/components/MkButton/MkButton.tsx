import type { MkButtonProps } from "./MkButton.props.ts";
import { DynamicIcon } from "lucide-react/dynamic";

function MkButton({
  variant = "filled",
  color = "neutral",
  size = "md",
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
      primary: [
        "bg-[var(--button-filled-primary-bg)]",
        "text-[var(--button-filled-primary-text)]",
        "hover:bg-[var(--button-filled-primary-hover-bg)]",
        "hover:text-[var(--button-filled-primary-hover-text)]",
        "disabled:bg-[var(--button-filled-primary-disabled-bg)]",
        "disabled:text-[var(--button-filled-primary-disabled-text)]",
      ].join(" "),
      neutral: [
        "bg-[var(--button-filled-neutral-bg)]",
        "text-[var(--button-filled-neutral-text)]",
        "hover:bg-[var(--button-filled-neutral-hover-bg)]",
        "hover:text-[var(--button-filled-neutral-hover-text)]",
        "disabled:bg-[var(--button-filled-neutral-disabled-bg)]",
        "disabled:text-[var(--button-filled-neutral-disabled-text)]",
      ].join(" "),
      success: [
        "bg-[var(--button-filled-success-bg)]",
        "text-[var(--button-filled-success-text)]",
        "hover:bg-[var(--button-filled-success-hover-bg)]",
        "hover:text-[var(--button-filled-success-hover-text)]",
        "disabled:bg-[var(--button-filled-success-disabled-bg)]",
        "disabled:text-[var(--button-filled-success-disabled-text)]",
      ].join(" "),
      info: [
        "bg-[var(--button-filled-info-bg)]",
        "text-[var(--button-filled-info-text)]",
        "hover:bg-[var(--button-filled-info-hover-bg)]",
        "hover:text-[var(--button-filled-info-hover-text)]",
        "disabled:bg-[var(--button-filled-info-disabled-bg)]",
        "disabled:text-[var(--button-filled-info-disabled-text)]",
      ].join(" "),
      danger: [
        "bg-[var(--button-filled-danger-bg)]",
        "text-[var(--button-filled-danger-text)]",
        "hover:bg-[var(--button-filled-danger-hover-bg)]",
        "hover:text-[var(--button-filled-danger-hover-text)]",
        "disabled:bg-[var(--button-filled-danger-disabled-bg)]",
        "disabled:text-[var(--button-filled-danger-disabled-text)]",
      ].join(" "),
      warning: [
        "bg-[var(--button-filled-warning-bg)]",
        "text-[var(--button-filled-warning-text)]",
        "hover:bg-[var(--button-filled-warning-hover-bg)]",
        "hover:text-[var(--button-filled-warning-hover-text)]",
        "disabled:bg-[var(--button-filled-warning-disabled-bg)]",
        "disabled:text-[var(--button-filled-warning-disabled-text)]",
      ].join(" "),
    },
    outlined: {
      primary: [
        "border border-[var(--button-outlined-primary-border)]",
        "text-[var(--button-outlined-primary-text)]",
        "bg-white",
        "hover:bg-[var(--button-outlined-primary-hover-bg)]",
      ].join(" "),
      neutral: [
        "border border-[var(--button-outlined-neutral-border)]",
        "text-[var(--button-outlined-neutral-text)]",
        "bg-white",
        "hover:bg-[var(--button-outlined-neutral-hover-bg)]",
      ].join(" "),
      success: [
        "border border-[var(--button-outlined-success-border)]",
        "text-[var(--button-outlined-success-text)]",
        "bg-white",
        "hover:bg-[var(--button-outlined-success-hover-bg)]",
      ].join(" "),
      info: [
        "border border-[var(--button-outlined-info-border)]",
        "text-[var(--button-outlined-info-text)]",
        "bg-white",
        "hover:bg-[var(--button-outlined-info-hover-bg)]",
      ].join(" "),
      danger: [
        "border border-[var(--button-outlined-danger-border)]",
        "text-[var(--button-outlined-danger-text)]",
        "bg-white",
        "hover:bg-[var(--button-outlined-danger-hover-bg)]",
      ].join(" "),
      warning: [
        "border border-[var(--button-outlined-warning-border)]",
        "text-[var(--button-outlined-warning-text)]",
        "bg-white",
        "hover:bg-[var(--button-outlined-warning-hover-bg)]",
      ].join(" "),
    },
    transparent: {
      primary: [
        "text-[var(--button-transparent-primary-text)]",
        "hover:bg-[var(--button-transparent-primary-hover-bg)]",
      ].join(" "),
      neutral: [
        "text-[var(--button-transparent-neutral-text)]",
        "hover:bg-[var(--button-transparent-neutral-hover-bg)]",
      ].join(" "),
      success: [
        "text-[var(--button-transparent-success-text)]",
        "hover:bg-[var(--button-transparent-success-hover-bg)]",
      ].join(" "),
      info: [
        "text-[var(--button-transparent-info-text)]",
        "hover:bg-[var(--button-transparent-info-hover-bg)]",
      ].join(" "),
      danger: [
        "text-[var(--button-transparent-danger-text)]",
        "hover:bg-[var(--button-transparent-danger-hover-bg)]",
      ].join(" "),
      warning: [
        "text-[var(--button-transparent-warning-text)]",
        "hover:bg-[var(--button-transparent-warning-hover-bg)]",
      ].join(" "),
    },
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  const iconOnlySizeStyles: Record<string, string> = {
    small: "p-1 w-7 h-7",
    medium: "p-2 w-10 h-10",
    large: "p-2 w-13 h-13",
  };

  const iconSize: Record<string, string> = {
    sm: "14",
    md: "16",
    lg: "18",
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
