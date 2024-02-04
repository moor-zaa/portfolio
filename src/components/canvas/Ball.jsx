/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import PropTypes from "prop-types";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef();

  return (
    <Float>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.4} />
      <mesh rotationSpeed={0.05} receiveShadow scale={3} ref={ballRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#8fb7e9"}
          polygonOffset
          fog
          polygonOffsetFactor={40}
          flatShading
        />
        <Decal
          // mirror fixed
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
          scale={0.6}
          map={decal}
        />
      </mesh>
    </Float>
  );
};
Ball.propTypes = {
  imgUrl: PropTypes.string,
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string,
};

export default BallCanvas;
