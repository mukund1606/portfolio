"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Components
import { SuspenseComponent } from "@/components/SuspenseComponent";

const HeroCanvasMesh = () => {
  const forest = useGLTF("./forest/scene.gltf");
  return (
    <mesh onClick={(e) => console.log(e.eventObject.position)}>
      <primitive
        object={forest.scene}
        scale={1}
        position={[0.015, -0.095, 0]}
        rotation={[0, 2.42, -0.02]}
      />
    </mesh>
  );
};

const HeroCanvas = ({ className, ...props }: { className?: string }) => {
  const isMobile = window.innerWidth < 768;
  useGLTF.preload("./forest/scene.gltf");
  return (
    <Suspense fallback={<SuspenseComponent className={className} />}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [2, 2, 2], fov: 3 }}
        gl={{ preserveDrawingBuffer: true }}
        className={className}
        {...props}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={isMobile ? 4 : 2}
        />
        <HeroCanvasMesh />
        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export { HeroCanvas };
