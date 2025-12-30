export interface MkModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}
