import { type ButtonHTMLAttributes, type FC, forwardRef } from "react";

// Utils
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

const RoundButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button className={cn("mx-auto lg:mx-0", className)} {...props} ref={ref}>
      <Link
        href="/projects"
        className="group relative flex h-[185px] w-[185px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat"
        aria-label="Projects"
      >
        <Image
          src="/rounded-text.png"
          alt="round-text"
          width={141}
          height={148}
          className="h-full max-h-[148px] w-full max-w-[141px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
      </Link>
    </button>
  );
});

RoundButton.displayName = "RoundButton";

export { RoundButton };
