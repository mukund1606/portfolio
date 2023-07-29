import { ButtonHTMLAttributes, FC, forwardRef } from "react";

// Utils
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RoundButton: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button className={cn("mx-auto lg:mx-0", className)} {...props} ref={ref}>
        <Link
          href="/projects"
          className="relative w-[185px] h-[185px] flex justify-center group items-center bg-circleStar bg-cover bg-center bg-no-repeat"
          aria-label="Projects"
        >
          <Image
            src="/rounded-text.png"
            alt="round-text"
            width={141}
            height={148}
            className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          />
          <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
        </Link>
      </button>
    );
  }
);

RoundButton.displayName = "RoundButton";

export { RoundButton };
