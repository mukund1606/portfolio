import { forwardRef } from "react";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Components
import { HeroCanvas } from "@/components/HeroCanvas";
import { RoundButton } from "@/components/RoundButton";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        className={cn(
          "items-center p-8 grid grid-cols-2 lg:gap-20 gap-12 overflow-x-hidden",
          className
        )}
        {...props}
      >
        <div className="flex justify-center w-full col-span-2 pt-16 lg:justify-start lg:col-span-1">
          <div className="max-w-[456px] space-y-6 text-center lg:text-left">
            <h1 className="relative text-5xl">
              {"Hello, I'm Mukund Mittal a Full Stack Web/Python Developer"}
              <Image
                src="/arrow.png"
                alt="arrow"
                className="absolute w-20 xl:-top-6 xl:-right-8 lg:-right-6 sm:-top-8 sm:-right-8 -top-14 -right-8 lg:block animate-arrow"
                width={100}
                height={100}
              />
            </h1>
            <div className="flex flex-col justify-center gap-8 lg:flex-row md:justify-start">
              <RoundButton />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-2 lg:col-span-1">
          <div className="w-full flex items-end justify-center overflow-hidden relative aspect-square max-w-[456px]">
            <div className="absolute w-[120%] aspect-square">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
