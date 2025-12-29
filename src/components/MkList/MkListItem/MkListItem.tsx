import type { MkListItemProps } from "./MkListItem.props.ts";
import { MkStatusIndicator } from "../../MkStatusIndicator";
import { MkDivider } from "../../MkDivider";

function MkListItem({ title, numericValue, status }: MkListItemProps) {
  return (
    <div
      className={
        "flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 p-3 h-[70px] transition-all duration-300"
      }
    >
      <div className={"flex flex-col justify-center"}>
        <p className={"mk-content"}>{title}</p>
        {status ? (
          <MkStatusIndicator color={status.color} text={status.text} />
        ) : null}
      </div>
      <div className={"flex items-center"}>
        {status && numericValue ? (
          <MkDivider orientation={"vertical"} className={"mx-2"} />
        ) : null}
        {numericValue ? (
          <span className={"mk-content-numeric"}>{numericValue}</span>
        ) : null}
      </div>
    </div>
  );
}

export default MkListItem;
