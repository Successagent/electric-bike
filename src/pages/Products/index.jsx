import BorderButton from "../../Components/BorderButton";
import Button from "../../Components/Button";
import PagesHero from "../../Components/PagesHero";
import Description from "../Description";
import Reviews from "../Reviews";

import "../Products/Products.css";

import ProductImage from "../../assets/Product-main-logo.svg";

import { FaCheck } from "react-icons/fa";
import { BsHeart, BsShare, BsStarFill } from "react-icons/bs";

const index = ({ cart, addToCart, toggleTab, tab }) => {
  return (
    <>
      <section className="products-page">
        <PagesHero />
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
                <div className="red"></div>
              </div>
              <div>
                <div className="green"></div>
              </div>
              <div>
                <div className="yellow"></div>
              </div>
            </div>
            <div className="flex interation">
              <p>-</p>
              <p>{cart.length}</p>
              <p>+</p>
            </div>
            <div className="flex products-review-btns">
              <BorderButton
                icon={<BsHeart></BsHeart>}
                title="Add to Favorite"
              />
              <Button eventFunction={addToCart} title="Add to Cart" />
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
          {tab == 1 ? (
            <button id="1" className="btn" onClick={toggleTab}>
              Description
            </button>
          ) : (
            <button id="1" className="btn gray-btn" onClick={toggleTab}>
              Description
            </button>
          )}
          {tab == 1 ? (
            <button id="2" className="btn gray-btn" onClick={toggleTab}>
              Customers Review
            </button>
          ) : (
            <button id="2" className="btn" onClick={toggleTab}>
              Customers Review
            </button>
          )}
        </div>
        {tab == 1 ? <Description /> : <Reviews />}
        <div className="seller-sec"></div>
      </section>
    </>
  );
};

export default index;
