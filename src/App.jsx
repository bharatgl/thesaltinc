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

        <Routes>
          <Route path="/" element={<PersonHome />} />
          <Route path="/person_list" element={<PersonList />} />
          <Route path="/person_add" element={<PersonAdd />} />
          <Route path="/edit/:id" element={<PersonUpdate />} />
        </Routes>

    </>
  );
};

export default App;
