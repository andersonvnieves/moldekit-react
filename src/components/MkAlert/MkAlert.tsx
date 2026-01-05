import type { MkAlertProps } from "./MkAlert.props.ts";
import { InfoIcon } from "lucide-react";
import { MkButton } from "../MkButton";

function MkAlert({
  label,
  state = "info",
  position = "top-right",
  className,
}: MkAlertProps) {
  const positionStyles: Record<string, string> = {
    "top-right": "top-4 right-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  const baseStyles = [
    "absolute z-[60]",
    positionStyles[position],
    "p-[20px] w-[380px]",
    "bg-neutral-50 border-1 border-neutral-200 rounded-[12px]",
    "flex flex-row items-center justify-between",
  ].join(" ");

  const labelStyles =
    "mk-caption inline-block align-middle pl-3.5 leading-none";
  const stateStyle: Record<string, string> = {
    info: "text-info-900",
  };
  return (
    <div className={`${baseStyles} ${className}`}>
      <div className="inline-block align-middle">
        <InfoIcon
          className="inline-block align-middle"
          color={"var(--color-info-700)"}
        />
        <span className={`${labelStyles} ${stateStyle[state]}`}>{label}</span>
      </div>
      <MkButton
        color={"neutral"}
        iconOnly={true}
        iconName={"x"}
        variant={"transparent"}
      />
    </div>
  );
}

export default MkAlert;
