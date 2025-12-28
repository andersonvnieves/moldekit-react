import type { MkSectionHeaderProps } from "./MkSectionHeader.props.ts";

function MkSectionHeader({
  title,
  subtitle,
  className,
  children,
}: MkSectionHeaderProps) {
  const baseStyle = "flex items-center justify-between py-1";

  return (
    <div className={`${baseStyle} ${className}`}>
      <div>
        <h3 className={"mk-section-title"}>{title}</h3>
        {subtitle ? (
          <h4 className={"mk-section-subtitle"}>{subtitle}</h4>
        ) : null}
      </div>
      {children ? <div>{children}</div> : null}
    </div>
  );
}

export default MkSectionHeader;
