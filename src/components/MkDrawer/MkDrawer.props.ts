export interface MkDrawerProps {
  position?: "left" | "right";
  open?: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}
