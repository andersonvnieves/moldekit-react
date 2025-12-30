import type { MkNavItemProps } from "./MkNavItem.props.ts";
import { DynamicIcon } from "lucide-react/dynamic";

function MkNavItem({
  label,
  iconName,
  //link,
  collapsed = false,
}: MkNavItemProps) {
  const baseStyle =
    "group inline-flex flex-row items-center p-[10px] gap-[5px] hover:bg-primary-100 w-fit transition-all duration-300 cursor-pointer rounded-[7px]";
  //const activeStyle = " bg-primary-200 text-primary-800";
  return (
    <li className={baseStyle}>
      {iconName && (
        <DynamicIcon
          name={iconName}
          size={20}
          className="text-neutral-600 group-hover:text-primary-800 transition-all duration-300 "
        />
      )}
      {collapsed ? null : (
        <span
          className={
            "mk-caption group-hover:text-primary-800 transition-all duration-300 "
          }
        >
          {label}
        </span>
      )}
    </li>
  );
}

export default MkNavItem;
