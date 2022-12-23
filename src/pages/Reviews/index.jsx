import GrayButton from "../../Components/GrayButton";

import { BsStarFill } from "react-icons/bs";
import { GrPrevious, GrNext } from "react-icons/gr";

import "../Reviews/Reviews.css";

const index = () => {
  return (
    <section className="reviews-page">
      <section className="flex">
        <section className="reviews-main-section">
          <h3 className="h3">12 Reviews</h3>
          <div className="flex">
            <BsStarFill className="bsStar"></BsStarFill>
            <div>
              <div className="sta-one"></div>
            </div>
            <p className="p">5</p>
          </div>
          <div className="flex">
            <BsStarFill className="bsStar"></BsStarFill>
            <div>
              <div className="stat-two"></div>
            </div>
            <p className="p">4</p>
          </div>
          <div className="flex">
            <BsStarFill className="bsStar"></BsStarFill>
            <div>
              <div className="stat-three"></div>
            </div>
            <p className="p">3</p>
          </div>
          <div className="flex">
            <BsStarFill className="bsStar"></BsStarFill>
            <div>
              <div className="stat-four"></div>
            </div>
            <p className="p">2</p>
          </div>
          <div className="flex">
            <BsStarFill className="bsStar"></BsStarFill>
            <div>
              <div className="stat-five"></div>
            </div>
            <p className="p">1</p>
          </div>
          <h3 className="h3">Write a Review</h3>
          <form className="review-form">
            <p className="p">Name</p>
            <input type="text" />
            <p className="p">Review</p>
            <textarea></textarea>
            <h3 className="h3">Rating Value</h3>
            <div className="flex">
              <BsStarFill className="bsStar"></BsStarFill>
              <BsStarFill className="bsStar"></BsStarFill>
              <BsStarFill className="bsStar"></BsStarFill>
              <BsStarFill className="bsStar"></BsStarFill>
              <BsStarFill className="bsStar"></BsStarFill>
            </div>
            <GrayButton title="Submit Review" />
          </form>
        </section>
        <section className="review-section-two">
          <div>
            <div className="flex">
              <h3 className="h3">Alan Pete</h3>
              <p className="p">28 Oct, 2022</p>
              <p className="p">
                <BsStarFill className="bsStar"></BsStarFill>
                4/5
              </p>
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
              integer amet, est, nibh morbi. Sed vitae tortor, dui mauris
              hendrerit feugiat eget.
            </p>
          </div>
          <div>
            <div className="flex">
              <h3 className="h3">Alan Pete</h3>
              <p className="p">28 Oct, 2022</p>
              <p className="p">
                <BsStarFill className="bsStar"></BsStarFill>
                4/5
              </p>
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
              integer amet, est, nibh morbi. Sed vitae tortor, dui mauris
              hendrerit feugiat eget.
            </p>
          </div>
          <div>
            <div className="flex">
              <h3 className="h3">Alan Pete</h3>
              <p className="p">28 Oct, 2022</p>
              <p className="p">
                <BsStarFill className="bsStar"></BsStarFill>
                4/5
              </p>
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              ultricies lorem viverra lacus in. Platea ullamcorper scelerisque
              integer amet, est, nibh morbi. Sed vitae tortor, dui mauris
              hendrerit feugiat eget.
            </p>
          </div>
          <section className="flex">
            <div className="red flex">
              <GrPrevious style={{ color: "yellow" }} />
            </div>
            <div className="flex">1</div>
            <p className="p">of</p>
            <p className="p">4</p>
            <div className="red flex">
              <GrNext style={{ color: "yellow" }} />
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default index;
