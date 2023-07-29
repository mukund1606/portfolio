import { HeroCanvas } from "@/components/HeroCanvas";
import { TechCanvas } from "@/components/TechCanvas";

const TechStackPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-5 mb-20 overflow-hidden overflow-x-hidden xl:mb-0">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-blueGradient h-[20%]">
          Tech Stack
        </h1>
        <div className="overflow-visible flex items-end justify-center relative aspect-video lg:max-w-[80%] w-[200%] max-h-[80%]">
          <TechCanvas />
        </div>
      </div>
    </>
  );
};

export default TechStackPage;
