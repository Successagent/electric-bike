import "../Message/Message.css";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

const index = ({
  visibility,
  toggleActive,
  toggleDashboardVisibility,
  active,
}) => {
  return (
    <div className="dashboard">
      <Navigation
        visibility={visibility}
        toggleActive={toggleActive}
        active={active}
      />
      <div className="dashboard-body">
        <DashHeader
          toggleDashboardVisibility={toggleDashboardVisibility}
          active={active}
        />
        <section className=""></section>
      </div>
    </div>
  );
};

export default index;
