import type { MkPanelProps } from "./MkPanel.props.ts";

function MkPanel({ className = "", children }: MkPanelProps) {
  const baseStyles = [
    "w-full h-full p-3",
    "bg-[var(--surface-level2)] ",
    "rounded-[20px]",
  ].join(" ");

  return <main className={`${baseStyles} ${className}`}>{children}</main>;
}

export default MkPanel;
