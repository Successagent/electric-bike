import CheckoutForm from "../CheckoutForm";
import Button from "../../Components/Button";

import "../Checkout/Checkout.css";

import { FaMoneyBill } from "react-icons/fa";

import CartIcon from "../../assets/cart-table-logo.png";

const index = () => {
  return (
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
          <div className="checkout-orders-sect-main">
            <div className="checkout-main-item-one">
              <img src={CartIcon} alt="" />
              <p className="p">Fat Tire Matt X 1</p>
            </div>
            <div className="checkout-main-item-two">
              <p className="p">N 1,150.00</p>
            </div>
          </div>
          <div className="checkout-orders-sect-main">
            <div className="checkout-main-item-one">
              <img src={CartIcon} alt="" />
              <p className="p">Fat Tire Matt X 1</p>
            </div>
            <div className="checkout-main-item-two">
              <p className="p">N 1,150.00</p>
            </div>
          </div>
          <div className="checkout-orders-sect-footer">
            <div className="checkout-orders-sect-footer-item-one">
              <p className="p">Subtotal</p>
            </div>
            <div className="checkout-orders-sect-footer-item-two">
              <h3 className="h3">N 3, 000, 000</h3>
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
              <h3 className="h3">40000</h3>
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
  );
};

export default index;
