import type { MkBarHistoryChartProps } from "./MkBarHistoryChart.props.ts";

function MkBarHistoryChart({ className }: MkBarHistoryChartProps) {
  const baseStyles = "";

  const barStyles = "";

  return (
    <div className={`${baseStyles} ${className}`}>
      <div className={`${barStyles}`}></div>
    </div>
  );
}

export default MkBarHistoryChart;
