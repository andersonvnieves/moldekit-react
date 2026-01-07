export interface MkCheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}
