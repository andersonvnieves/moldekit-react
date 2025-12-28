import type { MkHeaderProps } from "./MkHeader.props.ts";

function MkHeader({ title, subtitle, className, children }: MkHeaderProps) {
  const baseStyle = ["flex items-center justify-between", "py-1"].join(" ");

  return (
    <header className={`${baseStyle} ${className}`}>
      <div>
        <h1 className={"mk-title"}>{title}</h1>
        {subtitle ? <h2 className={"mk-subtitle"}>{subtitle}</h2> : null}
      </div>
      {children ? <div>{children}</div> : null}
    </header>
  );
}

export default MkHeader;
