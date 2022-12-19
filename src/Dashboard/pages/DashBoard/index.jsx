import "../DashBoard/DashBoard.css";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import Sales from "../../../assets/sale.png";
import Customer from "../../../assets/order.svg";

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
        <section className="main-dashboard">
          <div className="main-dashboard-one">
            <div className="dashboard-header-items dashboard-sales">
              <img src={Sales} alt="" />
              <h3 className="h3">Total Orders</h3>
              <p className="p">-12% Orders</p>
              <p className="h1">64</p>
            </div>
            <div className="dashboard-header-items dashboard-details">
              <img src={Sales} alt="" />
              <h3 className="h3">Total Orders</h3>
              <p className="p">-12% Orders</p>
              <p className="h1">64</p>
            </div>
            <div className="dashboard-header-items dashboard-customers">
              <img src={Customer} alt="" />
              <h3 className="h3">Total Orders</h3>
              <p className="p">-12% Orders</p>
              <p className="h1">64</p>
            </div>
            <div className="dashboard-header-items dashboard-products">
              <img src={Sales} alt="" />
              <h3 className="h3">Total Orders</h3>
              <p className="p">-12% Orders</p>
              <p className="h1">64</p>
            </div>
            <div className="dashboard-header-items dashboard-discount">
              <img src={Customer} alt="" />
              <h3 className="h3">Total Orders</h3>
              <p className="p">-12% Orders</p>
              <p className="h1">64</p>
            </div>
            <div className="dashboard-header-items dashboard-card"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
