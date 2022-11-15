import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import { Home, Products, About, Deals, Support } from "../src/pages";
import Header from "../src/Components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
