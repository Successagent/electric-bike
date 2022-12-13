import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import CartLogo from "./assets/cart-table-logo.png";
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
  const [style, setStyle] = useState(false);
  const [cardTwo, setCardTwo] = useState([
    {
      name: `Foldable E-Scooter`,
      price: 500,
      ptext: `luxuory electronic scooter`,
      src: `${CartLogo}`,
      id: 1,
    },
    {
      name: `Foldable E-Skakeboard`,
      price: 600,
      ptext: `luxuory electronic scooter`,
      src: `${CartLogo}`,
      id: 2,
    },
    {
      name: `Foldable E-Hoverboard`,
      price: 700,
      ptext: `luxuory electronic scooter`,
      src: `${CartLogo}`,
      id: 3,
    },
    {
      name: `Foldable E-Bikes`,
      price: 800,
      ptext: `luxuory electronic scooter`,
      src: `${CartLogo}`,
      id: 4,
    },
  ]);

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
    let newCart = [...cart];

    //The statement here check and returns the item which name is the same as product name

    let productInCart = newCart.find((item) => product.name === item.name);

    if (productInCart) {
      productInCart.quantity++;
    } else {
      productInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(productInCart);
    }
    setCart(newCart);
  };

  const addToFavorite = (product) => {
    setFavorite([...favorite, { ...product }]);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, { price, quantity }) => accumulator + price * quantity,
      0
    );
  };

  const getQuantityTotal = () => {
    return cart.reduce(
      (accumulator, { quantity }) => accumulator + quantity,
      0
    );
  };

  const increamentQuantity = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreamentQuantity = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    console.log(cart);
  };

  const removeFromCart = (removeProduct) => {
    return setCart(cart.filter((product) => product !== removeProduct));
    console.log(cart);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
        getTotalPrice={getTotalPrice}
        increamentQuantity={increamentQuantity}
        decreamentQuantity={decreamentQuantity}
        setVisible={setVisible}
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
              cardTwo={cardTwo}
              getTotalPrice={getTotalPrice}
              increamentQuantity={increamentQuantity}
            />
          }
        />
        <Route
          path="/products"
          element={<Products cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/product"
          element={<Product toggleVisible={toggleVisible} style={style} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/deals"
          element={
            <Deals
              addToCart={addToCart}
              addToFavorite={addToFavorite}
              cardTwo={cardTwo}
              getTotalPrice={getTotalPrice}
            />
          }
        />
        <Route path="/support" element={<Support />} />
        <Route path="/search" element={<Search />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} getTotalPrice={getTotalPrice} />}
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cart={cart}
              removeFromCart={removeFromCart}
              getTotalPrice={getTotalPrice}
              increamentQuantity={increamentQuantity}
              decreamentQuantity={decreamentQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
