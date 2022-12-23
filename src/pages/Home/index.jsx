import CardOne from "../../Components/CardOne";
import CardThree from "../../Components/CardThree";
import CardTwo from "../../Components/CardTwo";
import CardHeader from "../../Components/CardHeader";
import Button from "../../Components/Button";
import BorderButton from "../../Components/BorderButton";
import FeatureCard from "../../Components/FeatureCard";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "../Home/Home.css";

import Global from "../../assets/global.png";
import Message from "../../assets/message-question.png";
import Security from "../../assets/security-safe.png";

import { CgFacebook, CgInstagram } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";

const index = ({
  addToCart,
  addToFavorite,
  cardTwo,
  cart,
  carts,
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
      <div className="home-page">
        <div className="home-hero">
          <ul className="home-hero-social-link">
            <div className="solial-icon-con">
              <CgFacebook></CgFacebook>
            </div>
            <div className="solial-icon-con">
              <CgInstagram></CgInstagram>
            </div>
            <div className="solial-icon-con">
              <CiTwitter></CiTwitter>
            </div>
          </ul>
          <div className="home-hero-intro">
            <h3 className="h3">Luxury Rides</h3>
            <h1 className="h1">Explore and Ride The World with Us</h1>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna vel aliquet. Cras
            </p>
            <div className="flex">
              <Button title="Learn More" />
              <Button title="Buy More" />
            </div>
          </div>
        </div>
        <section className="home-feature-sect">
          <FeatureCard />
        </section>
        <div className="feature-footer">
          <div>
            <div>
              <AiOutlineGlobal
                style={{ fontSize: "50px", fontWeight: "300" }}
              ></AiOutlineGlobal>
            </div>
            <div>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quisque dignissim tellus, tempus nec donec aliquam enim,
                posuere. Massa volutpat amet odio urna
              </p>
            </div>
          </div>
          <div>
            <div>
              <AiOutlineGlobal
                style={{ fontSize: "50px", fontWeight: "300" }}
              ></AiOutlineGlobal>
            </div>
            <div>
              <h3 className="h3">Foldable E-Scooter</h3>
              <p className="p">
                luxuory electronic scooter volutpat amet odio urna
              </p>
            </div>
          </div>
          <div>
            <div>
              <AiOutlineGlobal
                style={{ fontSize: "50px", fontWeight: "300" }}
              ></AiOutlineGlobal>
            </div>
            <div>
              <h3 className="h3">Foldable E-Scooter</h3>
              <p className="p">
                luxuory electronic scooter volutpat amet odio urna
              </p>
            </div>
          </div>
        </div>
        <CardOne />
        <div className="section-1">
          <div className="slate"></div>
          <CardHeader
            headerTwo="Feature Products"
            text="Check out what others are buying"
          />
          <div className="flex">
            <Button title="New Arrivals" />
            <Button title="Popular" />
            <BorderButton title="Recommended" />
          </div>
          <CardTwo
            addToCart={addToCart}
            addToFavorite={addToFavorite}
            cardTwo={cardTwo}
            getTotalPrice={getTotalPrice}
          />
          <CardTwo
            addToCart={addToCart}
            addToFavorite={addToFavorite}
            cardTwo={cardTwo}
            getTotalPrice={getTotalPrice}
          />
        </div>
        <Button title="VIEW ALL PRODUCTS" />
        <div className="section-comp-two">
          <CardHeader
            headerTwo="Featured Products"
            text="Check out what others are buying"
          />
          <CardThree
            cardThree={cardThree}
            addToCart={addToCart}
            addToFavorite={addToFavorite}
          />
        </div>
        <div className="feature-card-two">
          <FeatureCard reverse="reverse" />
        </div>
        <div className="faq-section">
          <FeatureCard faq="faq" />
        </div>
        <div className="order-section">
          <div>
            <img src={Message} alt="" />
            <h3 className="h3">Shipping</h3>
            <p className="p">Free shpping to all orders in Lagos</p>
          </div>
          <div>
            <img src={Global} alt="" />
            <h3 className="h3">Support</h3>
            <p className="p">Free shpping to all orders in Lagos</p>
          </div>
          <div>
            <img src={Security} alt="" />
            <h3 className="h3">Secure Payment</h3>
            <p className="p">Free shpping to all orders in Lagos</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
