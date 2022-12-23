import "../Order/Order.css";
import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

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
      <section className="order-page">
        <PagesHero />
        <div className="condition">
          <PageIndication page="Track Your Order" other="Track Your Order" />
        </div>
        <div className="order-hero-section">
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
            amet diam a blandit ultricies quis. Enim consequat neque vitae cras.
            Enim quam tellus consequat non facilisis dui. Vitae viverra ut ut
            turpis vulputate cras. In
          </p>
          <div className="tracking-form review-form">
            <h3 className="h3">Tracking Code</h3>
            <input type="text" />
            <Button title="Track" />
          </div>
          <div className="flex">
            <h3 className="h3">Tacking Information</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
              integer amet, est, nibh morbi. Sed vitae tortor, dui mauris
              hendrerit feugiat eget.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
