import "../About/About.css";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FeatureCard from "../../Components/FeatureCard";

import Global from "../../assets/global.png";

const index = () => {
  return (
    <>
      <Header />
      <section className="about-page">
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
        <section className="home-feature-sect">
          <FeatureCard></FeatureCard>
        </section>
        <div className="feature-card-two">
          <FeatureCard reverse="reverse" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
