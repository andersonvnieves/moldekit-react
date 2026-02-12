import type { MkDonutChartProps } from "./MkDonutChart.props.ts";

function MkDonutChart({
  data,
  className,
  sizePx = 160,
  thicknessPx = 24,
  centerLabel,
  centerValue,
}: MkDonutChartProps) {
  const baseStyles = "flex items-center justify-center";
  const wrapperStyles = "relative";

  const total = data.reduce((sum, d) => sum + Math.max(0, d.value), 0);

  const segmentColorByIndex: string[] = [
    "var(--color-primary-500)",
    "var(--color-primary-400)",
    "var(--color-primary-300)",
    "var(--color-primary-200)",
    "var(--color-primary-100)",
  ];

  const ringBackground =
    total > 0
      ? (() => {
          let acc = 0;
          const stops = data.map((d, i) => {
            const v = Math.max(0, d.value);
            const start = acc;
            acc += (v / total) * 100;
            const color = segmentColorByIndex[i % segmentColorByIndex.length];
            return `${color} ${start}% ${acc}%`;
          });
          return `conic-gradient(${stops.join(", ")})`;
        })()
      : "conic-gradient(var(--color-neutral-200) 0% 100%)";

  const sizeStyle = { width: sizePx, height: sizePx } as const;

  return (
    <div className={`${baseStyles} ${className ?? ""}`}>
      <div className={wrapperStyles} style={sizeStyle}>
        <div
          className="rounded-full"
          style={{
            ...sizeStyle,
            background: ringBackground,
          }}
        />

        <div
          className="absolute rounded-full bg-white flex flex-col items-center justify-center text-center"
          style={{
            inset: thicknessPx,
          }}
        >
          {centerValue ? (
            <div className="mk-label text-lg font-semibold text-neutral-900">
              {centerValue}
            </div>
          ) : null}
          {centerLabel ? (
            <div className="mk-label text-xs font-medium text-neutral-600">
              {centerLabel}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MkDonutChart;
