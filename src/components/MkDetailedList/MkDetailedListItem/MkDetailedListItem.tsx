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
        <div className={`flex items-center gap-2 min-w-0 flex-1 mr-2`}>
          {data.icon ? (
            <div className={"shrink-0"}>
              <MkIconBadge
                color={data.icon.color}
                iconName={data.icon.iconName}
              />
            </div>
          ) : null}
          <div
            className={
              "flex flex-col justify-center items-start text-left min-w-0 flex-1 w-full"
            }
          >
            <p className={"mk-content truncate w-full"}>{data.title}</p>
            {data.description ? (
              <p className={"mk-subcontent truncate w-full"}>
                {data.description}
              </p>
            ) : null}
          </div>
        </div>
        <div className={"flex items-center shrink-0"}>
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
