import type { MkCheckboxProps } from "./MkCheckbox.props.ts";
import { Check } from "lucide-react";
import { useId, useState, useEffect } from "react";

function MkCheckbox({
  label,
  size = "md",
  className = "",
  checked,
  disabled,
  id,
  onChange,
  ...props
}: MkCheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const [isChecked, setIsChecked] = useState(checked ?? false);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    onChange?.(event);
  };

  const baseStyle = [
    "appearance-none cursor-pointer",
    "bg-neutral-50 rounded-[7px] border-2 border-neutral-300",
    "transition-all duration-300",
    "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-neutral-300",
    "enabled:focus:border-primary-300 enabled:focus:outline-none enabled:focus:ring-0",
    "enabled:hover:shadow-[0_0_4px_var(--color-primary-400)] enabled:hover:border-primary-300",
    "checked:bg-neutral-50 checked:border-primary-300",
    "checked:enabled:hover:bg-primary-100 checked:enabled:hover:border-primary-300",
    "checked:enabled:hover:shadow-[0_0_4px_var(--color-primary-500)]",
    "disabled:checked:bg-neutral-100 disabled:checked:border-neutral-400",
    "relative flex items-center justify-center",
  ].join(" ");

  const sizeStyles: Record<string, string> = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const iconSizes: Record<string, number> = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  const labelSizeStyles: Record<string, string> = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const iconStyle = [
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none  z-10",
    disabled === true
      ? "text-[var(--color-neutral-400)]"
      : "text-[var(--color-primary-800)]",
  ].join(" ");

  const labelStyle = [
    "text-neutral-800 cursor-pointer select-none",
    disabled === true ? "cursor-not-allowed text-neutral-600" : "",
  ].join(" ");

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          id={checkboxId}
          className={`${baseStyle} ${sizeStyles[size]}`}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        {isChecked && (
          <Check
            className={iconStyle}
            size={iconSizes[size]}
            strokeWidth={3}
            aria-hidden="true"
          />
        )}
      </div>
      {label && (
        <label
          htmlFor={checkboxId}
          className={`${labelStyle} ${labelSizeStyles[size]}`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default MkCheckbox;
