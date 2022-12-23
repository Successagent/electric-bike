import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PagesHero from "../../Components/PagesHero";
import CardTwo from "../../Components/CardTwo";
import SearchModal from "../../Modals/SearchModal";

import "../Search/Search.css";

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
      <PagesHero />
      <section className="search-page">
        <section className="products-review-sec">
          <section className="products-review-item-one">
            <ul className="flex">
              <li>Home</li>
              <li>Showing Search Result on: "Fat Tire Matt"</li>
            </ul>
          </section>
        </section>
        <section className="search-main-sect">
          <div>
            <SearchModal />
          </div>
          <div className="section-comp-two">
            <CardTwo cardTwo={cardThree} />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default index;
