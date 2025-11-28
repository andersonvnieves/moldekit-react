export interface MkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'filled' | 'outlined' | 'transparent' | 'iconOnly';
    color?: 'primary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    iconName?: string;
}
