import { useState } from "react";

import "../CardTwo/CardTwo.css";

import { BsStarFill, BsCart3 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import Button from "../Button";

const index = ({ h2, h3, p }) => {
  const [cartFavorite, setCartFavorite] = useState(false);
  const [cartFavoriteActive, setCartFavoriteActive] = useState(0);

  const toggleCartFavorite = (e) => {
    if (e.target.id == 1) {
      if (cartFavoriteActive != 1) {
        setCartFavoriteActive(1);
      } else if (cartFavoriteActive == 1) {
        setCartFavoriteActive(0);
      }
    }
    setCartFavorite(!cartFavorite);

    console.log(cartFavoriteActive);
  };
  return (
    <div className="card-two">
      <div>
        <div className="bg-img"></div>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <h3 className="h3">{h3}</h3>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
        <section className="hover">
          {cartFavoriteActive == 1 ? (
            <AiFillHeart id="1" onClick={toggleCartFavorite}></AiFillHeart>
          ) : cartFavorite == false ? (
            <AiOutlineHeart
              id="1"
              onClick={toggleCartFavorite}
            ></AiOutlineHeart>
          ) : (
            <AiOutlineHeart
              id="1"
              onClick={toggleCartFavorite}
            ></AiOutlineHeart>
          )}
          <Button title="Add to cart" icon={<BsCart3></BsCart3>} />
        </section>
      </div>
      <div>
        <div className="bg-img"></div>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <h3 className="h3">{h3}</h3>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
        <section className="hover">
          {cartFavoriteActive == 2 ? (
            <AiFillHeart id="2" onClick={toggleCartFavorite}></AiFillHeart>
          ) : cartFavorite == false ? (
            <AiOutlineHeart
              id="2"
              onClick={toggleCartFavorite}
            ></AiOutlineHeart>
          ) : (
            <AiOutlineHeart id="2"></AiOutlineHeart>
          )}
          <Button title="Add to cart" icon={<BsCart3></BsCart3>} />
        </section>
      </div>
      <div>
        <div className="bg-img"></div>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <h3 className="h3">{h3}</h3>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
        <section className="hover">
          {cartFavoriteActive == 3 ? (
            <AiFillHeart id="3" onClick={toggleCartFavorite}></AiFillHeart>
          ) : cartFavorite == false ? (
            <AiOutlineHeart
              id="3"
              onClick={toggleCartFavorite}
            ></AiOutlineHeart>
          ) : (
            <AiOutlineHeart id="3"></AiOutlineHeart>
          )}
          <Button title="Add to cart" icon={<BsCart3></BsCart3>} />
        </section>
      </div>
      <div>
        <div className="bg-img"></div>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <h3 className="h3">{h3}</h3>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
        <section className="hover">
          {cartFavoriteActive == 4 ? (
            <AiFillHeart id="4" onClick={toggleCartFavorite}></AiFillHeart>
          ) : cartFavorite == false ? (
            <AiOutlineHeart
              id="4"
              onClick={toggleCartFavorite}
            ></AiOutlineHeart>
          ) : (
            <AiOutlineHeart id="4"></AiOutlineHeart>
          )}
          <Button title="Add to cart" icon={<BsCart3></BsCart3>} />
        </section>
      </div>
    </div>
  );
};

export default index;
