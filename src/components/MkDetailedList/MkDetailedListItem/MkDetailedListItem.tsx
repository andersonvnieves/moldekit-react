import type { MkDetailedListItemProps } from "./MkDetailedListItem.props.ts";
import { MkDivider } from "../../MkDivider";
import { MkIconBadge } from "../../MkIconBadge";

function MkDetailedListItem({ data, onClick }: MkDetailedListItemProps) {
  const isClickable = !!onClick;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isClickable}
      className={"w-full"}
    >
      <div
        className={
          "flex justify-between items-center bg-var(--surface-level1) hover:bg-neutral-100 p-2 h-[70px] transition-all duration-300 border-1 border-[var(--border-default)] rounded-xl"
        }
      >
        <div className={`flex items-center gap-2`}>
          {data.icon ? (
            <MkIconBadge
              color={data.icon.color}
              iconName={data.icon.iconName}
            />
          ) : null}
          <div className={"flex flex-col justify-center items-start text-left"}>
            <p className={"mk-content"}>{data.title}</p>
            {data.description ? (
              <p className={"mk-subcontent"}>{data.description}</p>
            ) : null}
          </div>
        </div>
        <div className={"flex items-center"}>
          {data.numericValue ? (
            <MkDivider orientation={"vertical"} className={"mx-2"} />
          ) : null}
          {data.numericValue ? (
            <span className={"mk-content-numeric"}>{data.numericValue}</span>
          ) : null}
        </div>
      </div>
    </button>
  );
}

export default MkDetailedListItem;
