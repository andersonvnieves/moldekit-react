import type { MkStatusIndicatorProps } from "./MkStatusIndicator.props.ts";

function MkStatusIndicator({ color, text }: MkStatusIndicatorProps) {
  const baseStyle = text ? "p-2 flex items-center gap-1" : "p-2";

  const circle =
    "w-[15px] h-[15px] border-2 rounded-full p-[1px] flex items-center justify-center box-border";

  const innerCircle = "w-[9px] h-[9px] rounded-full";

  const textStyle = "font-bold leading-none text-[14px]";

  const circleColorStyles: Record<string, string> = {
    primary: "border-primary-400 shadow-[0_0_4px_var(--color-primary-400)]",
    neutral: "border-neutral-400 shadow-[0_0_4px_var(--color-neutral-400)]",
    success: "border-success-400 shadow-[0_0_4px_var(--color-success-400)]",
    warning: "border-warning-400 shadow-[0_0_4px_var(--color-warning-400)]",
    danger: "border-danger-400 shadow-[0_0_4px_var(--color-danger-400)]",
    info: "border-info-400 shadow-[0_0_4px_var(--color-info-400)]",
  };

  const innerCircleColorStyles: Record<string, string> = {
    primary: "bg-primary-400",
    neutral: "bg-neutral-400",
    success: "bg-success-400",
    warning: "bg-warning-400",
    danger: "bg-danger-400",
    info: "bg-info-400",
  };

  const textColorStyles: Record<string, string> = {
    primary: "text-primary-900",
    neutral: "text-neutral-900",
    success: "text-success-900",
    warning: "text-warning-900",
    danger: "text-danger-900",
    info: "text-info-900",
  };

  return (
    <div className={baseStyle}>
      <div className={`${circle} ${circleColorStyles[color]}`}>
        <div
          className={`${innerCircle} ${innerCircleColorStyles[color]}`}
        ></div>
      </div>
      {text ? (
        <span className={`${textStyle} ${textColorStyles[color]}`}>{text}</span>
      ) : null}
    </div>
  );
}

export default MkStatusIndicator;
