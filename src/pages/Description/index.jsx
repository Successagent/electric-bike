
import "../Description/Description.css";

import DescriptionLogo from "../../assets/description-logo.png";

const index = () => {
  return (
    <section className="description-sec">
      <div className="flex description-main-sec">
        <div>
          <h3 className="h3">New and Improved</h3>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
            integer amet, est, nibh morbi. Sed vitae tortor, dui mauris
            hendrerit feugiat eget.
          </p>
        </div>
        <div>
          <img src={DescriptionLogo} alt="" />
        </div>
      </div>
      <div className="description-main-two flex">
        <h3 className="h3">Desctiption headline</h3>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
          integer amet, est, nibh morbi. Sed vitae tortor, dui mauris hendrerit
          feugiat eget.
        </p>
      </div>
      <div className="description-main-two flex">
        <h3 className="h3">Desctiption headline</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
        </ul>
      </div>
      <div className="description-main-two flex">
        <h3 className="h3">Desctiption headline</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
        </ul>
      </div>
      <div className="description-main-two flex">
        <h3 className="h3">Desctiption headline</h3>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
          integer amet, est, nibh morbi. Sed vitae tortor, dui mauris hendrerit
          feugiat eget.
        </p>
      </div>
    </section>
  );
};

export default index;
