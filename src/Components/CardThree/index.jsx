import "../CardThree/CardThree.css";
import { BsStarFill, BsHeart, BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const index = ({ h2, h3, p, toggleVisible }) => {
  const [cardThree, setCardThree] = useState([
    {
      h3Text: `${h3}`,
      h2Text: `${h2}`,
      ptext: `${p}`,
    },
    {
      h3Text: `${h3}`,
      h2Text: `${h2}`,
      ptext: `${p}`,
    },
    {
      h3Text: `${h3}`,
      h2Text: `${h2}`,
      ptext: `${p}`,
    },
    {
      h3Text: `${h3}`,
      h2Text: `${h2}`,
      ptext: `${p}`,
    },
  ]);
  return (
    <div className="card-three">
      {cardThree.map((card, idx) => {
        return (
          <div key={idx}>
            <Link to="/products">
              <div className="bg-img"></div>
              <section>
                <BsHeart style={{ cursor: "pointer" }}></BsHeart>
                <BsCart3
                  onClick={toggleVisible}
                  className="favorite"
                  style={{ cursor: "pointer" }}
                ></BsCart3>
              </section>
              <h3 className="h3">{card.h3Text}</h3>
              <div className="flex">
                <p className="p">
                  <BsStarFill className="bsStar"></BsStarFill>
                  5/5
                </p>
                <p className="p">12 Reviews</p>
              </div>
              <p className="p">{card.ptext}</p>
              <h2 className="h2">{card.h2Text}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default index;
