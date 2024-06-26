import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./components/First";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main child={<First />} />} />
        <Route path="/add" element={<Main child={<AddStudent />} />} />
        <Route path="/view" element={<Main child={<ViewStudents />} />} />
      </Routes>
    </>
  );
}

export default App;
