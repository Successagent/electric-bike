import "../ForgetPassword/ForgetPassWord.css";
import Header from "../../Components/Header";
import PageIndication from "../../Components/PageIndication";
import Footer from "../../Components/Footer";
import PagesHero from "../../Components/PagesHero";
import Button from "../../Components/Button";

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
      <div className="register-page">
        <PagesHero />
        <PageIndication page="Account" other="Account" />
        <div className="register-form forget-pass-form">
          <section className="support-form-section">
            <div>
              <h2 className="h2">Forget Password</h2>
              <div className="input-con">
                <form className="review-form">
                  <p className="p">
                    Forgot your password? . Enter your email address to reset
                    and we will send a reset link to your email
                  </p>
                  <p className="p">Email Address *</p>
                  <input type="email" />
                  <Button title="Reset Password" />
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
