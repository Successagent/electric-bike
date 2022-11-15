import Global from "../../assets/global.png";

const index = () => {
  return (
    <section>
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
    </section>
  );
};

export default index;
