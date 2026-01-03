export interface MkComboBoxProps {
  value?: string | number;
  size?: "sm" | "md" | "lg";
  className?: string;
  list: { value: string; label: string }[];
}
