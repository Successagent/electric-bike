import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import FeatureCard from "../../Components/FeatureCard";
import Button from "../../Components/Button";

import sms from "../../assets/sms.png";
import location from "../../assets/location.png";
import clock from "../../assets/clock.png";
import call from "../../assets/call.png";
import map from "../../assets/map.png";

import "../Support/Support.css";

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
  return (
    <>
      <Header
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
      <section className="support-page">
        <PagesHero />
        <PageIndication page="Support" other="Support" />
        <section className="support-form-section">
          <h2 className="h2">Get in Touch</h2>
          <div className="input-con">
            <form className="review-form">
              <p className="p">Name</p>
              <input type="text" />
              <p className="p">Email Address</p>
              <input type="text" />
              <p className="p">Support</p>
              <input type="text" />
              <p className="p">Message</p>
              <textarea></textarea>
              <Button title="Submit" />
            </form>
            <div className="support-contact">
              <h3 className="h3">Support Contact</h3>
              <div className="flex">
                <img src={call} alt="" />
                <h3 className="h3">Product</h3>
              </div>
              <p className="p">
                Mobile: <span>07088613251</span>
              </p>
              <p className="p">
                Mobile: <span>07088613251</span>
              </p>
              <div className="flex">
                <img src={sms} alt="" />
                <h3 className="h3">Email</h3>
              </div>
              <p className="p">electricbikelagos@gmail.com</p>
              <div className="flex">
                <img src={location} alt="" />
                <h3 className="h3">Location</h3>
              </div>
              <p className="p">lorem ipsumlorem ipsum sdfsdfsd sdsdfdf sdfsd</p>
              <div className="flex">
                <img src={clock} alt="" />
                <h3 className="h3">Open Hours</h3>
              </div>
              <p className="p">
                Mon - Fri: <span>9AM - 5PM</span>
              </p>
            </div>
          </div>
        </section>
        <div className="faq-section">
          <FeatureCard faq="faq" />
        </div>
        <div className="map-section">
          <img src={map} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
