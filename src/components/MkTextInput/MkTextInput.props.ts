import type { InputHTMLAttributes } from "react";

export interface MkTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variantSize?: "sm" | "md" | "lg";
  className?: string;
}
