import "../List/List.css";
import { BsStarFill, BsHeart } from "react-icons/bs";

import ListLogo from "../../assets/list-img.png";

const index = ({ cardThree, addToCart, addToFavorite }) => {
  return (
    <div className="list">
      {cardThree.map((product, idx) => {
        return (
          <div key={idx}>
            <div className="list-item-one">
              <img src={product.src} alt={product.name} />
            </div>
            <div className="list-item-two">
              <h3 className="h3">{product.name}</h3>
              <p className="p">{product.ptext}</p>
              <div className="flex">
                <p className="p">
                  <BsStarFill className="bsStar"></BsStarFill> 5/5
                </p>
                <p className="p">12 Reviews</p>
              </div>
              <h2 className="h2">N{product.price}</h2>
            </div>
            <div className="list-item-three">
              <BsHeart onClick={() => addToFavorite(product)}></BsHeart>
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
