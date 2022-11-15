import "../About/About.css";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FeatureCard from "../../Components/FeatureCard";
import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";

import { BsStarFill } from "react-icons/bs";

import Globaltwo from "../../assets/global-two.png";
import Next from "../../assets/next.png";
import Prev from "../../assets/prev.png";
import ReviewLogo from "../../assets/reviewlogo.png";
import { useState } from "react";

const index = () => {
  const [content, setContent] = useState(1);
  const toggleContent = () => {
    if (e.target == 1) {
      setContent(1);
    } else if (e.target == 2) {
      setContent(2);
    } else if (e.target == 3) {
      setContent(3);
    } else if (e.target == 4) {
      setContent(4);
    }
  };
  return (
    <>
      <Header />
      <section className="about-page">
        <PagesHero />
        <PageIndication page="About" other="Support" />
        <section className="home-feature-sect">
          <FeatureCard></FeatureCard>
        </section>
        <section className="flex">
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
          <div>
            <img src={Globaltwo} alt="" />
            <h3 className="h3">Fast Delivery</h3>
            <p className="p">lorem ipsumlorem ipsum sdfsdfsdsdsdfdf sdfsd</p>
          </div>
        </section>
        <div className="feature-card-two">
          <FeatureCard reverse="reverse" />
        </div>
        <section className="about-footer-sect">
          <h2 className="h2">Review</h2>
          <p className="p">Check out what our customers say</p>
          <div className="about-review">
            <div className="prev">
              <img src={Prev} alt="" />
            </div>
            <div className="sqre">
              <img src={ReviewLogo} alt="" />
              <h3 className="h3">Alan Pete</h3>
              <p className="p">
                <BsStarFill className="bsStar"></BsStarFill> 5/5
              </p>
              <p className="p">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
                integer amet, est, nibh morbi. Sed vitae tortor, dui mauris”
              </p>
            </div>
            <div className="next">
              <img src={Next} alt="" />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default index;
