export interface MkBarHistoryChartProps {
  data: {
    label: string;
    value: number;
    type: "faded" | "regular" | "no-data";
  }[];
  className?: string;
}
