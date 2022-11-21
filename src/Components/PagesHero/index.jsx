import Global from "../../assets/global.png";
import Message from "../../assets/message-question.png";
import Security from "../../assets/security-safe.png";

import "../PagesHero/PagesHero.css";

const index = () => {
  return (
    <section>
      <section className="products-hero-section">
        <div className="flex">
          <img src={Global} alt="" />
          <h3 className="h3">Shipping</h3>
        </div>
        <div className="flex">
          <img src={Message} alt="" />
          <h3 className="h3">Support</h3>
        </div>
        <div className="flex">
          <img src={Security} alt="" />
          <h3 className="h3">Secure Payment</h3>
        </div>
      </section>
    </section>
  );
};

export default index;
