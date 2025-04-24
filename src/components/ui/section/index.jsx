import React from "react";
import { cn } from "@/lib/utils";

const bgVariants = {
  primary: "bg-[#1a237e] text-white",
  secondary: "bg-white text-gray-900 border border-gray-200",
  white: "bg-white text-gray-900",
  dark: "bg-gray-900 text-white",
  accent: "bg-[#000000] text-white",
  light: "bg-gray-100 text-gray-900",
  primaryLight: "bg-[#303f9f] text-white",
};

export const Section = React.forwardRef(
  (
    {
      as: Component = "section",
      children,
      className,
      background = "white",
      containerClassName,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    // Destructure fullWidth to prevent it from being passed to the DOM element

    // Classes for the section element
    const sectionClasses = cn("py-16", bgVariants[background], className);

    // Classes for the container div
    const containerClasses = cn(
      fullWidth ? "w-full px-4" : "container mx-auto px-4 md:px-6",
      containerClassName
    );

    return (
      <Component ref={ref} className={sectionClasses} {...props}>
        <div className={containerClasses}>{children}</div>
      </Component>
    );
  }
);

Section.displayName = "Section";

export default Section;
