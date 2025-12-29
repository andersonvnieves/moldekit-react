import type { MkTopBarProps } from "./MkTopBar.props.ts";
import { Menu } from "lucide-react";

function MkTopBar({ rightMenu, className, children }: MkTopBarProps) {
  const baseStyle = "w-full flex justify-between items-center p-3";
  return (
    <section className={`${baseStyle} ${className}`}>
      <button
        className="w-[45px] h-[45px] flex items-center justify-center transition-colors duration-200 hover:bg-neutral-100 rounded-full"
        aria-label="Menu"
      >
        <Menu size={30} color={"var(--color-neutral-700)"} />
      </button>

      {children ? children : null}
      {rightMenu ? rightMenu : null}
    </section>
  );
}

export default MkTopBar;
