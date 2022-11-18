import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import "../Deals/Deals.css";

import { GrNext, GrPrevious } from "react-icons/gr";

const index = () => {
  return (
    <>
      <Header />
      <section className="deals-page">
        <PagesHero />
        <PageIndication other="Deals" />
       
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
      </section>
      <Footer />
    </>
  );
};

export default index;
