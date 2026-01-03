import type { MkComboBoxProps } from "./MkComboBox.props.ts";
import { ChevronDown } from "lucide-react";

function MkComboBox({
  value,
  size = "md",
  list = [],
  className,
  ...props
}: MkComboBoxProps) {
  const baseStyle = [
    "bg-neutral-50 rounded-[7px] border-2 border-neutral-300",
    "appearance-none text-neutral-800",
    "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-600",
    "enabled:focus:border-primary-300 enabled:focus:outline-none enabled:focus:ring-0focus:ring-offset-0",
    "enabled:hover:shadow-[0_0_4px_var(--color-primary-400)] enabled:hover:border-primary-300",
    "transition-shadow transition-border duration-300",
  ].join(" ");

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 pr-8 text-sm font-[14px]",
    md: "px-4 py-2 pr-10 text-md font-[16px]",
    lg: "px-6 py-3 pr-12 text-lg font-[18px]",
  };

  const iconSizes: Record<string, number> = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const iconPositions: Record<string, string> = {
    sm: "right-2.5",
    md: "right-3",
    lg: "right-4",
  };

  return (
    <div className="relative block w-full">
      <select
        className={`${baseStyle} ${sizeStyles[size]} w-full ${className}`}
        value={value}
        {...props}
      >
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`absolute top-1/2 -translate-y-1/2 ${iconPositions[size]} text-neutral-500 pointer-events-none`}
        size={iconSizes[size]}
        aria-hidden="true"
      />
    </div>
  );
}

export default MkComboBox;
