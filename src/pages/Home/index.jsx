import Header from '../../Components/Header'
import CardOne from '../../Components/CardOne'
import Section from '../../Components/Section'
import FeatureCard from '../../Components/FeatureCard'

import '../Home/Home.css'
import FeatureLogo from '../../assets/FeatureLogo.png'
import Vector from '../../assets/Vector.png'
import MotorBike from '../../assets/tabler_motorbike.png'
import Skate from '../../assets/icons8-skateboard.png'
import Cooter from '../../assets/icons8-gyroscooter.png'
import Global from '../../assets/global.png'
import Message from '../../assets/message-question.png'
import footerlogo from '../../assets/footerlogo.png'
import Visa from '../../assets/image210.svg'
import Master from '../../assets/image212.svg'
import Security from '../../assets/security-safe.png'
import Button from '../../Components/Button'
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg'
import { CiTwitter } from 'react-icons/ci'
import { AiOutlineGlobal } from 'react-icons/ai'

const index = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="home-hero">
          <ul className="home-hero-social-link">
            <div className="solial-icon-con active">
              <CgFacebook></CgFacebook>
            </div>
            <div className="solial-icon-con">
              <CgFacebook></CgFacebook>
            </div>
            <div className="solial-icon-con">
              <CgFacebook></CgFacebook>
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
        <FeatureCard />
        <div className="feature-footer">
          <div>
            <AiOutlineGlobal style={{ fontSize: '80px' }}></AiOutlineGlobal>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna
            </p>
          </div>
          <div>
            <AiOutlineGlobal style={{ fontSize: '80px' }}></AiOutlineGlobal>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna
            </p>
          </div>
          <div>
            <AiOutlineGlobal style={{ fontSize: '80px' }}></AiOutlineGlobal>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna
            </p>
          </div>
        </div>
        <CardOne />
        <Section card="2" />
        <Button title="VIEW ALL PRODUCTS" />
        <Section card="1" />
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
              Copyright @ 2022. All rights reserved. Developed by{' '}
              <span>Astrosoft</span>
            </p>
          </section>
        </footer>
      </div>
    </>
  )
}

export default index
