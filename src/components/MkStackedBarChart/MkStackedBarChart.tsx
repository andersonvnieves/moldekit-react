import type { MkStackedBarChartProps } from "./MkStackedBarChart.props.ts";

function MkStackedBarChart({ data, className }: MkStackedBarChartProps) {
  const baseStyles =
    "flex flex-row flex-wrap justify-between p-1 w-full max-w-4xl";
  const barContainerStyles = "flex flex-col items-center gap-2 w-12";
  const bgBarStyles = "w-[25px] h-32 relative overflow-hidden flex items-end";
  const segmentBaseStyles = "w-full";
  const segmentColorByIndex: string[] = [
    "bg-primary-500",
    "bg-primary-400",
    "bg-neutral-300",
    "bg-neutral-500",
  ];
  const barOpacityByType: Record<string, string> = {
    faded: "opacity-50",
    regular: "opacity-100",
    "no-data": "opacity-70",
  };

  const labelStyles =
    "mk-label text-xs font-medium text-neutral-700 text-center min-w-[40px]";

  const totals = data.map((item) => item.values.reduce((sum, v) => sum + v, 0));
  const maxTotal = Math.max(...totals, 1);

  return (
    <div className={`${baseStyles} ${className ?? ""}`}>
      {data.map((item, index) => {
        const total = totals[index] || 0;
        const barHeightPercent = (total / maxTotal) * 100;

        return (
          <div key={index} className={barContainerStyles}>
            <div className={bgBarStyles}>
              <div
                className={`w-full flex flex-col justify-end rounded-[5px] ${barOpacityByType[item.type]}`}
                style={{ height: `${barHeightPercent}%` }}
              >
                {item.values.map((value, i) => {
                  const segmentHeightPercent =
                    total > 0 ? (value / total) * 100 : 0;

                  const isFirst = i === 0;
                  const isLast = i === item.values.length - 1;
                  const radiusClass = [
                    isFirst ? "rounded-t-[5px]" : "",
                    isLast ? "rounded-b-[5px]" : "",
                  ].join(" ");

                  return (
                    <div
                      key={i}
                      className={`${segmentBaseStyles} ${
                        segmentColorByIndex[i % segmentColorByIndex.length]
                      } ${radiusClass}`}
                      style={{ height: `${segmentHeightPercent}%` }}
                    />
                  );
                })}
              </div>
            </div>
            <span className={labelStyles}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MkStackedBarChart;
