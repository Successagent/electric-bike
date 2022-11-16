import Button from "../Button";

import { FaSearch } from "react-icons/fa";

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

import { useState } from "react";
import { Link } from "react-router-dom";

const index = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <header>
        <div className="menu">
          <img onClick={toggleVisible} src={MenuLogo} alt="" />
        </div>
        <div className="header-logo-con">
          <img src={headerLogo} alt="header-logo" />
        </div>
        <div className="mobile-cart-con">
          <img src={cartLogo} alt="" />
        </div>
        <ul
          className={`mobile-list ${
            visible == false ? "hide-menu" : "show-menu"
          }`}
        >
          <div className="close-icon">
            <img src={close} alt="" onClick={toggleVisible} />
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
          <li>
            <Link
              to="/products"
              style={{ color: "black", textDecoration: "none" }}
            >
              Products
            </Link>
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
            <Link to="/blog" style={{ color: "black", textDecoration: "none" }}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ color: "black", textDecoration: "none" }}>
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
          <li>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              Products
            </Link>
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
          <li>
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </Link>
          </li>
        </ul>
        <ul className="header-icons-con">
          <img src={searchLogo} alt="" />
          <img src={heartLogo} alt="" />
          <img src={profileLogo} alt="" />
          <img src={cartLogo} alt="" />
        </ul>
      </header>
      <form className="header-form">
        <div>
          <input type="text" placeholder="Search" />
          <Button icon={<FaSearch></FaSearch>} />
        </div>
      </form>
    </>
  );
};

export default index;
