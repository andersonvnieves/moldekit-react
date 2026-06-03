import type { InputHTMLAttributes } from "react";

export interface MkDateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variantSize?: "sm" | "md" | "lg";
  className?: string;
}
