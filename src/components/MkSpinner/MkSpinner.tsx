import type { MkSpinnerProps } from "./MkSpinner.props";

function MkSpinner({
  size = "md",
  color = "default",
  className = "",
}: MkSpinnerProps) {
  const sizes = {
    xs: "size-4",
    sm: "size-5",
    md: "size-6",
    lg: "size-8",
    xl: "size-10",
  };

  const colorStyles = {
    default: {
      track: "var(--color-neutral-600)",
      arc: "var(--color-neutral-200)",
    },
    primary: {
      track: "var(--color-primary-600)",
      arc: "var(--color-primary-200)",
    },
    success: {
      track: "var(--color-success-600)",
      arc: "var(--color-success-200)",
    },
    warning: {
      track: "var(--color-warning-600)",
      arc: "var(--color-warning-200)",
    },
    danger: {
      track: "var(--color-danger-600)",
      arc: "var(--color-danger-200)",
    },
    info: {
      track: "var(--color-info-600)",
      arc: "var(--color-info-200)",
    },
  };

  return (
    <svg
      viewBox="0 0 48 48"
      role="status"
      aria-label="Loading"
      className={`
        ${sizes[size]}
        mk-spinner-rotate
        ${className}
      `}
    >
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke={colorStyles[color].track}
        strokeWidth="6"
        className="text-muted/20"
      />

      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke={colorStyles[color].arc}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="84 120"
        className="text-primary"
      />
    </svg>
  );
}

export default MkSpinner;
