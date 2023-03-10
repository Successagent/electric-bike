import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import CardTwo from "../../Components/CardTwo";
import CardHeader from "../../Components/CardHeader";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "../Deals/Deals.css";

import { GrNext, GrPrevious } from "react-icons/gr";

const index = ({
  cardTwo,
  addToFavorite,
  getTotalPrice,
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
      <section className="deals-page">
        <PagesHero />
        <PageIndication other="Deals" />
        <section className="deals-hero-sect">
          <CardHeader
            headerTwo="Get best deals Available Now"
            text="Check out what others are buying"
          />
        </section>
        <section className="deals-card-section">
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
        </section>
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
      </section>
      <Footer />
    </>
  );
};

export default index;
