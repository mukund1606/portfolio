import AnimateName from "@/components/AnimateName";

const StartAnimation = () => {
  return (
    <div className="w-full bg-black h-[100dvh] min-h-[100dvh] fixed inset-0 z-40 mainStart px-2">
      <div className="relative w-full h-[50dvh] flex justify-center overflow-hidden upperPart">
        <AnimateName className="absolute -bottom-[101px] max-w-[80%]" />
      </div>
      <div className="relative w-full h-[50dvh] flex justify-center overflow-hidden lowerPart">
        <AnimateName className="absolute -top-[108px] max-w-[80%]" />
      </div>
    </div>
  );
};

export default StartAnimation;
