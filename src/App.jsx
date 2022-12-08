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
  Checkout,
  ShoppingCart,
} from "../src/pages";
import Order from "./pages/Order";

import "./App.css";

function App() {
  const [carts, setCarts] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);

  const toggleVisible = (e) => {
    switch (e.target.className) {
      case "cart":
        setCarts(!carts);
        break;
      case "search":
        setFormVisible(!formVisible);
        break;
      case "close":
        setVisible(!visible);
        break;
      case "favorite":
        setToggleFavorite(!toggleFavorite);
        break;
      case "product":
        setProductVisible(!productVisible);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const addToFavorite = (product) => {
    setFavorite([...favorite, { ...product }]);
  };

  const removeFromCart = (removeProduct) => {
    return setCart(cart.filter((product) => product !== removeProduct));
  };

  return (
    <>
      <Header
        carts={carts}
        cart={cart}
        addToCart={addToCart}
        favorite={favorite}
        visible={visible}
        productVisible={productVisible}
        formVisible={formVisible}
        toggleVisible={toggleVisible}
        setCarts={setCarts}
        setToggleFavorite={setToggleFavorite}
        toggleFavorite={toggleFavorite}
        setProductVisible={setProductVisible}
        removeFromCart={removeFromCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              active={active}
              toggleVisible={toggleVisible}
              cart={cart}
              addToFavorite={addToFavorite}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products"
          element={<Products cart={cart} addToCart={addToCart} />}
        />
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
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route
          path="/shopping-cart"
          element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
