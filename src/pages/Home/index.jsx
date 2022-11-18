import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CardOne from "../../Components/CardOne";
import CardThree from "../../Components/CardThree";
import CardTwo from "../../Components/CardTwo";
import CardHeader from "../../Components/CardHeader";
import Button from "../../Components/Button";
import BorderButton from "../../Components/BorderButton";
import FeatureCard from "../../Components/FeatureCard";

import "../Home/Home.css";

import Global from "../../assets/global.png";
import Message from "../../assets/message-question.png";
import Security from "../../assets/security-safe.png";

import { CgFacebook, CgInstagram } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";

const index = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="home-hero">
          <ul className="home-hero-social-link">
            <div className="solial-icon-con">
              <CgFacebook></CgFacebook>
            </div>
            <div className="solial-icon-con">
              <CgInstagram></CgInstagram>
            </div>
            <div className="solial-icon-con">
              <CiTwitter></CiTwitter>
            </div>
          </ul>
          <div className="home-hero-intro">
            <h1 className="h1">FAT TIRE MATT</h1>
            <h2 className="h2">Electronic Bike</h2>
            <div className="flex">
              <div>
                <h3 className="h3">Feature 1</h3>
                <p className="p">Description</p>
              </div>
              <div>
                <h3 className="h3">Feature 1</h3>
                <p className="p">Description</p>
              </div>
              <div>
                <h3 className="h3">Feature 1</h3>
                <p className="p">Description</p>
              </div>
            </div>
            <div className="flex">
              <Button title="Learn More" />
              <Button title="Buy More" />
            </div>
          </div>
        </div>
        <section className="home-feature-sect">
          <FeatureCard />
        </section>
        <div className="feature-footer">
          <div>
            <AiOutlineGlobal style={{ fontSize: "80px" }}></AiOutlineGlobal>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna
            </p>
          </div>
          <div>
            <AiOutlineGlobal style={{ fontSize: "80px" }}></AiOutlineGlobal>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna
            </p>
          </div>
          <div>
            <AiOutlineGlobal style={{ fontSize: "80px" }}></AiOutlineGlobal>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna
            </p>
          </div>
        </div>
        <CardOne />
        <div className="section-1">
          <CardHeader
            headerTwo="Feature Products"
            text="Check out what others are buying"
          />
          <div className="flex">
            <Button title="New Arrivals" />
            <Button title="Popular" />
            <BorderButton title="Recommended" />
          </div>
          <CardTwo
            h3="Foldable E-Scooter"
            p="luxuory electronic scooter"
            h2="N 1, 150, 000"
          />
          <CardTwo
            h3="Foldable E-Scooter"
            p="luxuory electronic scooter"
            h2="N 1, 150, 000"
          />
        </div>
        <Button title="VIEW ALL PRODUCTS" />
        <div className="section-comp-two">
          <CardHeader
            headerTwo="Featured Products"
            text="Check out what others are buying"
          />
          <CardThree
            h3="Foldable E-Scooter"
            p="luxuory electronic scooter"
            h2="N 1, 150, 000"
          />
        </div>
        <div className="feature-card-two">
          <FeatureCard reverse="reverse" />
        </div>
        <div className="faq-section">
          <FeatureCard faq="faq" />
        </div>
        <div className="order-section">
          <div>
            <img src={Message} alt="" />
            <h3 className="h3">Shipping</h3>
            <p className="p">Free shpping to all orders in Lagos</p>
          </div>
          <div>
            <img src={Message} alt="" />
            <h3 className="h3">Shipping</h3>
            <p className="p">Free shpping to all orders in Lagos</p>
          </div>
          <div>
            <img src={Message} alt="" />
            <h3 className="h3">Shipping</h3>
            <p className="p">Free shpping to all orders in Lagos</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
