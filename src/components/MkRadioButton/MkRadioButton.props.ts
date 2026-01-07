export interface MkRadioButtonProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  label?: string;
  name: string;
  value?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}
