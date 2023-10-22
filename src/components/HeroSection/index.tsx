import Image from "next/image";
import { RoundButton } from "../RoundButton";

function HeroSection() {
  return (
    <section
      id="home"
      className="grid min-h-[100dvh] items-center justify-center gap-8 p-8 py-16 pb-[calc(67px+4rem)] sm:p-16 sm:py-16 md:py-16 lg:grid-cols-2 lg:gap-20 lg:p-24 lg:py-32 xl:gap-64 xl:p-32"
    >
      <div className="flex flex-col items-end">
        <div className="flex flex-col gap-4">
          <h1 className="relative w-fit text-center text-4xl font-semibold md:text-5xl lg:text-left">
            <Image
              src="/assets/arrow.png"
              alt="arrow"
              className="absolute -right-16 -top-8 hidden w-16 animate-arrow md:w-20 lg:block"
              width={100}
              height={100}
            />
            <span className="flex w-full items-center justify-center lg:w-fit">
              <span className="mb-2 flex w-fit rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center">
                Hello 👋🏻
              </span>
            </span>
            {"I'm Mukund Mittal,"}
            <br />a Full Stack Developer
          </h1>
          <div className="flex w-full flex-col items-center md:items-start">
            <RoundButton />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center lg:justify-start">
        <div className="flex aspect-square w-80 items-center justify-center rounded-md border border-white lg:w-96 xl:w-[26rem]">
          Image Container
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
