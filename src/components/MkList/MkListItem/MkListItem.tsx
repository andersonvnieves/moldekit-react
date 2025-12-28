import type { MkListItemProps } from "./MkListItem.props.ts";

function MkListItem({ title, description, numericValue }: MkListItemProps) {
  return (
    <div
      className={
        "flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 p-3 transition-all duration-300"
      }
    >
      <div className={"flex flex-col justify-center"}>
        <p className={"mk-content"}>{title}</p>
        {description ? (
          <span className={"mk-subcontent"}>{description}</span>
        ) : null}
      </div>
      <div className={"flex items-center"}>
        {numericValue ? (
          <span className={"mk-content-numeric"}>{numericValue}</span>
        ) : null}
      </div>
    </div>
  );
}

export default MkListItem;
