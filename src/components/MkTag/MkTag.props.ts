export interface MkTagProps {
  data: { id: string; label: string }[];
  className?: string;
  onRemove?: (id: string) => void;
}
