import "../DashBoard/DashBoard.css";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import Sales from "../../assets/sale.png";
import Customer from "../../assets/order.svg";
import Vector from "../../assets/Icon.svg";
import Product from "../../assets/product.svg";
import Discount from "../../assets/discount.svg";

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
        <section className="main-dashboard">
          <div className="main-dashboard-one">
            <div className="dashboard-header-items dashboard-sales">
              <img src={Sales} alt="" />
              <h3 className="h3">Total Sales</h3>
              <p className="p">+50% Sales</p>
              <p className="h1">N 17m</p>
            </div>
            <div className="dashboard-header-items dashboard-details">
              <img src={Customer} alt="" />
              <h3 className="h3">Total Orders</h3>
              <p className="p">-12% Orders</p>
              <p className="h1">63</p>
            </div>
            <div className="dashboard-header-items dashboard-customers">
              <img src={Vector} alt="" />
              <h3 className="h3">Customers</h3>
              <p className="p">+48% News</p>
              <p className="h1">56</p>
            </div>
            <div className="dashboard-header-items dashboard-products">
              <img src={Product} alt="" />
              <h3 className="h3">Products</h3>
              <p className="p">+45% New Products</p>
              <p className="h1">28</p>
            </div>
            <div className="dashboard-header-items dashboard-discount">
              <img src={Discount} alt="" />
              <h3 className="h3">Discounts</h3>
              <p className="p">Available</p>
              <p className="h1">3</p>
            </div>
            <div className="dashboard-header-items dashboard-card"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
