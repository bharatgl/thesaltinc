import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/images/earth.jpg";

function Earth() {
  const colorMap = useLoader(TextureLoader, texture);
  const meshRef = useRef();

  // useFrame hook for autorotation
  useFrame(() => {
    if (meshRef.current) {
      // Update the rotation angles here
      meshRef.current.rotation.x += 0.0012;
      meshRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[10, 1200, 600]}>
      <sphereGeometry attach="geometry" args={[3, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export default Earth;
