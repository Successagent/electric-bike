import "../EditCustomer/EditCustomer.css";
import NewCustomer from "../NewCustomer";

const index = ({
  dashVisibility,
  toggleActive,
  toggleDashboardVisibility,
  dashActive,
}) => {
  return (
    <div>
      <NewCustomer
        dashVisibility={dashVisibility}
        toggleActive={toggleActive}
        dashActive={dashActive}
        toggleDashboardVisibility={toggleDashboardVisibility}
      />
    </div>
  );
};

export default index;
