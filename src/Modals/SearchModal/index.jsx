import "../SearchModal/SearchModal.css";
import Brand from "../../assets/element-3.png";
import BrandTwo from "../../assets/element-4.png";

const index = () => {
  return (
    <section className="search-modal">
      <div className="search-modal-header">
        <div>
          <img src={Brand} alt="" />
        </div>
        <img src={BrandTwo} alt="" />
      </div>
    </section>
  );
};

export default index;
