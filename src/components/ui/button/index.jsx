import React from "react";
import { cn } from "@/lib/utils";
import { theme } from "@/lib/theme";

const buttonVariants = {
  primary: "bg-[#1a237e] hover:bg-[#151c69] text-white",
  secondary: "bg-white text-[#1a237e] border border-[#1a237e] hover:bg-gray-50",
  outline: "bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  link: "bg-transparent underline-offset-4 hover:underline text-[#1a237e] p-0",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  accent: "bg-[#000000] hover:bg-[#333333] text-white",
};

const buttonSizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-lg",
};

export const Button = React.forwardRef(
  ({ 
    children,
    variant = "primary",
    size = "md",
    className,
    disabled = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    type = "button",
    ...props
  }, ref) => {
    // Combine all classes
    const buttonClasses = cn(
      // Base styles
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      // Apply variant
      buttonVariants[variant],
      // Apply size
      buttonSizes[size],
      // Apply full width
      fullWidth && "w-full",
      // Custom classes
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button; 