import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  About,
  Deals,
  Support,
  Search,
  TermsAndConditions,
  PrivacyAndPolicy,
} from "../src/pages";

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
        <Route path="/search" element={<Search />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
      </Routes>
    </>
  );
}

export default App;
