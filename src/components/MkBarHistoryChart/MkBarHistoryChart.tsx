import type { MkBarHistoryChartProps } from "./MkBarHistoryChart.props.ts";

function MkBarHistoryChart({ data, className }: MkBarHistoryChartProps) {
  const baseStyles =
    "flex flex-row flex-wrap justify-between p-1 w-full max-w-4xl";

  const barContainerStyles = "flex flex-col items-center gap-2 w-12";

  const barStyles = "w-[10px] rounded-full shadow-sm absolute bottom-0 left-0";

  const bgBarStyles = "w-[10px] h-32 bg-neutral-200 rounded-full relative";

  const batColorStyles: Record<string, string> = {
    faded: "bg-primary-200",
    regular: "bg-primary-500",
    "no-data": "bg-primary-400",
  };

  return (
    <div className={`${baseStyles} ${className}`}>
      {data.map((item, index) => (
        <div key={index} className={barContainerStyles}>
          <div className={bgBarStyles}>
            <div
              className={`${barStyles} ${batColorStyles[item.type ? item.type : "regular"]}`}
              style={{ height: `${item.value}%` }}
            />
          </div>
          <span className="mk-label text-xs font-medium text-neutral-700 text-center min-w-[40px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MkBarHistoryChart;
