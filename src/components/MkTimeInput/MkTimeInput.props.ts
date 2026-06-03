import type { InputHTMLAttributes } from "react";

export interface MkTimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variantSize?: "sm" | "md" | "lg";
  className?: string;
}
