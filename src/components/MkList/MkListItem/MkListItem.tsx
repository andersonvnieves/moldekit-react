import type { MkListItemProps } from "./MkListItem.props.ts";
import { MkStatusIndicator } from "../../MkStatusIndicator";
import { MkDivider } from "../../MkDivider";

function MkListItem({ data, onClick }: MkListItemProps) {
  const isClickable = !!onClick;

  const baseStyles =
    "flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 p-3 h-[70px] transition-all duration-300";

  const buttonStyles = "w-full cursor-pointer";
  if (isClickable) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={!isClickable}
        className={buttonStyles}
      >
        <div className={baseStyles}>
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
  } else {
    return (
      <div className={baseStyles}>
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
    );
  }
}

export default MkListItem;
