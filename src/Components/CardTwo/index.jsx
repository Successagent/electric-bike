import "../CardTwo/CardTwo.css";
import { BsStarFill, BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Button from "../Button";
import { useState } from "react";

const index = ({ h2, h3, p }) => {
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
          <FaHeart></FaHeart>
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
          <FaHeart></FaHeart>
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
          <FaHeart></FaHeart>
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
          <FaHeart></FaHeart>
          <Button title="Add to cart" icon={<BsCart3></BsCart3>} />
        </section>
      </div>
    </div>
  );
};

export default index;
