import type { MkTabProps } from "./MkTab.props.ts";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

function MkTab({ data, onTabSelect, selectedTab }: MkTabProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(() =>
    selectedTab !== undefined && selectedTab < data.length ? selectedTab : 0
  );

  useEffect(() => {
    if (selectedTab !== undefined && selectedTab < data.length) {
      setSelectedIndex(selectedTab);
    }
  }, [selectedTab, data.length]);

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const updateIndicator = () => {
    const currentTabEl = tabsRef.current[selectedIndex];
    if (currentTabEl) {
      setIndicatorStyle({
        left: currentTabEl.offsetLeft,
        top: currentTabEl.offsetTop,
        width: currentTabEl.offsetWidth,
        height: currentTabEl.offsetHeight,
        opacity: 1,
      });
    }
  };

  useLayoutEffect(() => {
    updateIndicator();
    const timer = setTimeout(updateIndicator, 0);
    return () => clearTimeout(timer);
  }, [selectedIndex, data]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [selectedIndex, data]);

  const handleSelect = (tabIndex: number) => {
    setSelectedIndex(tabIndex);
    onTabSelect?.(tabIndex);
  };

  const baseStyle =
    "relative w-full p-[2px] flex flex-row gap-1 bg-neutral-100 rounded-[7px] min-h-[36px]";
  const tabStyle =
    "relative z-10 px-[10px] py-[5px] rounded-[5px] cursor-pointer transition-colors duration-200 flex-1 sm:flex-none flex items-center justify-center border border-transparent select-none";

  return (
    <div className={baseStyle}>
      <div
        className="absolute z-0 bg-[var(--surface-level1)] border border-[var(--border-default)] rounded-[5px] shadow-2xs transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: `${indicatorStyle.left}px`,
          top: `${indicatorStyle.top}px`,
          width: `${indicatorStyle.width}px`,
          height: `${indicatorStyle.height}px`,
          opacity: indicatorStyle.opacity,
        }}
      />
      {data.map((item, i) => (
        <button
          key={i}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          className={tabStyle}
          onClick={() => handleSelect(i)}
          type="button"
        >
          <span
            className={`mk-label transition-colors duration-200 ${
              selectedIndex === i
                ? "text-[var(--text-heading)] font-medium"
                : "text-[var(--text-subcontent)] hover:text-[var(--text-content)]"
            }`}
          >
            {item}
          </span>
        </button>
      ))}
    </div>
  );
}

export default MkTab;
