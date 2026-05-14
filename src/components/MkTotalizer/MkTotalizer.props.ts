export interface MkTotalizerProps {
  label?: string;
  value: string;
  delta?: {
    value: string;
    arrow?: "up" | "down" | "none";
    sentiment?: "positive" | "negative" | "neutral";
  };
  className?: string;
}
