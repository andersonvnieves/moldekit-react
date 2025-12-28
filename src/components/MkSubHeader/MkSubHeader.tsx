import type { MkSubHeaderProps } from "./MkSubHeader.props.ts";

function MkSubHeader({
  title,
  subtitle,
  className,
  children,
}: MkSubHeaderProps) {
  const baseStyle = "flex items-center justify-between py-1";

  return (
    <div className={`${baseStyle} ${className}`}>
      <div>
        <h3 className={"mk-subheader-title"}>{title}</h3>
        {subtitle ? (
          <h4 className={"mk-subheader-subtitle"}>{subtitle}</h4>
        ) : null}
      </div>
      {children ? <div>{children}</div> : null}
    </div>
  );
}

export default MkSubHeader;
