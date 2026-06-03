import type { InputHTMLAttributes } from "react";

export interface MkNumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variantSize?: "sm" | "md" | "lg";
  className?: string;
}
