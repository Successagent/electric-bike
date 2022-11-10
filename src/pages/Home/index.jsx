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
import Button from '../../Components/Button'
import { CgFacebook } from 'react-icons/cg'
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
        <div className='faq-section'>
          <FeatureCard faq="faq" />
        </div>
      </div>
    </>
  )
}

export default index
