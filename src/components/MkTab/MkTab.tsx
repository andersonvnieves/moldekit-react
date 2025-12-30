import type { MkTabProps } from "./MkTab.props.ts";
import { useState } from "react";

function MkTab({ data, onTabSelect, selectedTab }: MkTabProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    selectedTab && selectedTab < data.length ? selectedTab : 0
  );

  const baseStyle =
    "w-full p-[2px] flex flex-row gap-1 bg-neutral-100 rounded-[7px]";
  const tabStyle =
    "px-[10px] py-[5px] rounded-[5px] hover:bg-neutral-200 cursor-pointer transition-all duration-300 flex-1 sm:flex-none flex items-center justify-center border border-transparent";
  const selectedTabStyle =
    "bg-[var(--surface-level1)] border-[var(--border-default)]";

  const handleSelect = (tabIndex: number) => {
    onTabSelect?.(tabIndex);
    setSelectedTabIndex(tabIndex);
  };

  return (
    <div className={baseStyle}>
      {data.map((item, i) => (
        <button
          key={i}
          className={`${tabStyle} ${selectedTabIndex == i ? selectedTabStyle : ""}`}
          onClick={() => handleSelect(i)}
          type="button"
        >
          <span className="mk-label">{item}</span>
        </button>
      ))}
    </div>
  );
}

export default MkTab;
