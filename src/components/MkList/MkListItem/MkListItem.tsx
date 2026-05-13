import type { MkListItemProps } from "./MkListItem.props.ts";
import { MkStatusIndicator } from "../../MkStatusIndicator";
import { MkDivider } from "../../MkDivider";

function MkListItem({ data, onClick }: MkListItemProps) {
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
          "flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 p-3 h-[70px] transition-all duration-300"
        }
      >
        <div className={"flex flex-col justify-center"}>
          <p className={"mk-content"}>{data.title}</p>
          {data.status ? (
            <MkStatusIndicator
              color={data.status.color}
              text={data.status.text}
            />
          ) : null}
        </div>
        <div className={"flex items-center"}>
          {data.status && data.numericValue ? (
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

export default MkListItem;
