"use client";
import { forwardRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Utils
import { cn } from "@/lib/utils";

// Components
const HeroCanvas = dynamic(
  () => import("@/components/HeroCanvas").then((module) => module.HeroCanvas),
  {
    ssr: false,
  },
);
import { RoundButton } from "@/components/RoundButton";

const HeroSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        className={cn(
          "grid grid-cols-2 items-center gap-12 overflow-x-hidden p-8 lg:gap-20",
          className,
        )}
        {...props}
      >
        <div className="col-span-2 flex w-full justify-center pt-16 lg:col-span-1 lg:justify-start">
          <div className="max-w-[456px] space-y-6 text-center lg:text-left">
            <h1 className="relative text-5xl">
              {"Hello, I'm Mukund Mittal a Full Stack Web/Python Developer"}
              <Image
                src="/arrow.png"
                alt="arrow"
                className="absolute -right-8 -top-14 w-20 animate-arrow sm:-right-8 sm:-top-8 lg:-right-6 lg:block xl:-right-8 xl:-top-6"
                width={100}
                height={100}
              />
            </h1>
            <div className="flex flex-col justify-center gap-8 md:justify-start lg:flex-row">
              <RoundButton />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center lg:col-span-1">
          <div className="relative flex aspect-square w-full max-w-[456px] items-end justify-center overflow-hidden">
            <div className="absolute aspect-square w-[120%]">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
