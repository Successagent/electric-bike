import "../EditProduct/EditProduct.css";

import NewProduct from "../NewProduct";

const index = ({
  dashVisibility,
  toggleActive,
  toggleDashboardVisibility,
  dashActive,
}) => {
  return (
    <NewProduct
      dashVisibility={dashVisibility}
      toggleActive={toggleActive}
      dashActive={dashActive}
      toggleDashboardVisibility={toggleDashboardVisibility}
    />
  );
};

export default index;
