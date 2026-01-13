export interface MkBarChartProps {
  data: {
    label: string;
    value: number;
    type: "faded" | "regular" | "no-data";
  }[];
  className?: string;
}
