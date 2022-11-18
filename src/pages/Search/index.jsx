import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PagesHero from "../../Components/PagesHero";
import SearchModal from "../../Modals/SearchModal";


import "../Search/Search.css";

const index = () => {
  return (
    <>
      <Header />
      <PagesHero />
      <section className="search-page">
        <section className="products-review-sec">
          <section className="products-review-item-one">
            <ul className="flex">
              <li>Home</li>
              <li>Showing Search Result on: "Fat Tire Matt"</li>
            </ul>
          </section>
        </section>
        <section className="search-main-sect">
          <div>
            <SearchModal />
          </div>
          <div className="section-comp-two">
            
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default index;
