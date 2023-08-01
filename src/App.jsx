import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonList from "./components/PersonList";
import PersonHome from "./components/PersonHome";
import PersonAdd from "./components/PersonAdd";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonHome />} />
          <Route path="/person-list" element={<PersonList />} />
          <Route path="/person-add" element={<PersonAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
