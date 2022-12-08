import { useState } from "react";

import "../CardTwo/CardTwo.css";

import { BsStarFill, BsCart3 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import CartLogo from "../../assets/cart-table-logo.png";

const index = ({ h2, h3, p, addToCart, addToFavorite }) => {
  const [cartFavorite, setCartFavorite] = useState(false);

  const [cardTwo, setCardTwo] = useState([
    {
      name: `${h3}`,
      price: `${h2}`,
      ptext: `${p}`,
      src: `${CartLogo}`,
      id: 1,
      qtny: 1,
    },
    {
      name: `${h3}`,
      price: `${h2}`,
      ptext: `${p}`,
      src: `${CartLogo}`,
      id: 2,
      qtny: 1,
    },
    {
      name: `${h3}`,
      price: `${h2}`,
      ptext: `${p}`,
      src: `${CartLogo}`,
      id: 3,
      qtny: 1,
    },
    {
      name: `${h3}`,
      price: `${h2}`,
      ptext: `${p}`,
      src: `${CartLogo}`,
      id: 4,
      qtny: 1,
    },
  ]);

  const toggleCartFavorite = (id) => {
    setCartFavorite(!cartFavorite);
  };
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
            <h2 className="h2">{card.price}</h2>
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
