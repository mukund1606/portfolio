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
      })
      .catch((err) => console.log(err));
  }, []);
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
              About Me
            </h1>
            <div className="my-auto flex w-full justify-center">
              <Markdown className="prose prose-invert w-full space-y-5 text-lg">
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
