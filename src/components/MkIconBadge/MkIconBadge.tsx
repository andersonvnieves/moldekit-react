import type { MkIconBadgeProps } from "./MkIconBadge.props.ts";
import { DynamicIcon } from "lucide-react/dynamic";

function MkIconBadge({ color, iconName }: MkIconBadgeProps) {
  const baseStyle =
    "inline-flex items-center justify-center p-2 bg-var(--surface-level1) border-3 rounded-full w-fit h-fit";

  const wrapperColorStyle: Record<string, string> = {
    primary: "bg-primary-100 border-[var(--color-primary-200)]",
    neutral: "bg-neutral-100 border-[var(--color-neutral-200)]",
    success: "bg-success-100 border-[var(--color-success-200)]",
    warning: "bg-warning-100 border-[var(--color-warning-200)]",
    danger: "bg-danger-100 border-[var(--color-danger-200)]",
    info: "bg-info-100 border-[var(--color-info-200)]",
  };

  const iconColorStyle: Record<string, string> = {
    primary: "var(--color-primary-600)",
    neutral: "var(--color-neutral-600)",
    success: "var(--color-success-600)",
    warning: "var(--color-warning-600)",
    danger: "var(--color-danger-600)",
    info: "var(--color-info-600)",
  };

  return (
    <div className={`${baseStyle} ${wrapperColorStyle[color]}`}>
      <DynamicIcon name={iconName} color={iconColorStyle[color]} size={35} />
    </div>
  );
}

export default MkIconBadge;
