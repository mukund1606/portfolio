import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

// Utils
import { cn } from "@/lib/utils";

const buttonVariants = cva("font-bold text-white px-6 py-2 rounded-md", {
  variants: {
    variant: {
      blue: "bg-blueGradient text-white hover:opacity-70 duration-300 ease-linear transition-all",
      outline:
        "bg-tansparent border-2 border-white duration-300 ease-linear transition-all hover:bg-white hover:text-black",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
