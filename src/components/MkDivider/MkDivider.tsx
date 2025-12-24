import type { MkDividerProps } from "./MkDividerProps.props.ts";

function MkDivider({ className = "" }: MkDividerProps) {
  const baseStyles = `
    bg-[var(--border-default)] 
    border-0
    transform
    h-px
  `;

  return <hr className={`${baseStyles} ${className}`} />;
}

export default MkDivider;
