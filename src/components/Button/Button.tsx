import type {ButtonProps} from "./Button.props.ts";
import {DynamicIcon} from "lucide-react/dynamic";

function Button({
        variant = 'filled',
        color = 'neutral',
        size = 'medium',
        fullWidth = false,
        iconName,
        className = '',
        disabled,
        children,
        ...props
    }: ButtonProps) {

    const baseStyles = 'flex items-center justify-center text-center rounded-[7px] uppercase focus:outline-none transition-colors duration-300' +
        'disabled:pointer-events-none disabled:cursor-not-allowed';

    const variantStyles = {
        filled: 'font-medium rounded-[7px] uppercase focus:outline-none transition-colors duration-300 disabled:pointer-events-none disabled:cursor-not-allowed',
        outlined: 'font-medium rounded-[7px] uppercase border focus:outline-none transition-colors duration-300 disabled:pointer-events-none disabled:cursor-not-allowed',
        transparent: 'font-medium rounded-[7px] uppercase bg-transparent focus:outline-none transition-colors duration-300 disabled:pointer-events-none disabled:cursor-not-allowed',
        iconOnly: 'rounded-[7px] focus:outline-none transition-colors duration-300 disabled:pointer-events-none disabled:cursor-not-allowed p-2',
    };

    const colorStyles: Record<string, string> = {
        filled: {
            primary: 'bg-primary-400 text-primary-800 ' +
                'hover:bg-primary-500 hover:text-primary-900 ' +
                'disabled:bg-primary-100 disabled:text-primary-200',
            neutral: 'bg-neutral-100 text-neutral-700 ' +
                'hover:bg-neutral-500 hover:text-neutral-900 ' +
                'disabled:bg-neutral-200 disabled:text-neutral-400',
            success: 'bg-success-400 text-success-800 ' +
                'hover:bg-success-500 hover:text-success-900 ' +
                'disabled:bg-success-200 disabled:text-success-400',
            info: 'bg-info-400 text-info-800 ' +
                'hover:bg-info-500 hover:text-info-900 ' +
                'disabled:bg-info-200 disabled:text-info-400',
            danger: 'bg-danger-400 text-danger-800 ' +
                'hover:bg-danger-500 hover:text-danger-900 ' +
                'disabled:bg-danger-200 disabled:text-danger-400'
        },
        outlined: {
            primary: 'border-primary-400 text-primary-800 bg-primary-50 hover:bg-primary-100 focus:bg-primary-100',
            neutral: 'border-neutral-200 text-neutral-700 bg-neutral-50 hover:bg-neutral-200 focus:bg-neutral-100',
            success: 'border-success-400 text-success-800 bg-success-50 hover:bg-success-100 focus:bg-success-100',
            // ...other semantic colors
        },
        transparent: {
            primary: 'text-primary-800 bg-transparent hover:bg-primary-50 focus:bg-primary-100',
            neutral: 'text-neutral-700 bg-transparent hover:bg-neutral-100 focus:bg-neutral-200',
            success: 'text-success-800 bg-transparent hover:bg-success-50 focus:bg-success-100',
            // ...other semantic colors
        },
        iconOnly: {
            primary: 'bg-primary-400 text-primary-800 hover:bg-primary-500 focus:bg-primary-100',
            neutral: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-500 focus:bg-neutral-100',
            success: 'bg-success-400 text-success-800 hover:bg-success-500 focus:bg-success-100',
            // ...other semantic colors
        },
    };


    const sizeStyles: Record<string, string> = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const variantStyleClass: string = variantStyles[variant];
    const colorStyleClass: string = colorStyles[variant][color];
    const sizeStyleClass = variant === 'iconOnly' ? 'p-2 w-10 h-10' : sizeStyles[size];
    const fullWidthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            type="button"
            disabled={disabled}
            className={`${baseStyles} 
                ${variantStyleClass}
                ${colorStyleClass}
                ${sizeStyleClass} 
                ${fullWidthClass} 
                ${className}`}
            {...props}
        >
            <DynamicIcon name={ iconName } size={16} className={'mr-2'} />
            { children }
        </button>
    );
}

export default Button
