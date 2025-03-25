import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

const linkVariants = {
  default: "text-[#1a237e] hover:underline",
  subtle: "text-gray-600 hover:text-[#1a237e] hover:underline",
  nav: "text-gray-700 hover:text-[#1a237e] font-medium",
  button: "inline-flex items-center justify-center rounded-md bg-[#1a237e] text-white px-4 py-2 text-sm font-medium hover:bg-[#151c69] transition-colors",
  buttonOutline: "inline-flex items-center justify-center rounded-md border border-[#1a237e] text-[#1a237e] px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors",
  footer: "text-gray-500 hover:text-gray-800",
  accent: "text-[#000000] hover:text-[#333333] hover:underline",
  buttonAccent: "inline-flex items-center justify-center rounded-md bg-[#000000] text-white px-4 py-2 text-sm font-medium hover:bg-[#333333] transition-colors",
};

export const Link = React.forwardRef(
  ({
    href,
    variant = 'default',
    className,
    children,
    external = false,
    ...props
  }, ref) => {
    const linkClassName = cn(
      linkVariants[variant],
      className
    );

    if (external) {
      return (
        <a 
          ref={ref}
          href={href} 
          className={linkClassName} 
          target="_blank" 
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink 
        ref={ref}
        href={href} 
        className={linkClassName} 
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link; 