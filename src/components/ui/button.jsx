<<<<<<< HEAD
import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"
=======
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-[#1a237e] text-white hover:bg-[#1a237e]/90",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
<<<<<<< HEAD
        outline: "border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "border border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white",
=======
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white",
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#1a237e] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-6",
        icon: "h-9 w-9",
        fullWidth: "w-full h-9 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
<<<<<<< HEAD
)

function Button({
  className,
  variant,
  size,
  ...props
}) {
  return (
    <button
=======
);

function Button({ className, variant, size, ref, ...props }) {
  return (
    <button
      ref={ref}
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

<<<<<<< HEAD
export { Button, buttonVariants }
=======
export { Button, buttonVariants };
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
