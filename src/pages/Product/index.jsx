import PagesHero from "../../Components/PagesHero";
import PageIndication from "../../Components/PageIndication";

import "../Product/Product.css";

const index = () => {
  return (
    <div className="product-page">
      <PagesHero />
      <PageIndication page="Product" other="All" />
    </div>
  );
};

export default index;
