import AnimateName from "@/components/AnimateName";

const StartAnimation = () => {
  return (
    <div className="mainStart fixed inset-0 z-40 h-[100dvh] min-h-[100dvh] w-full bg-black px-2">
      <div className="upperPart relative flex h-[50dvh] w-full justify-center overflow-hidden">
        <AnimateName className="absolute -bottom-[101px] max-w-[80%]" />
      </div>
      <div className="lowerPart relative flex h-[50dvh] w-full justify-center overflow-hidden">
        <AnimateName className="absolute -top-[108px] max-w-[80%]" />
      </div>
    </div>
  );
};

export default StartAnimation;
