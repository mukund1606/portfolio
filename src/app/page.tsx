import Image from "next/image";

// Components
import HeroSection from "@/components/HeroSection";

// Utils
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <div className="flex h-[calc(100dvh-1.5rem)] w-full justify-center overflow-hidden p-4 pb-32 xl:p-20 xl:pb-0">
      <div className="relative w-full rounded-xl shadow-md shadow-white/20 xl:max-h-[80dvh] xl:w-[80%]">
        <Image
          src="/galaxy.jpg"
          alt="galaxy"
          width={1024}
          height={768}
          className={cn("absolute -z-10 h-full w-full rounded-xl opacity-30")}
          priority
        />
        <div className="flex h-full w-full flex-col items-center gap-5 overflow-y-scroll p-4 text-center scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#75c2f6]/20 scrollbar-thumb-rounded-full md:p-12 xl:p-16">
          <div className="flex w-full justify-center">
            <HeroSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
