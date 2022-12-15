import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

const index = ({
  visibility,
  toggleActive,
  active,
  toggleDashboardVisibility,
}) => {
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default index;

{
  /* <div className="dashboard">
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
</div>; */
}
