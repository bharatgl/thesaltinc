import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonList from "./components/PersonList";
import PersonHome from "./components/PersonHome";
import PersonAdd from "./components/PersonAdd";
import PersonUpdate from "./components/PersonUpdate";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonHome />} />
          <Route path="/person-list" element={<PersonList />} />
          <Route path="/person-add" element={<PersonAdd />} />
          <Route path="/edit/:id" element={<PersonUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
