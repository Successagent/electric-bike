import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import CardThree from "../../Components/CardThree";

import "../Product/Product.css";

import Brand from "../../assets/element-3.png";
import BrandTwo from "../../assets/element-4.png";
import StopCircle from "../../assets/stop-circle.png";
import Sort from "../../assets/sort.png";
import Money from "../../assets/money.png";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";

const index = () => {
  return (
    <section className="product-page">
      <PagesHero />
      <PageIndication page="Product" other="All" />
      <section className="product-first-section">
        <div className="product-hero">
          <h3 className="h3">Experience Luxury and Comfort</h3>
          <p className="p">Ride the World with Us</p>
        </div>
      </section>
      <section className="product-section-two">
        <div className="product-section-two-item-one">
          <div className="product-section-two-item-one-header">
            <img className="diff" src={Brand} alt="" />
            <img src={BrandTwo} alt="" />
          </div>
          <div className="product-section-two-item-one-main">
            <div className="flex">
              <img src={StopCircle} alt="" />
              <h3 className="h3">Brand</h3>
            </div>
            <div className="input-con">
              <p className="p">Raswheel</p>
              <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
            </div>
            <div className="flex">
              <img src={Sort} alt="" />
              <h3 className="h3">Sort</h3>
            </div>
            <div className="input-con">
              <p className="p">A - Z</p>
              <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
            </div>
            <div className="flex">
              <img src={Money} alt="" />
              <h3 className="h3">Price (N)</h3>
            </div>
          </div>
        </div>

        <div className="product-section-two-item-two">
          <CardThree h3="Foldable E-Scooter" p="N 1, 150, 000" />
          <CardThree h3="Foldable E-Scooter" p="N 1, 150, 000" />
          <section className="review-section-two">
            <section className="flex">
              <div className="red flex">
                <GrPrevious style={{ color: "yellow" }} />
              </div>
              <div className="flex">1</div>
              <p className="p">of</p>
              <p className="p">4</p>
              <div className="red flex">
                <GrNext style={{ color: "yellow" }} />
              </div>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default index;
