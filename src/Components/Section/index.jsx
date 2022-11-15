import "../Section/Section.css";
import Button from "../Button";
import CardTwo from "../../Components/CardTwo";

import BorderButton from "../BorderButton";

const index = ({ card, headerTwo }) => {
  return (
    <div
      className="product-section"
      style={{
        height: `${card < 2 ? "450px" : ""}`,
      }}
    >
      <h2 className="h2">{headerTwo}</h2>
      <p className="p" style={{ marginBottom: `${card < 2 ? "40px" : ""}` }}>
        Check out what others are buying
      </p>
      {card == 2 ? (
        <div className="flex">
          <Button title="New Arrivals" />
          <Button title="Popular" />
          <BorderButton title="Recommended" />
        </div>
      ) : (
        ""
      )}
      <div
        className="slate"
        style={{ display: `${card < 2 ? "none" : ""}` }}
      ></div>
      <div
        className="home-product-card"
        style={{ backgroundColor: `${card < 2 ? "white" : ""}` }}
      >
        {card == 2 ? (
          <>
            <div>
              <CardTwo
                h3="Foldable E-Scooter"
                p="Luxury electronic scooter"
                h2="N 1, 150, 000"
              />
            </div>
            <div>
              <CardTwo
                h3="Foldable E-Scooter"
                p="Luxury electronic scooter"
                h2="N 1, 150, 000"
              />
            </div>
          </>
        ) : (
          <div>
            <CardTwo
              h3="Foldable E-Scooter"
              p="Luxury electronic scooter"
              h2="N 1, 150, 000"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
