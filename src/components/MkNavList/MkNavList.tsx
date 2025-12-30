import type { MkNavListProps } from "./MkNavList.props.ts";
import MkNavItem from "../MkNavItem/MkNavItem.tsx";

function MkNavList({ data, collapsed, className }: MkNavListProps) {
  return (
    <nav>
      <ul className={`flex flex-col gap-[10px] ${className || ""}`}>
        {data.map((item, index) => (
          <MkNavItem
            key={index}
            label={item.label}
            iconName={item.iconName}
            collapsed={collapsed}
          />
        ))}
      </ul>
    </nav>
  );
}

export default MkNavList;
