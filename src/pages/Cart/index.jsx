import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PagesHero from "../../Components/PagesHero";
import Button from "../../Components/Button";
import GrayButton from "../../Components/GrayButton";
import ShoppingCart from "../ShoppingCart";
import Checkout from "../Checkout";

import "../Cart/Cart.css";
import { useState } from "react";

const index = () => {
  const [cartValue, setCartValue] = useState(3);

  const [active, setActive] = useState("shopping");
  const toggleActive = (e) => {
    if (e.target.id == 1) {
      setActive("shopping");
    } else if (e.target.id == 2) {
      setActive("checkout");
    }
  };
  return (
    <>
      <Header />
      <section className="cart-page">
        <PagesHero />
        <div className="cart-hero">
          <Button title="SHOPPING CART" btn={toggleActive}></Button>
          <GrayButton title="CHECKOUT" btn={toggleActive}></GrayButton>
        </div>
        {active == "shopping" ? <ShoppingCart /> : <Checkout />}
      </section>
      <Footer />
    </>
  );
};

export default index;
