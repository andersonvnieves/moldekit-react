export interface MkDonutChartProps {
  data: {
    label: string;
    value: number;
  }[];
  className?: string;
  sizePx?: number;
  thicknessPx?: number;
  centerLabel?: string;
  centerValue?: string;
}
