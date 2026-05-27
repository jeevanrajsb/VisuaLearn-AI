import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

const AIBrain = () => {

  const brain = useGLTF(
    "/models/brain.glb"
  );

  const brainRef = useRef();

  useFrame((state) => {

    const t =
      state.clock.getElapsedTime();

    // SLOW ROTATION

    brainRef.current.rotation.y =
      t * 0.4;

    // FLOATING MOTION

    brainRef.current.position.y =
      -5 + Math.sin(t * 1.5) * 0.5;

    // PULSE SCALE

    const scale =
      0.07 +
      Math.sin(t * 2) * 0.002;

    brainRef.current.scale.set(
      scale,
      scale,
      scale
    );
  });

  return (

    <primitive
      ref={brainRef}

      object={brain.scene}

      scale={1}

      position={[0, -1, 0]}
    />

  );
};

export default AIBrain;