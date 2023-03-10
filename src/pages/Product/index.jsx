import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import CardThree from "../../Components/CardThree";
import List from "../../Components/List";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../Product/Product.css";

import Brand from "../../assets/element-3.png";
import BrandTwo from "../../assets/element-4.png";

import { BsArrowDown } from "react-icons/bs";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const index = ({
  toggleVisible,
  style,
  toggleStyle,
  addToFavorite,
  cart,
  carts,
  addToCart,
  favorite,
  visible,
  productVisible,
  formVisible,
  toggleFavorite,
  setCarts,
  setToggleFavorite,
  setProductVisible,
  setVisible,
  increamentQuantity,
  decreamentQuantity,
  removeFromCart,
  getQuantityTotal,
  getTotalPrice,
  cardThree,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState("Price");

  const toggleDropDown = (e) => {
    if (e.target.value == "Price") {
      setActive("Price");
    } else if (e.target.id == "Newest") {
      setActive("Newest");
    } else if (e.target.id == "Popular") {
      setActive("Popular");
    }

    setDropDown(!dropDown);
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
        getTotalPrice={getTotalPrice}
        increamentQuantity={increamentQuantity}
        decreamentQuantity={decreamentQuantity}
        setVisible={setVisible}
        getQuantityTotal={getQuantityTotal}
        cardThree={cardThree}
      />
      <section className="product-page">
        <PagesHero />
        <PageIndication page="Product" other="All" />
        <section className="product-first-section">
          <div className="product-hero">
            <h3 className="h3">Experience Luxury and Comfort</h3>
            <p className="p">Ride the World with Us</p>
          </div>
        </section>
        <section className="product-section-two">
          <div className="product-section-two-item-one">
            <div className="product-section-two-item-one-header">
              <div>
                <img
                  className={` ${style == "grid" ? "diff" : ""}`}
                  id="1"
                  onClick={toggleStyle}
                  src={Brand}
                  alt=""
                />
                <img
                  src={BrandTwo}
                  className={` ${style == "list" ? "diff" : ""}`}
                  id="2"
                  onClick={toggleStyle}
                  alt=""
                />
              </div>
              <p className="p">Item 1 - 6 of 22 </p>
            </div>
            <div>
              <h3 className="h3">Sort</h3>
              <div className="input-con">
                <p className="p">{active}</p>
                {dropDown == false ? (
                  <TfiAngleDown
                    style={{ cursor: "pointer" }}
                    onClick={toggleDropDown}
                  ></TfiAngleDown>
                ) : (
                  <TfiAngleUp
                    style={{ cursor: "pointer" }}
                    onClick={toggleDropDown}
                  ></TfiAngleUp>
                )}
                <p className="p">|</p>
                <BsArrowDown></BsArrowDown>
              </div>
              <div className="dropdown" data-visible={dropDown}>
                <div className="flex">
                  <p className="p" id="Price" onClick={toggleDropDown}>
                    Price
                  </p>
                  {active == "Price" ? <AiOutlineCheck></AiOutlineCheck> : ""}
                </div>
                <div className="flex">
                  <p className="p" id="Newest" onClick={toggleDropDown}>
                    Newest
                  </p>
                  {active == "Newest" ? <AiOutlineCheck></AiOutlineCheck> : ""}
                </div>
                <div className="flex">
                  <p className="p" id="Popular" onClick={toggleDropDown}>
                    Popular
                  </p>
                  {active == "Popular" ? <AiOutlineCheck></AiOutlineCheck> : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="product-section-two-item-two">
            {style == "list" ? (
              <div>
                <List
                  toggleVisible={toggleVisible}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                  cardThree={cardThree}
                />
              </div>
            ) : (
              <>
                <CardThree
                  toggleVisible={toggleVisible}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                  cardThree={cardThree}
                />
                <CardThree
                  toggleVisible={toggleVisible}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                  cardThree={cardThree}
                />
              </>
            )}
            <section className="review-section-two">
              <section className="flex">
                <div className="red flex">
                  <GrPrevious style={{ color: "yellow" }} />
                </div>
                <div className="flex">1</div>
                <p className="p">of</p>
                <p className="p">4</p>
                <div className="red flex">
                  <GrNext style={{ color: "yellow" }} />
                </div>
              </section>
            </section>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default index;
