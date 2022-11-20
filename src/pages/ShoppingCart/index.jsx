import React, { useState } from "react";

import GrayButton from "../../Components/GrayButton";
import Button from "../../Components/Button";

import { CgArrowLeft, CgSync, CgLock } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

import CartIcon from "../../assets/cart-table-logo.png";

const index = () => {
  const [cartValue, setCartValue] = useState(3);
  return (
    <>
      <div className="cart-main-section">
        <h3 className="h3">Shopping Cart ({cartValue})</h3>
        <div className="cart-table">
          <div className="cart-table-header">
            <div className="cart-table-header-first-child">
              <h3 className="h3">Products</h3>
            </div>
            <div className="cart-table-header-secd-child">
              <h3 className="h3">Unit Price</h3>
              <h3 className="h3">Quantity</h3>
              <h3 className="h3">Total</h3>
              <h3 className="h3">Remove</h3>
            </div>
          </div>
          <div className="cart-table-header">
            <div className="cart-table-header-first-child">
              <img src={CartIcon} alt="" />
              <p className="p">Foldable E-Scooter</p>
            </div>
            <div className="cart-table-header-secd-child">
              <p className="p">1500.00</p>
              <button className="cart-btn">
                <p className="p">-</p>
                <p className="p">0</p>
                <p className="p">+</p>
              </button>
              <p className="p">N 1,150.00</p>
              <button className="cart-remove-btn">
                <FaTimes></FaTimes>
              </button>
            </div>
          </div>
          <div className="cart-table-header">
            <div className="cart-table-header-first-child">
              <img src={CartIcon} alt="" />
              <p className="p">Foldable E-Scooter</p>
            </div>
            <div className="cart-table-header-secd-child">
              <p className="p">1500.00</p>
              <button className="cart-btn">
                <p className="p">-</p>
                <p className="p">0</p>
                <p className="p">+</p>
              </button>
              <p className="p">N 1,150.00</p>
              <button className="cart-remove-btn">
                <FaTimes></FaTimes>
              </button>
            </div>
          </div>
          <div className="cart-table-header">
            <div className="cart-table-header-first-child">
              <img src={CartIcon} alt="" />
              <p className="p">Foldable E-Scooter</p>
            </div>
            <div className="cart-table-header-secd-child">
              <p className="p">1500.00</p>
              <button className="cart-btn">
                <p className="p">-</p>
                <p className="p">0</p>
                <p className="p">+</p>
              </button>
              <p className="p">N 1,150.00</p>
              <button className="cart-remove-btn">
                <FaTimes></FaTimes>
              </button>
            </div>
          </div>
          <div className="cart-table-header">
            <div className="cart-table-header-first-child">
              <img src={CartIcon} alt="" />
              <p className="p">Foldable E-Scooter</p>
            </div>
            <div className="cart-table-header-secd-child">
              <p className="p">1500.00</p>
              <button className="cart-btn">
                <p className="p">-</p>
                <p className="p">0</p>
                <p className="p">+</p>
              </button>
              <p className="p">N 1,150.00</p>
              <button className="cart-remove-btn">
                <FaTimes></FaTimes>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-footer">
        <GrayButton
          icon={<CgArrowLeft></CgArrowLeft>}
          title="Go back to Shopping"
        />
        <GrayButton icon={<CgSync></CgSync>} title="update cart" />
      </div>
      <div className="cart-cal">
        <h3 className="h3">Cart Total</h3>
        <div className="flex">
          <p className="p">Subtotal</p>
          <h3 className="h3">3,200.00</h3>
        </div>
        <Button icon={<CgLock></CgLock>} title="Proceed to Checkout" />
      </div>
    </>
  );
};

export default index;
