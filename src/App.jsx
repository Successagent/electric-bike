import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import ListLogo from "./assets/list-img.png";
import Watch from "./assets/watch.jfif";
import CardOneLogo from "./assets/card-one.png";
import HoverBoard from "./assets/image203.svg";

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
  Registration,
  Login,
  ForgetPassword,
  DashBoard,
  Orders,
  Customers,
  Categories,
  Message,
  Discount,
  DashboardProducts,
  Transaction,
  OrderDetails,
  NewCustomer,
  EditCustomer,
  CustomerView,
  NewProduct,
  EditProduct,
  NewCategory,
  EditCategory,
  Settings,
} from "../src/pages";
import Order from "./pages/Order";

import "./App.css";

function App() {
  const [carts, setCarts] = useState(false);
  const [val, setVal] = useState("edit");
  const [dashVisibility, setDashVisibility] = useState(false);
  const [dashActive, setDashActive] = useState("");
  const [activeComponet, setActiveComponent] = useState("shopping");
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [style, setStyle] = useState("grid");
  const [tab, setTab] = useState(1);
  const [cardTwo] = useState([
    {
      name: `Foldable E-Scooter`,
      price: 500,
      ptext: `luxuory electronic scooter`,
      src: `${ListLogo}`,
      id: 1,
    },
    {
      name: `Foldable E-Skakeboard`,
      price: 600,
      ptext: `luxuory electronic scooter`,
      src: `${HoverBoard}`,
      id: 2,
    },
    {
      name: `Foldable E-Hoverboard`,
      price: 700,
      ptext: `luxuory electronic scooter`,
      src: `${Watch}`,
      id: 3,
    },
    {
      name: `Foldable E-Bikes`,
      price: 800,
      ptext: `luxuory electronic scooter`,
      src: `${CardOneLogo}`,
      id: 4,
    },
  ]);

  const [cardThree] = useState([
    {
      name: `Foldable E-Scooter`,
      price: 500,
      ptext: `luxuory electronic scooter`,
      src: `${ListLogo}`,
      id: 1,
    },
    {
      name: `Foldable E-Skakeboard`,
      price: 600,
      ptext: `luxuory electronic scooter`,
      src: `${HoverBoard}`,
      id: 2,
    },
    {
      name: `Foldable E-Hoverboard`,
      price: 700,
      ptext: `luxuory electronic scooter`,
      src: `${Watch}`,
      id: 3,
    },
    {
      name: `Foldable E-Bikes`,
      price: 800,
      ptext: `luxuory electronic scooter`,
      src: `${CardOneLogo}`,
      id: 4,
    },
  ]);

  const navigate = () => useNavigate();

  const toggleDashboardVisibility = () => setDashVisibility(!dashVisibility);

  const toggleActive = (e) => {
    if (e.target.id == "dashboard") {
      setDashActive("dashboard");
    } else if (e.target.id == "orders") {
      setDashActive("orders");
    } else if (e.target.id == "customers") {
      setDashActive("customers");
    } else if (e.target.id == "discount") {
      setDashActive("discount");
    } else if (e.target.id == "transaction") {
      setDashActive("transaction");
    } else if (e.target.id == "categories") {
      setDashActive("categories");
    } else if (e.target.id == "products") {
      setDashActive("products");
    } else if (e.target.id == "message") {
      setDashActive("message");
    }
    console.log(e.target.id);
  };

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
        break;
    }
  };

  const addToCart = (product) => {
    let newCart = [...cart];

    // The statement here check and returns the item which name is the same as product name

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
  };

  const removeFromCart = (removeProduct) => {
    return setCart(cart.filter((product) => product !== removeProduct));
  };

  const toggleStyle = (e) => {
    if (e.target.id == 1) {
      setStyle("grid");
    } else if (e.target.id == 2) {
      setStyle("list");
    }
  };

  function toggleTab(e) {
    if (e.target.id == 2) {
      setTab(2);
    } else if (e.target.id == 1) {
      setTab(1);
    }
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              active={active}
              toggleVisible={toggleVisible}
              addToFavorite={addToFavorite}
              cardTwo={cardTwo}
              cardThree={cardThree}
              getTotalPrice={getTotalPrice}
              increamentQuantity={increamentQuantity}
              carts={carts}
              cart={cart}
              addToCart={addToCart}
              favorite={favorite}
              visible={visible}
              productVisible={productVisible}
              formVisible={formVisible}
              setCarts={setCarts}
              setToggleFavorite={setToggleFavorite}
              toggleFavorite={toggleFavorite}
              setProductVisible={setProductVisible}
              removeFromCart={removeFromCart}
              decreamentQuantity={decreamentQuantity}
              setVisible={setVisible}
              getQuantityTotal={getQuantityTotal}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              toggleTab={toggleTab}
              tab={tab}
              addToCart={addToCart}
              cardThree={cardThree}
              addToFavorite={addToFavorite}
              cardTwo={cardTwo}
              getTotalPrice={getTotalPrice}
              carts={carts}
              cart={cart}
              favorite={favorite}
              visible={visible}
              productVisible={productVisible}
              formVisible={formVisible}
              setCarts={setCarts}
              setToggleFavorite={setToggleFavorite}
              toggleFavorite={toggleFavorite}
              setProductVisible={setProductVisible}
              removeFromCart={removeFromCart}
              increamentQuantity={increamentQuantity}
              decreamentQuantity={decreamentQuantity}
              setVisible={setVisible}
              getQuantityTotal={getQuantityTotal}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              toggleVisible={toggleVisible}
              style={style}
              toggleStyle={toggleStyle}
              addToCart={addToCart}
              cardThree={cardThree}
              addToFavorite={addToFavorite}
              cardTwo={cardTwo}
              getTotalPrice={getTotalPrice}
              carts={carts}
              cart={cart}
              favorite={favorite}
              visible={visible}
              productVisible={productVisible}
              formVisible={formVisible}
              setCarts={setCarts}
              setToggleFavorite={setToggleFavorite}
              toggleFavorite={toggleFavorite}
              setProductVisible={setProductVisible}
              removeFromCart={removeFromCart}
              increamentQuantity={increamentQuantity}
              decreamentQuantity={decreamentQuantity}
              setVisible={setVisible}
              getQuantityTotal={getQuantityTotal}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/deals"
          element={
            <Deals
              addToCart={addToCart}
              addToFavorite={addToFavorite}
              cardTwo={cardTwo}
              getTotalPrice={getTotalPrice}
              carts={carts}
              cart={cart}
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
              increamentQuantity={increamentQuantity}
              decreamentQuantity={decreamentQuantity}
              setVisible={setVisible}
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/support"
          element={
            <Support
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              cart={cart}
              carts={carts}
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/terms&conditions"
          element={
            <TermsAndConditions
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/privacy&policy"
          element={
            <PrivacyAndPolicy
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
              activeComponet={activeComponet}
            />
          }
        />
        <Route
          path="/order"
          element={
            <Order
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              carts={carts}
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cart={cart}
              carts={carts}
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Registration
              cart={cart}
              carts={carts}
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              cart={cart}
              carts={carts}
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/forget-password"
          element={
            <ForgetPassword
              cart={cart}
              carts={carts}
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
              getQuantityTotal={getQuantityTotal}
              cardThree={cardThree}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashBoard
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <Orders
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/customers"
          element={
            <Customers
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <Categories
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/message"
          element={
            <Message
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/discount"
          element={
            <Discount
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/dash-products"
          element={
            <DashboardProducts
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/transaction"
          element={
            <Transaction
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/order-details"
          element={
            <OrderDetails
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/new-customer"
          element={
            <NewCustomer
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/edit-customer"
          element={
            <EditCustomer
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/view-customer"
          element={
            <CustomerView
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/new-product"
          element={
            <NewProduct
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/edit-product"
          element={
            <EditProduct
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
        <Route
          path="/new-category"
          element={
            <NewCategory
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
              val={val}
            />
          }
        />
        <Route
          path="/edit-category"
          element={
            <EditCategory
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
              val={val}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              dashActive={dashActive}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              dashVisibility={dashVisibility}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
