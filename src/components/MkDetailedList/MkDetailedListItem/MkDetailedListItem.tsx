import type { MkDetailedListItemProps } from "./MkDetailedListItem.props.ts";
import { MkDivider } from "../../MkDivider";
import { MkIconBadge } from "../../MkIconBadge";

function MkDetailedListItem({
  title,
  description,
  numericValue,
  icon,
}: MkDetailedListItemProps) {
  return (
    <div
      className={
        "flex justify-between items-center bg-var(--surface-level1) hover:bg-neutral-100 p-3 h-[70px] transition-all duration-300 border-1 border-[var(--border-default)] rounded-xl"
      }
    >
      {icon ? (
        <MkIconBadge color={icon.color} iconName={icon.iconName} />
      ) : null}
      <div className={"flex flex-col justify-center"}>
        <p className={"mk-content"}>{title}</p>
        {description ? <p className={"mk-subcontent"}>{description}</p> : null}
      </div>
      <div className={"flex items-center"}>
        {numericValue ? (
          <MkDivider orientation={"vertical"} className={"mx-2"} />
        ) : null}
        {numericValue ? (
          <span className={"mk-content-numeric"}>{numericValue}</span>
        ) : null}
      </div>
    </div>
  );
}

export default MkDetailedListItem;
