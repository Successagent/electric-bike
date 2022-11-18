import "../CardOne/CardOne.css";
import CardOneLogo from "../../assets/card-one.png";
import Button from "../Button";
const index = () => {
  return (
    <div className="card-one">
      <div>
        <div>
          <p className="p">Smooth</p>
          <h3 className="h3">Ride in Luxury</h3>
          <Button title="Shop now" />
        </div>
        <img src={CardOneLogo} alt="" />
      </div>
      <div>
        <div>
          <p className="p">Smooth</p>
          <h3 className="h3">Comfortable and Stylish</h3>
          <Button title="Shop now" />
        </div>
        <img src={CardOneLogo} alt="" />
      </div>
      <div>
        <div>
          <p className="p">Smooth</p>
          <h3 className="h3">Comfortable for Everyone</h3>
          <Button title="Shop now" />
        </div>
        <img src={CardOneLogo} alt="" />
      </div>
    </div>
  );
};

export default index;
