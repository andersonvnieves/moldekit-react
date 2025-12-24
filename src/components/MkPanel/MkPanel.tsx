import type { MkPanelProps } from "./MkPanel.props.ts";

function MkPanel({ title, className = "", children }: MkPanelProps) {
  const baseStyles = [
    "w-full h-full p-3",
    "bg-[var(--surface-level2)] ",
    "rounded-[20px]",
  ].join(" ");

  return (
    <main className={`${baseStyles} ${className}`}>
      {title ? <h3 className={"mk-section-title"}>{title}</h3> : null}
      {children}
    </main>
  );
}

export default MkPanel;
