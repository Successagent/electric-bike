import Button from "../Button";

import footerlogo from "../../assets/footerlogo.png";
import Visa from "../../assets/image210.svg";
import Master from "../../assets/image212.svg";

import { CiTwitter } from "react-icons/ci";
import { CgFacebook, CgInstagram } from "react-icons/cg";

import "../Footer/Footer.css";

const index = () => {
  return (
    <footer className="home-footer-section">
      <section className="home-footer-header">
        <div>
          <h3 className="h3">New to Our Website?</h3>
          <p className="p">Get latest Update on new Products and Deals</p>
        </div>
        <form className="home-footer-form">
          <div>
            <input type="text" placeholder="Email" />
            <Button title="Subscribe" />
          </div>
        </form>
      </section>
      <section className="home-footer-main">
        <div>
          <img src={footerlogo} alt="" />
          <h3 className="h3">Lagos</h3>
          <p className="p">All our products are checked befor shipment</p>
          <div className="flex">
            <img src={Visa} alt="" />
            <img src={Master} alt="" />
          </div>
        </div>
        <ul>
          <h3 className="h3">Quick Links</h3>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
        </ul>
        <ul>
          <h3 className="h3">Quick Links</h3>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
        </ul>
        <ul>
          <h3 className="h3">Quick Links</h3>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
          <p className="p">About</p>
        </ul>
      </section>
      <section className="home-footer-footer">
        <div className="hr"></div>
        <div className="flex">
          <div>
            <CgFacebook />
          </div>
          <div>
            <CgInstagram />
          </div>
          <div>
            <CiTwitter />
          </div>
        </div>
        <p className="p">
          Copyright @ 2022. All rights reserved. Developed by
          <span>Astrosoft</span>
        </p>
      </section>
    </footer>
  );
};

export default index;
