import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef(
  ({
    children,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef(
  ({
    children,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 py-4 border-b border-gray-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef(
  ({
    children,
    className,
    ...props
  }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-lg font-semibold text-gray-900",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef(
  ({
    children,
    className,
    ...props
  }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm text-gray-600 mt-1",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef(
  ({
    children,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 py-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef(
  ({
    children,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 py-4 border-t border-gray-200 bg-gray-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "CardFooter";

export const CardImage = React.forwardRef(
  ({
    src,
    alt = "",
    className,
    ...props
  }, ref) => {
    return (
      <div className="relative w-full aspect-[16/9]">
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CardImage.displayName = "CardImage"; 