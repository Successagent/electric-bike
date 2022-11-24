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
 
  return (
    <>
      
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
