import type { MkSectionHeaderProps } from "./MkSectionHeader.props.ts";

function MkSectionHeader({ title, className, children }: MkSectionHeaderProps) {
  const baseStyle = "flex items-center justify-between py-1";

  return (
    <div className={`${baseStyle} ${className}`}>
      <div>
        <h5 className={"mk-section-title"}>{title}</h5>
      </div>
      {children ? <div>{children}</div> : null}
    </div>
  );
}

export default MkSectionHeader;
