export interface MkDateInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "size"
> {
  value?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}
