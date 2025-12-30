import type { MkTabProps } from "./MkTab.props.ts";

function MkTab({ data }: MkTabProps) {
  const baseStyle =
    "w-full p-[2px] flex flex-row gap-1 bg-neutral-100 rounded-[7px]";

  const tabStyle =
    "px-[10px] py-[5px] rounded-[5px] hover:bg-neutral-200 cursor-pointer transition-all duration-300";

  const selectedTabStyle =
    "bg-[var(--surface-level1)] border-[var(--border-default)] border-1";
  return (
    <div className={baseStyle}>
      {data.map((item) => (
        <div className={`${tabStyle} ${selectedTabStyle}`}>
          <span className={"mk-label leading-none"}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default MkTab;
