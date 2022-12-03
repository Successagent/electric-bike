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
import CartIcon from "../../assets/cart-table-logo.png";
import ProductImage from "../../assets/Product-main-logo.svg";
import { Link } from "react-router-dom";

const index = ({
  cart,
  visible,
  formVisible,
  toggleVisible,
  setCart,
  favorite,
  setFavorite,
  productVisible,
  setProductVisible,
}) => {
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
              <h2 className="h2">All Products</h2>
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
          <img src={cartLogo} alt="" />
        </div>
        <ul className="mobile-list" data-visible={visible}>
          <div className="close-icon">
            <img src={close} className="close" alt="" onClick={toggleVisible} />
          </div>
          <li>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li
            onClick={toggleVisible}
            className="product"
            style={{
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Products
          </li>
          <li>
            <Link
              to="/deals"
              style={{ color: "black", textDecoration: "none" }}
            >
              Deals
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              style={{ color: "black", textDecoration: "none" }}
            >
              Support
            </Link>
          </li>

          <li>
            <Link
              to="/favourite"
              style={{ color: "black", textDecoration: "none" }}
            >
              Favourite
            </Link>
          </li>
          <div className="flex">
            <img src={MobileHeartLogo} alt="" />
            <li>
              <Link
                to="/blog"
                style={{ color: "black", textDecoration: "none" }}
              >
                My Account
              </Link>
            </li>
          </div>
          <div className="flex">
            <img src={MobileProfileLogo} alt="" />
            <li>
              <Link
                to="/blog"
                style={{ color: "black", textDecoration: "none" }}
              >
                Blog
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
          <img
            src={heartLogo}
            alt=""
            onClick={toggleVisible}
            className="favorite"
          />
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
      <div className="carts" data-visible={cart}>
        <div onClick={toggleVisible} className="cart" data-visible={cart}></div>
        <div className="main-cart" data-visible={cart}>
          <div className="main-cart-header">
            <h3 className="h3">Shopping Cart (3)</h3>
            <button
              className="cart-remove-btn"
              onClick={() => (cart == true ? setCart(false) : setCart(true))}
            >
              <FaTimes></FaTimes>
            </button>
          </div>
          <div className="main-cart-main">
            <div className="main-cart-img-con">
              <img src={CartIcon} alt="" />
            </div>
            <div className="main-cart-text-con">
              <p className="p">Foldable E-Scooter</p>
              <h3 className="h3">N 1, 150, 000</h3>
              <div className="main-cart-header">
                <button className="cart-btn">
                  <p className="p">-</p>
                  <p className="p">0</p>
                  <p className="p">+</p>
                </button>
                <button className="cart-remove-btn">
                  <FaTimes></FaTimes>
                </button>
              </div>
            </div>
          </div>
          <div className="main-cart-main">
            <div className="main-cart-img-con">
              <img src={CartIcon} alt="" />
            </div>
            <div className="main-cart-text-con">
              <p className="p">Foldable E-Scooter</p>
              <h3 className="h3">N 1, 150, 000</h3>
              <div className="main-cart-header">
                <button className="cart-btn">
                  <p className="p">-</p>
                  <p className="p">0</p>
                  <p className="p">+</p>
                </button>
                <button className="cart-remove-btn">
                  <FaTimes></FaTimes>
                </button>
              </div>
            </div>
          </div>
          <div className="main-cart-main">
            <div className="main-cart-img-con">
              <img src={CartIcon} alt="" />
            </div>
            <div className="main-cart-text-con">
              <p className="p">Foldable E-Scooter</p>
              <h3 className="h3">N 1, 150, 000</h3>
              <div className="main-cart-header">
                <button className="cart-btn">
                  <p className="p">-</p>
                  <p className="p">0</p>
                  <p className="p">+</p>
                </button>
                <button className="cart-remove-btn">
                  <FaTimes></FaTimes>
                </button>
              </div>
            </div>
          </div>
          <div className="main-cart-header main-cart-header-two">
            <p className="p">Subtotal</p>
            <h3 className="h3">N 3,200,000</h3>
          </div>
          <div className="main-cart-footer">
            <Button icon={<CiLock></CiLock>} title="Proceed to Checkout" />
            <GrayButton title="View and Edit Cart" />
          </div>
        </div>
      </div>
      <div className="cart-two" data-visi={favorite}>
        <div
          onClick={toggleVisible}
          className="favorite"
          data-visible={favorite}
        ></div>
        <div className="main-cart" data-visible={favorite}>
          <div className="main-cart-header">
            <h3 className="h3">Favorite Cart (3)</h3>
            <button
              className="cart-remove-btn"
              onClick={() =>
                favorite == true ? setFavorite(false) : setFavorite(true)
              }
            >
              <FaTimes></FaTimes>
            </button>
          </div>
          <div className="main-cart-main">
            <div className="main-cart-img-con">
              <img src={CartIcon} alt="" />
            </div>
            <div className="main-cart-text-con">
              <p className="p">Foldable E-Scooter</p>
              <h3 className="h3">N 1, 150, 000</h3>
              <div className="main-cart-header">
                <button className="cart-btn">
                  <p className="p">-</p>
                  <p className="p">0</p>
                  <p className="p">+</p>
                </button>
                <button className="cart-remove-btn">
                  <FaTimes></FaTimes>
                </button>
              </div>
            </div>
          </div>
          <div className="main-cart-main">
            <div className="main-cart-img-con">
              <img src={CartIcon} alt="" />
            </div>
            <div className="main-cart-text-con">
              <p className="p">Foldable E-Scooter</p>
              <h3 className="h3">N 1, 150, 000</h3>
              <div className="main-cart-header">
                <button className="cart-btn">
                  <p className="p">-</p>
                  <p className="p">0</p>
                  <p className="p">+</p>
                </button>
                <button className="cart-remove-btn">
                  <FaTimes></FaTimes>
                </button>
              </div>
            </div>
          </div>
          <div className="main-cart-main">
            <div className="main-cart-img-con">
              <img src={CartIcon} alt="" />
            </div>
            <div className="main-cart-text-con">
              <p className="p">Foldable E-Scooter</p>
              <h3 className="h3">N 1, 150, 000</h3>
              <div className="main-cart-header">
                <button className="cart-btn">
                  <p className="p">-</p>
                  <p className="p">0</p>
                  <p className="p">+</p>
                </button>
                <button className="cart-remove-btn">
                  <FaTimes></FaTimes>
                </button>
              </div>
            </div>
          </div>
          <div className="main-cart-header main-cart-header-two">
            <p className="p">Subtotal</p>
            <h3 className="h3">N 3,200,000</h3>
          </div>
          <div className="main-cart-footer">
            <Button icon={<CiLock></CiLock>} title="Proceed to Checkout" />
            <GrayButton title="View and Edit Cart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
