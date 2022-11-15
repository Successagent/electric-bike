import { useState } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Section from "../../Components/Section";
import BorderButton from "../../Components/BorderButton";
import Button from "../../Components/Button";
import GrayButton from "../../Components/GrayButton";
import Description from "../Description";
import Reviews from "../Reviews";

import "../Products/Products.css";

import Global from "../../assets/global.png";
import ProductImage from "../../assets/Product-main-logo.svg";

import { FaCheck } from "react-icons/fa";
import { BsHeart, BsShare, BsStarFill } from "react-icons/bs";

const index = () => {
  const [tab, setTab] = useState(1);

  function toggleTab(e) {
    if (e.target.id == 2) {
      setTab(2);
    } else if (e.target.id == 1) {
      setTab(1);
    }
    console.log(tab);
  }

  return (
    <>
      <Header />
      <section className="products-page">
        <section className="products-hero-section">
          <div className="flex">
            <img src={Global} alt="" />
            <h3 className="h3">Shipping</h3>
          </div>
          <div className="flex">
            <img src={Global} alt="" />
            <h3 className="h3">Shipping</h3>
          </div>
          <div className="flex">
            <img src={Global} alt="" />
            <h3 className="h3">Shipping</h3>
          </div>
        </section>
        <section className="products-review-sec">
          <div className="products-review-item-one">
            <ul className="flex">
              <li>Home</li>
              <li>Electric Bikes</li>
              <li>Fat Tire Matt</li>
            </ul>
            <h1 className="h2">Fat Tire Matt</h1>
            <div className="flex">
              <div className="flex">
                <div className="stock-review">
                  <FaCheck className="stock-check"></FaCheck>
                </div>
                <p className="p">In stock</p>
              </div>
              <div className="flex">
                <BsShare className="stock-check bSshare"></BsShare>
                <p className="p">Share this</p>
              </div>
            </div>
            <p className="direct-p p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              neque pulvinar elit justo
            </p>
            <div className="flex">
              <div className="flex">
                <BsStarFill className="stock-check bsStar"></BsStarFill>
                <p className="p">
                  5/5 <span>12 Reviews</span>
                </p>
              </div>
              <BorderButton id="review-btn" title="Add review"></BorderButton>
            </div>
            <h2 className="h2">N 1, 500, 000</h2>
            <p className="direct-p p">Color: Black</p>
            <div className="flex color-con">
              <div className="active-color">
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
            <div className="flex interation">
              <p>-</p>
              <p>0</p>
              <p>+</p>
            </div>
            <div className="flex products-review-btns">
              <BorderButton
                icon={<BsHeart></BsHeart>}
                title="Add to Favorite"
              />
              <Button title="Add to Cart" />
            </div>
          </div>
          <div className="product-review-item-two">
            <img src={ProductImage} alt="" />
            <div className="flex select-img">
              <div className="active-img">
                <img src={ProductImage} alt="" />
              </div>
              <div>
                <img src={ProductImage} alt="" />
              </div>
              <div>
                <img src={ProductImage} alt="" />
              </div>
              <div>
                <img src={ProductImage} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="description-hero-section flex">
          <Button btn={toggleTab} title="Description"></Button>
          <GrayButton btn={toggleTab} title="Customers Review"></GrayButton>
        </div>
        {tab == 1 ? <Description /> : <Reviews />}
        <div className="seller-sec">
          <Section card="1" headerTwo="Best Seller" />
          <Section card="1" headerTwo="Recently viewed" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
