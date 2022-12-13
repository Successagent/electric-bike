import "../List/List.css";
import { BsStarFill, BsHeart } from "react-icons/bs";

import ListLogo from "../../assets/list-img.png";

const index = ({ h3, p, toggleVisible, h2 }) => {
  return (
    <div className="list">
      <div>
        <div className="list-item-one">
          <img src={ListLogo} alt="" />
        </div>
        <div className="list-item-two">
          <h3 className="h3">{h3}</h3>
          <p className="p">{h2}</p>
          <div className="flex">
            <p className="p">
              <BsStarFill className="bsStar"></BsStarFill>
              5/5
            </p>
            <p className="p">12 Reviews</p>
          </div>
          <h2 className="h2">{p}</h2>
        </div>
        <div className="list-item-three">
          <BsHeart></BsHeart>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
      <div>
        <div className="list-item-one">
          <img src={ListLogo} alt="" />
        </div>
        <div className="list-item-two">
          <h3 className="h3">{h3}</h3>
          <p className="p">{h2}</p>
          <div className="flex">
            <p className="p">
              <BsStarFill className="bsStar"></BsStarFill>
              5/5
            </p>
            <p className="p">12 Reviews</p>
          </div>
          <h2 className="h2">{p}</h2>
        </div>
        <div className="list-item-three">
          <BsHeart></BsHeart>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
      <div>
        <div className="list-item-one">
          <img src={ListLogo} alt="" />
        </div>
        <div className="list-item-two">
          <h3 className="h3">{h3}</h3>
          <p className="p">{h2}</p>
          <div className="flex">
            <p className="p">
              <BsStarFill className="bsStar"></BsStarFill>
              5/5
            </p>
            <p className="p">12 Reviews</p>
          </div>
          <h2 className="h2">{p}</h2>
        </div>
        <div className="list-item-three">
          <BsHeart></BsHeart>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
      <div>
        <div className="list-item-one">
          <img src={ListLogo} alt="" />
        </div>
        <div className="list-item-two">
          <h3 className="h3">{h3}</h3>
          <p className="p">{h2}</p>
          <div className="flex">
            <p className="p">
              <BsStarFill className="bsStar"></BsStarFill>
              5/5
            </p>
            <p className="p">12 Reviews</p>
          </div>
          <h2 className="h2">{p}</h2>
        </div>
        <div className="list-item-three">
          <BsHeart></BsHeart>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default index;
