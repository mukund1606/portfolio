"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

// Utils
import { cn } from "@/lib/utils";

const AboutPage = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/content/about.md")
      .then((res) => res.text())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <div className="flex justify-center w-full h-[calc(100dvh-1.5rem)] p-4 pb-32 overflow-hidden xl:p-20 xl:pb-0">
        <div className="xl:w-[80%] relative w-full shadow-md rounded-xl xl:max-h-[80dvh] shadow-white/20">
          <Image
            src="/galaxy.jpg"
            alt="galaxy"
            width={1024}
            height={768}
            className={cn("w-full h-full rounded-xl absolute opacity-30 -z-10")}
            priority
          />
          <div className="flex flex-col items-center w-full h-full p-4 overflow-y-scroll text-center scrollbar-thumb-[#75c2f6]/20 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-transparent md:p-12 xl:p-16 gap-5">
            <h1 className="w-full text-5xl font-bold text-transparent bg-yellowGradient bg-clip-text">
              About Me
            </h1>
            <div className="flex justify-center w-full my-auto">
              <Markdown className="w-full space-y-5 text-lg prose prose-invert">
                {data}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
