import { useState } from "react";

import "../CardTwo/CardTwo.css";

import { BsStarFill, BsCart3 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const index = ({ addToCart, addToFavorite, cardTwo, getTotalPrice }) => {
  const [cartFavorite, setCartFavorite] = useState(false);

  return (
    <div className="card-two">
      {cardTwo.map((card, idx) => {
        return (
          <div key={idx}>
            <div className="bg-img"></div>
            <div className="flex">
              <p className="p">
                <BsStarFill className="bsStar"></BsStarFill>
                5/5
              </p>
              <p className="p">12 Reviews</p>
            </div>
            <h3 className="h3">{card.name}</h3>
            <p className="p">{card.ptext}</p>
            <h2 className="h2">N{card.price}</h2>
            <section className="hover">
              {cartFavorite == false ? (
                <AiOutlineHeart
                  onClick={() => addToFavorite(card)}
                ></AiOutlineHeart>
              ) : (
                ""
              )}
              <button className="btn" onClick={() => addToCart(card)}>
                Add to cart <BsCart3></BsCart3>
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default index;
