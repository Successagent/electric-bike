import "../Section/Section.css";
import Button from "../Button";
import CardTwo from "../../Components/CardTwo";
import CardThree from "../../Components/CardThree";

import BorderButton from "../BorderButton";

const index = ({ card, headerTwo, button, text }) => {
  return (
    <div
      className="product-section"
      style={{
        height: `${card < 2 ? "" : ""}`,
      }}
    >
      <h2
        className="h2"
        style={{ display: `${headerTwo == "" ? "none" : "block"}` }}
      >
        {headerTwo}
      </h2>
      <p
        className="p"
        style={{
          marginBottom: `${card < 2 ? "40px" : ""}`,
          display: `${text == "" ? "none" : "block"}`,
        }}
      >
        {text}
      </p>
      {card && button == 2 ? (
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
            <CardThree
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
