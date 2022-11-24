import "../FeatureCard/FeatureCard.css";

import BorderButton from "../../Components/BorderButton";
import Button from "../../Components/Button";

import MotorBike from "../../assets/tabler_motorbike.png";
import faqLogo from "../../assets/faq.png";
import Skate from "../../assets/icons8-skateboard.png";
import Scooter from "../../assets/icons8-gyroscooter.png";
import FeatureLogo from "../../assets/FeatureLogo.png";
import Vector from "../../assets/Vector.png";

import { CgArrowRight } from "react-icons/cg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const index = ({ reverse, faq }) => {
  const [active, setActive] = useState(1);

  const toggleVisibility = (id) => {
    if (id == 1) {
      setActive(1);
    } else if (id == 2) {
      setActive(2);
    } else if (id == 3) {
      setActive(3);
    } else if (id == 4) {
      setActive(4);
    }
    console.log(id);
  };
  return (
    <div
      className="home-feature-section"
      style={{ flexDirection: `${reverse == "reverse" ? "row-reverse" : ""}` }}
    >
      {faq == "faq" ? (
        <>
          <div>
            <h2 className="h2">Check out Frequently Answered Questions</h2>
            <p className="p">
              Our Team is available 24/7 for all your questions and equiries
            </p>
            <img src={faqLogo} alt="" />
          </div>
          <div>
            <div>
              <div className="flex">
                <h3 className="h3">Do you Ship outside Lagos?</h3>
                <div
                  className={`icon-con ${active == 1 ? "active-bg" : "'"}`}
                  id="1"
                  onClick={(e) => toggleVisibility(e.target.id)}
                >
                  {active == 1 ? (
                    <FaAngleUp id="1"></FaAngleUp>
                  ) : (
                    <FaAngleDown id="1"></FaAngleDown>
                  )}
                </div>
              </div>
              <p className={`p ${active === 1 ? "active" : ""}`} id="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent non ac augue interdum vel non enim enim neque. Aliquet
                elementum sit dictum eget porta. Nulla phasellus malesuada
                feugiat vitae, a tristique eu.
              </p>
            </div>
            <div>
              <div className="flex">
                <h3 className="h3">Do you Ship outside Lagos?</h3>
                <div
                  className={`icon-con ${active == 2 ? "active-bg" : "'"}`}
                  id="2"
                  onClick={(e) => toggleVisibility(e.target.id)}
                >
                  {active == 2 ? (
                    <FaAngleUp id="2"></FaAngleUp>
                  ) : (
                    <FaAngleDown id="2"></FaAngleDown>
                  )}
                </div>
              </div>
              <p className={`p ${active === 2 ? "active" : ""}`} id="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent non ac augue interdum vel non enim enim neque. Aliquet
                elementum sit dictum eget porta. Nulla phasellus malesuada
                feugiat vitae, a tristique eu.
              </p>
            </div>
            <div>
              <div className="flex">
                <h3 className="h3">Do you Ship outside Lagos?</h3>
                <div
                  className={`icon-con ${active == 3 ? "active-bg" : "'"}`}
                  id="3"
                  onClick={(e) => toggleVisibility(e.target.id)}
                >
                  {active == 3 ? (
                    <FaAngleUp id="3"></FaAngleUp>
                  ) : (
                    <FaAngleDown id="3"></FaAngleDown>
                  )}
                </div>
              </div>
              <p className={`p ${active === 3 ? "active" : ""}`} id="3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent non ac augue interdum vel non enim enim neque. Aliquet
                elementum sit dictum eget porta. Nulla phasellus malesuada
                feugiat vitae, a tristique eu.
              </p>
            </div>
            <div>
              <div className="flex">
                <h3 className="h3">Do you Ship outside Lagos?</h3>
                <div
                  className={`icon-con ${active == 4 ? "active-bg" : "'"}`}
                  id="4"
                  onClick={(e) => toggleVisibility(e.target.id)}
                >
                  {active == 4 ? (
                    <FaAngleUp id="4"></FaAngleUp>
                  ) : (
                    <FaAngleDown id="4"></FaAngleDown>
                  )}
                </div>
              </div>
              <p className={`p ${active === 4 ? "active" : ""}`} id="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent non ac augue interdum vel non enim enim neque. Aliquet
                elementum sit dictum eget porta. Nulla phasellus malesuada
                feugiat vitae, a tristique eu.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="feature-item-one">
            <h3 className="h3">Feature 1</h3>
            {reverse == "reverse" ? (
              <h2 className="h2">
                Outstanding Products With Exceptional Brands
              </h2>
            ) : (
              <h1 className="h1">Explore and Ride the World with Us</h1>
            )}
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quisque dignissim tellus, tempus nec donec aliquam enim, posuere.
              Massa volutpat amet odio urna vel aliquet. Cras vitae malesuada
              tortor enim dictum a quam consectetur tristique.
            </p>
            {reverse == "reverse" ? (
              ""
            ) : (
              <div className="grid">
                <BorderButton
                  icon={<img src={MotorBike} alt="" />}
                  title="Electric Bikes"
                />
                <BorderButton
                  icon={<img src={Vector} alt="" />}
                  title="Electric Hoverboards"
                />
                <BorderButton
                  icon={<img src={Scooter} alt="" />}
                  title="Electric Scooters"
                />
                <BorderButton
                  icon={<img src={Skate} alt="" />}
                  title="Electric Skateboard"
                />
              </div>
            )}
            <Button
              title="Start Shopping"
              icon={<CgArrowRight></CgArrowRight>}
            />
          </div>
          <div>
            <div>
              <img src={FeatureLogo} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default index;
