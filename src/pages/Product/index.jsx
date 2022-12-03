import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import CardThree from "../../Components/CardThree";
import Button from "../../Components/Button";
import BorderButton from "../../Components/BorderButton";

import "../Product/Product.css";

import Brand from "../../assets/element-3.png";
import BrandTwo from "../../assets/element-4.png";
import StopCircle from "../../assets/stop-circle.png";
import Sort from "../../assets/sort.png";
import Money from "../../assets/money.png";
import MotorBike from "../../assets/tabler_motorbike.png";
import Skate from "../../assets/icons8-skateboard.png";
import Scooter from "../../assets/icons8-gyroscooter.png";
import ArrowRight from "../../assets/arrow-right.png";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

const index = ({ toggleVisible }) => {
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
            <p className="p text">Min</p>
            <div className="input-con min">
              <p className="p">N | </p>
              <p className="p">100,000</p>
            </div>
            <p className="p text">Max</p>
            <div className="input-con max">
              <p className="p">N | </p>
              <p className="p">100,000</p>
            </div>
          </div>
        </div>
        <div className="product-section-two-item-two">
          <form className="search-form">
            <div>
              <input type="text" placeholder="Search" />
              <Button icon={<FaSearch></FaSearch>} />
            </div>
          </form>
          <div className="vert-roll">
            <Button title="All" />
            <BorderButton
              title="Electric Bike"
              icon={<img src={MotorBike} />}
            />
            <BorderButton
              title="Electric Scooter"
              icon={<img src={Scooter} />}
            />
            <BorderButton
              title="Electric Skateboard"
              icon={<img src={Skate} />}
            />
            <img src={ArrowRight} alt="" />
          </div>
          <p className="p">Item 1 - 6 of 22 </p>
          <CardThree
            h3="Foldable E-Scooter"
            p="N 1, 150, 000"
            toggleVisible={toggleVisible}
          />
          <CardThree
            h3="Foldable E-Scooter"
            p="N 1, 150, 000"
            oggleVisible={toggleVisible}
          />
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
