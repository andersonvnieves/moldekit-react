export interface MkStackedBarChartProps {
  data: {
    label: string;
    values: number[];
    type: "faded" | "regular" | "no-data";
  }[];
  className?: string;
}
