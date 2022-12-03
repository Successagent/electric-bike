import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  Home,
  Products,
  About,
  Deals,
  Support,
  Search,
  TermsAndConditions,
  PrivacyAndPolicy,
  Cart,
  Product,
} from "../src/pages";
import Order from "./pages/Order";

import "./App.css";

function App() {
  const [cart, setCart] = useState(false);
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [addFavorite, setAddFavorite] = useState(1);

  const toggleVisible = (e) => {
    switch (e.target.className) {
      case "cart":
        setCart(!cart);
        break;
      case "search":
        setFormVisible(!formVisible);
        break;
      case "close":
        setVisible(!visible);
        break;
      case "favorite":
        setFavorite(!favorite);
        break;
      case "addfavorite":
      case "product":
        setProductVisible(!productVisible);
    }
    console.log(visible);
  };

  return (
    <>
      <Header
        cart={cart}
        visible={visible}
        productVisible={productVisible}
        formVisible={formVisible}
        toggleVisible={toggleVisible}
        setCart={setCart}
        setFavorite={setFavorite}
        favorite={favorite}
        setProductVisible={setProductVisible}
      />
      <Routes>
        <Route
          path="/"
          element={<Home active={active} toggleVisible={toggleVisible} />}
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product"
          element={<Product toggleVisible={toggleVisible} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/support" element={<Support />} />
        <Route path="/search" element={<Search />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
