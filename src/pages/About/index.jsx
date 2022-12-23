import "../About/About.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FeatureCard from "../../Components/FeatureCard";
import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";

import { BsStarFill } from "react-icons/bs";

import Globaltwo from "../../assets/global-two.png";
import Next from "../../assets/next.png";
import Prev from "../../assets/prev.png";
import ReviewLogo from "../../assets/reviewlogo.png";
import { useState } from "react";

const index = ({
  cart,
  carts,
  addToCart,
  favorite,
  visible,
  productVisible,
  formVisible,
  toggleFavorite,
  toggleVisible,
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
  const [activeImage, setActiveImage] = useState(1);

  const ChangeActive = (e) => {
    switch (e.target.className) {
      case "next":
        if (activeImage == 1) {
          setActiveImage(2);
        } else if (activeImage == 2) {
          setActiveImage(3);
        } else if (activeImage == 3) {
          setActiveImage(1);
        }
        break;
      case "prev":
        if (activeImage == 3) {
          setActiveImage(2);
        } else if (activeImage == 2) {
          setActiveImage(1);
        } else if (activeImage == 1) {
          setActiveImage(3);
        }
        break;
    }
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
      <section className="about-page">
        <PagesHero />
        <PageIndication page="About" other="Support" />
        <section className="home-feature-sect">
          <FeatureCard></FeatureCard>
        </section>
        <section className="flex">
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
        </section>
        <div className="feature-card-two">
          <FeatureCard reverse="reverse" />
        </div>
        <section className="about-footer-sect">
          <h2 className="h2">Review</h2>
          <p className="p">Check out what our customers say</p>
          <div className="about-review">
            <div className="prev">
              <img className="prev" src={Prev} alt="" onClick={ChangeActive} />
            </div>
            <div className="scroll-con">
              <div className={`sqre ${activeImage == 1 ? "active-con" : ""}`}>
                <img src={ReviewLogo} alt="" />
                <h3 className="h3">Alan Pete</h3>
                <p className="p">
                  <BsStarFill className="bsStar"></BsStarFill> 5/5
                </p>
                <p className="p">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae ultricies lorem viverra lacus in. Platea ullamcorper dui
                  mauris” scelerisque integer amet, est, nibh morbi. Sed vitae
                  tortor,
                </p>
              </div>
              <div className={`sqre ${activeImage == 2 ? "active-con" : ""}`}>
                <img src={ReviewLogo} alt="" />
                <h3 className="h3">Alan John</h3>
                <p className="p">
                  <BsStarFill className="bsStar"></BsStarFill> 5/5
                </p>
                <p className="p">
                  scelerisque integer amet, est, nibh morbi. Sed vitae tortor,
                  dui mauris” “Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vitae ultricies lorem viverra lacus in.
                  Platea ullamcorper
                </p>
              </div>
              <div className={`sqre ${activeImage == 3 ? "active-con" : ""}`}>
                <img src={ReviewLogo} alt="" />
                <h3 className="h3">Alan Sarah</h3>
                <p className="p">
                  <BsStarFill className="bsStar"></BsStarFill> 5/5
                </p>
                <p className="p">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. dui
                  mauris” Vitae ultricies lorem viverra lacus in. Platea
                  ullamcorper scelerisque integer amet, est, nibh morbi. Sed
                  vitae tortor,
                </p>
              </div>
            </div>
            <div className="next">
              <img className="next" src={Next} alt="" onClick={ChangeActive} />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default index;
