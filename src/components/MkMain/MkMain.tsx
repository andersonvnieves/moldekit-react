import type { MkMainProps } from "./MkMain.props.ts";

function MkMain({ className = "", children }: MkMainProps) {
  const baseStyles = [
    "w-full h-full p-6",
    "bg-[var(--surface-level1)] ",
    "border border-[var(--border-default)] rounded-[15px]",
  ].join(" ");

  return <main className={`${baseStyles} ${className}`}>{children}</main>;
}

export default MkMain;
