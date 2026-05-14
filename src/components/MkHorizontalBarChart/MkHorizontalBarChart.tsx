import type { MkHorizontalBarChartProps } from "./MkHorizontalBarChart.props.ts";

function MkHorizontalBarChart({ data }: MkHorizontalBarChartProps) {
  const segmentColorByIndex: string[] = [
    "bg-[var(--color-primary-500)]",
    "bg-[var(--color-primary-400)]",
    "bg-[var(--color-primary-300)]",
    "bg-[var(--color-primary-200)]",
    "bg-[var(--color-primary-100)]",
  ];

  return (
    <div className="w-full h-[10px] bg-neutral-200 rounded-[3px] overflow-hidden flex">
      {data.map((element, i) => (
        <div
          className={`h-[10px] ${segmentColorByIndex[i % segmentColorByIndex.length]} rounded-[3px] transition-all duration-300 block`}
          style={{
            width: `${Math.min(Math.max(element.value, 0), 100)}%`,
            minHeight: "10px",
          }}
        ></div>
      ))}
    </div>
  );
}

export default MkHorizontalBarChart;
