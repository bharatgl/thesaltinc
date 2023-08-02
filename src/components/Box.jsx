import React  from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/images/earth.jpg";

function Box() {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[10, 1200, 600]}>
      <sphereGeometry attach="geometry" args={[3, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export default Box;
