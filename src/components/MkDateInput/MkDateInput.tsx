import type { MkDateInputProps } from "./MkDateInput.props.ts";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

function MkDateInput({
  value,
  placeholder = "00:00",
  size = "md",
  className,
  ...props
}: MkDateInputProps) {
  const [displayValue, setDisplayValue] = useState(value || "");

  useEffect(() => {
    if (value !== undefined) {
      setDisplayValue(value);
    }
  }, [value]);

  const baseStyle = [
    "bg-neutral-50 rounded-[7px] border-2 border-neutral-300",
    "text-neutral-800",
    "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-600",
    "enabled:focus:border-primary-300 enabled:focus:outline-none enabled:focus:ring-0focus:ring-offset-0",
    "enabled:hover:shadow-[0_0_4px_var(--color-primary-400)] enabled:hover:border-primary-300",
    "transition-shadow transition-border duration-300",
  ].join(" ");

  const sizeStyles: Record<string, string> = {
    sm: "pl-9 pr-3 py-1 text-sm font-[14px]",
    md: "pl-10 pr-4 py-2 text-md font-[16px]",
    lg: "pl-12 pr-6 py-3 text-lg font-[18px]",
  };

  const iconSizes: Record<string, number> = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const iconPositions: Record<string, string> = {
    sm: "left-2.5",
    md: "left-3",
    lg: "left-4",
  };

  return (
    <div className="relative">
      <Calendar
        className={`absolute top-1/2 -translate-y-1/2 ${iconPositions[size]} text-neutral-500`}
        size={iconSizes[size]}
        aria-hidden="true"
      />
      <input
        type="date"
        className={`${baseStyle} ${sizeStyles[size]} ${className || ""}`}
        placeholder={placeholder}
        value={value !== undefined ? value : displayValue}
        maxLength={5}
        {...props}
      />
    </div>
  );
}

export default MkDateInput;
