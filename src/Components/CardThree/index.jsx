import "../CardThree/CardThree.css";
import { BsStarFill, BsHeart, BsCart3 } from "react-icons/bs";

const index = ({ h2, h3, p }) => {
  return (
    <div className="card-three">
      <div>
        <div className="bg-img"></div>
        <section>
          <BsHeart />
          <BsCart3 />
        </section>
        <h3 className="h3">{h3}</h3>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
      </div>
      <div>
        <div className="bg-img"></div>
        <section>
          <BsHeart />
          <BsCart3 />
        </section>
        <h3 className="h3">{h3}</h3>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
      </div>
      <div>
        <div className="bg-img"></div>
        <section>
          <BsHeart />
          <BsCart3 />
        </section>
        <h3 className="h3">{h3}</h3>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
      </div>
      <div>
        <div className="bg-img"></div>
        <section>
          <BsHeart />
          <BsCart3 />
        </section>
        <h3 className="h3">{h3}</h3>
        <div className="flex">
          <p className="p">
            <BsStarFill className="bsStar"></BsStarFill>
            5/5
          </p>
          <p className="p">12 Reviews</p>
        </div>
        <p className="p">{p}</p>
        <h2 className="h2">{h2}</h2>
      </div>
    </div>
  );
};
export default index;
