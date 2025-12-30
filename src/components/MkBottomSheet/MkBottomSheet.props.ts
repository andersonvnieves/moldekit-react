export interface MkBottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  height?: "sm" | "md" | "lg" | "full";
}
