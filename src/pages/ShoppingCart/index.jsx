import GrayButton from "../../Components/GrayButton";
import Button from "../../Components/Button";
import PagesHero from "../../Components/PagesHero";

import { CgArrowLeft, CgSync, CgLock } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const index = ({ cart, removeFromCart }) => {
  return (
    <>
      <section className="shop-cart">
        <PagesHero />
        <div className="cart-main-section">
          <h3 className="h3">Shopping Cart ({cart.length})</h3>
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
            {cart.map((product, idx) => (
              <div key={idx} className="cart-table-header">
                <div className="cart-table-header-first-child">
                  <img src={product.src} alt={product.name} />
                  <p className="p">{product.name}</p>
                </div>
                <div className="cart-table-header-secd-child">
                  <p className="p">{product.price}</p>
                  <button className="cart-btn">
                    <p className="p">-</p>
                    <p className="p">0</p>
                    <p className="p">+</p>
                  </button>
                  <p className="p">{product.price}</p>
                  <button
                    className="cart-remove-btn"
                    onClick={() => removeFromCart(product)}
                  >
                    <FaTimes></FaTimes>
                  </button>
                </div>
              </div>
            ))}
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
          <Link to="/checkout">
            <Button icon={<CgLock></CgLock>} title="Proceed to Checkout" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default index;
