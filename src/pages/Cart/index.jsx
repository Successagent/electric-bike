import PagesHero from "../../Components/PagesHero";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ShoppingCart from "../ShoppingCart";
import Checkout from "../Checkout";

import "../Cart/Cart.css";

const index = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="cart-page">
        <PagesHero />
        <div className="cart-hero">
          <button className="btn">SHOPPING CART</button>
          <button className="gray-btn btn">CHECKOUT</button>
        </div>
        {/* {activeComponent == "shopping" ? <ShoppingCart /> : <Checkout />} */}
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default index;
