import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";

import "../PrivacyAndPolicy/PrivacyAndPolicy.css";

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
      <PageHero />
      <div className="condition">
        <PageIndication page="Privacy and Policy" other="Privacy and Policy" />
      </div>
      <section className="terms">
        <div className="terms-hero">
          <h3 className="h3">WHAT PERSONAL DATA WE COLLECT AND WHY</h3>
          <div>
            <div>
              <h3 className="h3">Item one</h3>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                amet diam a blandit ultricies quis. Enim consequat neque vitae
                cras. Enim quam tellus consequat non facilisis dui. Vitae
                viverra ut ut turpis vulputate cras. In imperdiet mi, id diam
                egestas blandit arcu, cras nunc. Pretium ipsum neque nullam sit
                auctor bibendum id. Amet ultrices sed lectus phasellus. Non et,
                scelerisque vestibulum velit, velit. Volutpat volutpat ut
                pretium vivamus consectetur viverra molestie aliquet pharetra.
                Non tincidunt amet netus proin id. In tellus, feugiat quam
                suspendisse. Eu phasellus sollicitudin lacus quis malesuada enim
                tellus tincidunt.
              </p>
            </div>
            <div>
              <h3 className="h3">Item one</h3>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                amet diam a blandit ultricies quis. Enim consequat neque vitae
                cras. Enim quam tellus consequat non facilisis dui. Vitae
                viverra ut ut turpis vulputate cras. In imperdiet mi, id diam
                egestas blandit arcu, cras nunc. Pretium ipsum neque nullam sit
                auctor bibendum id. Amet ultrices sed lectus phasellus. Non et,
                scelerisque vestibulum velit, velit. Volutpat volutpat ut
                pretium vivamus consectetur viverra molestie aliquet pharetra.
                Non tincidunt amet netus proin id. In tellus, feugiat quam
                suspendisse. Eu phasellus sollicitudin lacus quis malesuada enim
                tellus tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
