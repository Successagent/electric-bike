import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";

import "../Product/Product.css";

import ProductHeroLogo from "../../assets/product-hero.png";
import Brand from "../../assets/element-3.png";
import BrandTwo from "../../assets/element-4.png";

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
          <div className="product-section-item-one-main-one">
            
          </div>
        </div>
        <div className="product-section-two-item-two"></div>
      </section>
    </section>
  );
};

export default index;
