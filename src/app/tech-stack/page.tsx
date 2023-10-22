"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

import { cn } from "@/lib/utils";

const TechCanvas = dynamic(
  () => import("@/components/TechCanvas").then((module) => module.TechCanvas),
  {
    ssr: false,
  },
);

const TechStackPage = () => {
  return (
    <>
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
            <h1 className="w-full bg-yellowGradient bg-clip-text text-5xl font-bold text-transparent">
              Tech Stack
            </h1>
            <div className="flex aspect-square w-full justify-center">
              <TechCanvas />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStackPage;
