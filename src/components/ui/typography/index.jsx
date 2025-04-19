import React from 'react';
import { cn } from '@/lib/utils';

const variantStyles = {
  h1: "text-4xl font-bold tracking-tight lg:text-5xl",
  h2: "text-3xl font-bold tracking-tight",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base leading-7",
  small: "text-sm leading-6",
  subtle: "text-sm text-gray-500 leading-6",
  label: "text-sm font-medium leading-none",
};

const colorVariants = {
  default: "text-gray-900",
  primary: "text-[#1a237e]",
  secondary: "text-white",
  muted: "text-gray-500",
  white: "text-white",
  error: "text-red-600",
  success: "text-green-600",
  accent: "text-[#000000]",
};

export const Typography = React.forwardRef(
  ({
    as: Component = 'p',
    variant = 'p',
    color = 'default',
    className,
    children,
    ...props
  }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          variantStyles[variant],
          colorVariants[color],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

// Pre-configured variants for easier usage
export const Heading1 = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="h1" variant="h1" {...props} />
));
Heading1.displayName = "Heading1";

export const Heading2 = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="h2" variant="h2" {...props} />
));
Heading2.displayName = "Heading2";

export const Heading3 = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="h3" variant="h3" {...props} />
));
Heading3.displayName = "Heading3";

export const Heading4 = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="h4" variant="h4" {...props} />
));
Heading4.displayName = "Heading4";

export const Heading5 = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="h5" variant="h5" {...props} />
));
Heading5.displayName = "Heading5";

export const Heading6 = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="h6" variant="h6" {...props} />
));
Heading6.displayName = "Heading6";

export const Paragraph = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="p" variant="p" {...props} />
));
Paragraph.displayName = "Paragraph";

export const Small = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="span" variant="small" {...props} />
));
Small.displayName = "Small";

export const Subtle = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="span" variant="subtle" {...props} />
));
Subtle.displayName = "Subtle";

export const Label = React.forwardRef((props, ref) => (
  <Typography ref={ref} as="label" variant="label" {...props} />
));
Label.displayName = "Label"; 