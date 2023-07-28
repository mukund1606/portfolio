import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const CanvasMesh = () => {
  const computer = useGLTF("./forest/scene.gltf");
  return (
    <mesh onClick={(e) => console.log(e.eventObject.position)}>
      <primitive
        object={computer.scene}
        scale={1}
        position={[0.015, -0.095, 0]}
        rotation={[0, 2.42, -0.02]}
      />
    </mesh>
  );
};

const CanvasElement = ({ className, ...props }: { className?: string }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [2, 2, 2], fov: 3 }}
      gl={{ preserveDrawingBuffer: true }}
      className={className}
      {...props}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <CanvasMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CanvasElement;
