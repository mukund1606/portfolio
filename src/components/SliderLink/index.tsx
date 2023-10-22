import { type AnchorHTMLAttributes, type FC, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";

// Utils
import { cn } from "@/lib/utils";

const linkVariants = cva("font-bold text-white px-6 py-2 rounded-md", {
  variants: {
    variant: {
      default:
        "before:content-[''] before:w-0 before:bg-blueGradient hover:before:w-full before:ease-linear before:duration-200 before:absolute before:-top-2 before:left-0 before:h-[1.5px] after:content-[''] after:w-0 after:bg-blueGradient hover:after:w-full after:ease-linear after:duration-200 after:absolute after:-bottom-2 after:right-0 after:h-[1.5px] relative bg-white bg-clip-text hover:bg-blueGradient text-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const SliderLink: FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <a
        className={cn(linkVariants({ variant, className }))}
        {...props}
        ref={ref}
      ></a>
    );
  },
);

SliderLink.displayName = "Link";

export { SliderLink };
