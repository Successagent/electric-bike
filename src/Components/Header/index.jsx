import "../Header/Header.css";
import headerLogo from "../../assets/HeaderLogo.png";
import searchLogo from "../../assets/search-normal.png";
import cartLogo from "../../assets/cart.png";
import profileLogo from "../../assets/profile.png";
import heartLogo from "../../assets/heart.png";
import { useState } from "react";
import MenuLogo from "../../assets/menu.svg";
import MobileHeaderLogo from "../../assets/mobile-header.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <header>
        <div className="header-logo-con">
          <img src={headerLogo} alt="header-logo" />
        </div>
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
      <div className="mobile-header">
        <div className="menu">
          <img src={MenuLogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default index;
