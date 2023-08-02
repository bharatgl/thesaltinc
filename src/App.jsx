import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import PersonList from "./components/PersonList";
import PersonHome from "./components/PersonHome";
import PersonAdd from "./components/PersonAdd";
import PersonUpdate from "./components/PersonUpdate";
import { Canvas } from "@react-three/fiber";
import Wrapper from "./components/Wrapper";
import { OrbitControls } from "@react-three/drei";
import Stars from "./components/Stars";
import Earth from "./components/Earth";
import Moon from "./components/Moon";

import MoonWrapper from "./components/MoonWrapper";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PersonHome />} />
        <Route path="/person-list" element={<PersonList />} />
        <Route path="/person-add" element={<PersonAdd />} />
        <Route path="/edit/:id" element={<PersonUpdate />} />
      </Routes>

      <Wrapper>
        <Stars />
        <Canvas className="canvas">
          <ambientLight intensity={1.5} />
          <directionalLight position={[8, 10, 20]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>

       
      </Wrapper>

      <MoonWrapper>
        <Stars />
        <Canvas className="canvas__moon">
          <ambientLight intensity={1.5} />
          <directionalLight position={[8, 10, 20]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Moon />
          </Suspense>
        </Canvas>
      </MoonWrapper>
    </>
  );
};

export default App;
