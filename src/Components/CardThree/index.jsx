import "../CardThree/CardThree.css";

import { BsStarFill, BsHeart, BsCart3 } from "react-icons/bs";

import { Link } from "react-router-dom";

const index = ({ cardThree, addToCart, addToFavorite }) => {
  return (
    <div className="card-three">
      {cardThree.map((card, idx) => {
        return (
          <div key={idx}>
            <Link to="/products">
              <div className="bg-img"></div>
            </Link>
            <section>
              <BsHeart
                onClick={() => addToFavorite(card)}
                style={{ cursor: "pointer" }}
              ></BsHeart>
              <BsCart3
                onClick={() => addToCart(card)}
                className="favorite"
                style={{ cursor: "pointer" }}
              ></BsCart3>
            </section>
            <h3 className="h3">{card.name}</h3>
            <div className="flex">
              <p className="p">
                <BsStarFill className="bsStar"></BsStarFill>
                5/5
              </p>
              <p className="p">12 Reviews</p>
            </div>
            <p className="p">{card.ptext}</p>
            <h2 className="h2">{card.price}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default index;
