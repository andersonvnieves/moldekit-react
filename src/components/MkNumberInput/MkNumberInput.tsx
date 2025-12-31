import type { MkNumberInputProps } from "./MkNumberInput.props.ts";

function MkNumberInput({
  value,
  placeholder,
  size = "md",
  className,
  ...props
}: MkNumberInputProps) {
  const baseStyle = [
    "bg-neutral-50 rounded-[7px] border-2 border-neutral-300",
    "text-neutral-800",
    "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-600",
    "focus:border-primary-300 focus:outline-none focus:ring-0focus:ring-offset-0",
    "hover:shadow-[0_0_4px_var(--color-primary-400)] hover:border-primary-300",
    "transition-shadow transition-border duration-300",
  ].join(" ");

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm font-[14px]",
    md: 'px-4 py-2 text-md font-[16px]"',
    lg: 'px-6 py-3 text-lg font-[18px]"',
  };

  return (
    <input
      type={"number"}
      className={`${baseStyle} ${sizeStyles[size]} ${className}`}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
}

export default MkNumberInput;
