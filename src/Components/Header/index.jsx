import Button from "../Button";
import GrayButton from "../GrayButton";

import { FaSearch, FaTimes } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

import "../Header/Header.css";

import headerLogo from "../../assets/HeaderLogo.png";
import searchLogo from "../../assets/search-normal.png";
import cartLogo from "../../assets/cart.png";
import profileLogo from "../../assets/profile.png";
import heartLogo from "../../assets/heart.png";
import MenuLogo from "../../assets/menu.svg";
import MobileProfileLogo from "../../assets/mobile-profile.png";
import MobileHeartLogo from "../../assets/mobile-heart.png";
import close from "../../assets/Button.png";
import MobileInstaLogo from "../../assets/mobile-insta.png";
import MobileTwitterLogo from "../../assets/mobile-twit.png";
import MobileFaceLogo from "../../assets/mobile-face.png";
import ProductImage from "../../assets/Product-main-logo.svg";
import CardOneLogo from "../../assets/card-one.png";

import { Link } from "react-router-dom";

const index = ({
  carts,
  cart,
  visible,
  formVisible,
  toggleVisible,
  setCarts,
  toggleFavorite,
  setToggleFavorite,
  productVisible,
  setProductVisible,
  removeFromCart,
  favorite,
  addToCart,
  getTotalPrice,
  increamentQuantity,
  decreamentQuantity,
  setVisible,
}) => {
  let totalPrice = 0;
  const toggleProductVisible = () => {
    return productVisible == true
      ? setProductVisible(false)
      : setProductVisible(true);
  };
  return (
    <>
      <header>
        <section className="show-products" data-visible={productVisible}>
          <Link
            to="/product"
            style={{ color: "black" }}
            onClick={toggleProductVisible}
          >
            <div className="all-product-con">
              <img src={ProductImage} alt="" />
              <h3 className="h3">Ride the world with us</h3>
            </div>
          </Link>
          <Link
            to="/product"
            style={{ color: "black" }}
            onClick={toggleProductVisible}
          >
            <div className="all-product-con">
              <img src={ProductImage} alt="" />
              <h3 className="h3">Ride the world with us</h3>
            </div>
          </Link>
          <Link
            to="/product"
            style={{ color: "black" }}
            onClick={toggleProductVisible}
          >
            <div className="all-product-con">
              <img src={ProductImage} alt="" />
              <h3 className="h3">Ride the world with us</h3>
            </div>
          </Link>
          <Link
            to="/product"
            style={{ color: "black" }}
            onClick={toggleProductVisible}
          >
            <div className="all-product-con">
              <img src={CardOneLogo} alt="" />
              <h3 className="h3">Ride the world with us</h3>
            </div>
          </Link>
        </section>
        <div className="menu">
          <img
            onClick={toggleVisible}
            className="close"
            src={MenuLogo}
            alt=""
          />
        </div>
        <div className="header-logo-con">
          <img src={headerLogo} alt="header-logo" />
        </div>
        <div className="mobile-cart-con">
          <img
            src={searchLogo}
            alt=""
            className="search"
            onClick={toggleVisible}
          />
        </div>
        <div className="mobile-cart-con cart-logo">
          <p className="mobile-cart-val">{cart.length}</p>
          <img src={cartLogo} alt="" className="cart" onClick={toggleVisible} />
        </div>
        <ul className="mobile-list" data-visible={visible}>
          <div className="close-icon">
            <img src={close} className="close" alt="" onClick={toggleVisible} />
          </div>
          <li
            onClick={() =>
              visible == true ? setVisible(false) : setVisible(false)
            }
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li
            onClick={() =>
              visible == true ? setVisible(false) : setVisible(false)
            }
          >
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li
            onClick={(e) => {
              toggleVisible(e);
              if (visible == true) {
                setVisible(false);
              } else {
                setVisible(true);
              }
            }}
            className="product"
            style={{
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Products
          </li>
          <li
            onClick={() =>
              visible == true ? setVisible(false) : setVisible(false)
            }
          >
            <Link
              to="/deals"
              style={{ color: "black", textDecoration: "none" }}
            >
              Deals
            </Link>
          </li>
          <li
            onClick={() =>
              visible == true ? setVisible(false) : setVisible(false)
            }
          >
            <Link
              to="/support"
              style={{ color: "black", textDecoration: "none" }}
            >
              Support
            </Link>
          </li>

          <li style={{ color: "black", textDecoration: "none" }}>Favourite</li>
          <div
            className="flex"
            onClick={() =>
              visible == true ? setVisible(false) : setVisible(false)
            }
          >
            <img src={MobileProfileLogo} alt="" />
            <li>
              <Link
                to="/blog"
                style={{ color: "black", textDecoration: "none" }}
              >
                My Account
              </Link>
            </li>
          </div>
          <p className="p">electricbikelagos@gmail.com</p>
          <p className="p">+234 232 4564 286</p>
          <section>
            <img src={MobileFaceLogo} alt="" />
            <img src={MobileInstaLogo} alt="" />
            <img src={MobileTwitterLogo} alt="" />
          </section>
        </ul>
        <ul className="header-list">
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li
            onClick={toggleVisible}
            className="product"
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Products
          </li>
          <li>
            <Link
              to="/deals"
              style={{ color: "white", textDecoration: "none" }}
            >
              Deals
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              style={{ color: "white", textDecoration: "none" }}
            >
              Support
            </Link>
          </li>
        </ul>
        <ul className="header-icons-con">
          <img
            src={searchLogo}
            alt=""
            className="search"
            onClick={toggleVisible}
          />

          <p className="p cart-p">{cart.length}</p>
          <img
            src={heartLogo}
            alt=""
            onClick={toggleVisible}
            className="favorite"
          />
          <p className="p favorite-p">{favorite.length}</p>
          <img src={profileLogo} alt="" />
          <img src={cartLogo} alt="" className="cart" onClick={toggleVisible} />
        </ul>
      </header>
      <form className="header-form" data-visible={formVisible}>
        <div>
          <input type="text" placeholder="Search" />
          <Button icon={<FaSearch></FaSearch>} />
        </div>
      </form>
      <div className="carts" data-visible={carts}>
        <div
          onClick={toggleVisible}
          className="cart"
          data-visible={carts}
        ></div>
        <div className="main-cart" data-visible={carts}>
          <div className="main-cart-header">
            <h3 className="h3">Shopping Cart ({cart.length})</h3>
            <button
              className="cart-remove-btn"
              onClick={() => (carts == true ? setCarts(false) : setCarts(true))}
            >
              <FaTimes></FaTimes>
            </button>
          </div>
          {cart.map((product, idx) => {
            return (
              <div key={idx} className="main-cart-main">
                <div className="main-cart-img-con">
                  <img src={product.src} alt="" />
                </div>
                <div className="main-cart-text-con">
                  <p className="p">{product.name}</p>
                  <h3 className="h3">{product.price}</h3>
                  <div className="main-cart-header">
                    <button className="cart-btn">
                      <p
                        className="p"
                        onClick={() => decreamentQuantity(product.id)}
                      >
                        -
                      </p>
                      <p className="p">{product.quantity}</p>
                      <p
                        className="p"
                        onClick={() => increamentQuantity(product.id)}
                      >
                        +
                      </p>
                    </button>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(product)}
                    >
                      <FaTimes></FaTimes>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="main-cart-header main-cart-header-two">
            <p className="p">Subtotal</p>
            <h3 className="h3">N {getTotalPrice()}</h3>
          </div>
          <div className="main-cart-footer">
            <Link to="/checkout">
              <button
                className="btn"
                onClick={() =>
                  carts == true ? setCarts(false) : setCarts(true)
                }
              >
                <CiLock></CiLock> Proceed to Checkout
              </button>
            </Link>
            <Link to="/shopping-cart">
              <button
                className="gray-btn"
                onClick={() =>
                  carts == true ? setCarts(false) : setCarts(true)
                }
              >
                View and Edit Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cart-two" data-visi={toggleFavorite}>
        <div
          onClick={toggleVisible}
          className="favorite"
          data-visible={toggleFavorite}
        ></div>
        <div className="main-cart" data-visible={toggleFavorite}>
          <div className="main-cart-header">
            <h3 className="h3">Favorite Cart ({favorite.length})</h3>
            <button
              className="cart-remove-btn"
              onClick={() =>
                toggleFavorite == true
                  ? setToggleFavorite(false)
                  : setToggleFavorite(true)
              }
            >
              <FaTimes></FaTimes>
            </button>
          </div>
          {favorite.map((product, idx) => (
            <div key={idx} className="main-cart-main">
              <div className="main-cart-img-con">
                <img src={product.src} alt="" />
              </div>
              <div className="main-cart-text-con">
                <p className="p">{product.name}</p>
                <h3 className="h3">{product.price}</h3>
                <div className="main-cart-header">
                  <button className="btn" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                  <button className="cart-remove-btn">
                    <FaTimes></FaTimes>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="main-cart-header main-cart-header-two">
            <p className="p">Subtotal</p>
            <h3 className="h3">N 3,200,000</h3>
          </div>
          <div className="main-cart-footer">
            <Link to="/checkout">
              <button
                className="btn"
                onClick={() =>
                  toggleFavorite == true
                    ? setToggleFavorite(false)
                    : setToggleFavorite(true)
                }
              >
                <CiLock></CiLock> Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
