import "../EditProduct/EditProduct.css";

import NewProduct from "../NewProduct";

const index = ({
  visibility,
  toggleActive,
  toggleDashboardVisibility,
  active,
}) => {
  return (
    <NewProduct
      visibility={visibility}
      toggleActive={toggleActive}
      active={active}
      toggleDashboardVisibility={toggleDashboardVisibility}
    />
  );
};

export default index;
