"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const TechCanvasMesh = () => {
  const element = useGLTF("./tech-stack/scene.gltf");
  return (
    <>
      <mesh>
        <ambientLight intensity={1.5} />
        <primitive
          object={element.scene}
          scale={1}
          position={[0, 0, 0]}
          rotation={[0, 0, 0.2]}
        />
      </mesh>
    </>
  );
};

const TechCanvas = ({ className, ...props }: { className?: string }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [40, 0, 0], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
      className={className}
      {...props}
    >
      <Suspense fallback={null}>
        <OrbitControls
          // enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
        <TechCanvasMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export { TechCanvas };
