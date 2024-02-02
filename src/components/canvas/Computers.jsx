/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import PropTypes from "prop-types";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={100} position={[6, 0, 2]} />
      <spotLight position={[0, 0.2, 0]} intensity={2} castShadow /> */}
      <hemisphereLight intensity={2} groundColor="black" />

      {/* Directional light for front illumination */}
      <directionalLight
        position={[25, 5, 5]}
        intensity={2}
        castShadow
      />

      {/* Directional light for back illumination */}
      <directionalLight
        position={[-5, -2, -5]}
        intensity={2}
        castShadow
      />

      <pointLight intensity={20} position={[3, 0, 2]} />
      <pointLight intensity={4} position={[-3, -1, -2]} />
      <spotLight position={[0, 0.2, 0]} intensity={2} castShadow />
      <primitive
        object={computer.scene}
        scale={1.5}
        position={[0, -2.5, 0]}
        rotation={[0, 0.8, 0]} // Rotate around the Z-axis
      />
    </mesh>
  );
};
Computers.propTypes = {
  isMobile: PropTypes.bool,
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      className="computer-canvas"
      shadows
      camera={{ position: [20, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
