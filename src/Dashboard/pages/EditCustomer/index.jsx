import "../EditCustomer/EditCustomer.css";
import NewCustomer from "../NewCustomer";

const index = ({
  visibility,
  toggleActive,
  toggleDashboardVisibility,
  active,
}) => {
  return (
    <div>
      <NewCustomer
        visibility={visibility}
        toggleActive={toggleActive}
        active={active}
        toggleDashboardVisibility={toggleDashboardVisibility}
      />
    </div>
  );
};

export default index;
