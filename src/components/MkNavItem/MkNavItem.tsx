import type { ElementType } from "react";
import type { MkNavItemProps } from "./MkNavItem.props.ts";
import { DynamicIcon } from "lucide-react/dynamic";

function MkNavItem({
  label,
  iconName,
  link,
  as,
  isActive = false,
  collapsed = false,
  ...props
}: MkNavItemProps) {
  const baseStyle =
    "group inline-flex flex-row items-center p-[10px] gap-[5px] hover:bg-primary-100 w-fit transition-all duration-300 cursor-pointer rounded-[7px]";
  const iconStyle =
    "text-neutral-600 group-hover:text-primary-800 transition-all duration-300";
  const activeBaseStyle = "bg-primary-200 text-primary-800";
  const activeIconStyle = "text-primary-800";

  let Component: ElementType = "a";
  const linkProps: Record<string, unknown> = {};

  if (as) {
    Component = as;
    linkProps.to = link;
    linkProps.href = link;
  } else {
    linkProps.href = link;
  }

  return (
    <Component
      className={`${baseStyle} ${isActive ? activeBaseStyle : ""}`}
      {...linkProps}
      {...props}
    >
      {iconName && (
        <DynamicIcon
          name={iconName}
          size={20}
          className={`${iconStyle} ${isActive ? activeIconStyle : ""}`}
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
    </Component>
  );
}

export default MkNavItem;

//Usage with react router
/*
<MkNavItem
      label="Home"
      iconName="home"
      link="/home"
      as={Link}
      isActive={usePathname() === "/home"}
    />
*/
