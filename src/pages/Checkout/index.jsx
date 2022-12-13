import CheckoutForm from "../CheckoutForm";
import Button from "../../Components/Button";
import PagesHero from "../../Components/PagesHero";

import "../Checkout/Checkout.css";

import { FaMoneyBill } from "react-icons/fa";

const index = ({ cart, getTotalPrice }) => {
  return (
    <section className="checkout-page">
      <div className="compelete-payment">
        <div></div>
      </div>
      <PagesHero />

      <section className="checkout-section">
        <div>
          <CheckoutForm />
        </div>
        <div className="checkout-second-child">
          <h3 className="h3">Your Order</h3>
          <div className="checkout-orders-sect">
            <div className="checkout-orders-sect-header">
              <div className="">
                <h3 className="h3">Products</h3>
              </div>
              <div className="">
                <h3 className="h3">Total</h3>
              </div>
            </div>
            {cart.map((product, idx) => (
              <div key={idx} className="checkout-orders-sect-main">
                <div className="checkout-main-item-one">
                  <img src={product.src} alt={product.name} />
                  <p className="p">
                    {product.name} X {product.quantity}
                  </p>
                </div>
                <div className="checkout-main-item-two">
                  <p className="p">{product.price}</p>
                </div>
              </div>
            ))}

            <div className="checkout-orders-sect-footer">
              <div className="checkout-orders-sect-footer-item-one">
                <p className="p">Subtotal</p>
              </div>
              <div className="checkout-orders-sect-footer-item-two">
                <h3 className="h3">N {getTotalPrice()}</h3>
              </div>
            </div>
            <div className="checkout-orders-sect-footer" id="footer-2">
              <div className="checkout-orders-sect-footer-item-one">
                <p className="p">Shipping</p>
              </div>
              <div className="checkout-orders-sect-footer-item-two">
                <h3 className="h3">N 15, 000</h3>
              </div>
            </div>
            <div className="checkout-orders-sect-footer" id="footer-3">
              <div className="checkout-orders-sect-footer-item-one">
                <p className="p">Total</p>
              </div>
              <div className="checkout-orders-sect-footer-item-two">
                <h3 className="h3">N {getTotalPrice()}</h3>
              </div>
            </div>
          </div>
          <p className="p">
            Your Personal details will be used to complete this order. By
            completeing this purchase, you agree with the terms and conditions
          </p>
          <Button icon={<FaMoneyBill></FaMoneyBill>} title="Complete Payment" />
        </div>
      </section>
    </section>
  );
};

export default index;
