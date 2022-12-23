import "../Message/Message.css";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

const index = ({
  dashVisibility,
  toggleActive,
  toggleDashboardVisibility,
  dashActive,
}) => {
  return (
    <div className="dashboard">
      <Navigation
        dashVisibility={dashVisibility}
        toggleActive={toggleActive}
        dashActive={dashActive}
      />
      <div className="dashboard-body">
        <DashHeader
          toggleDashboardVisibility={toggleDashboardVisibility}
          dashActive={dashActive}
        />
        <section className=""></section>
      </div>
    </div>
  );
};

export default index;
