import { Link } from "react-router-dom";

import "../NewCustomer/NewCustomer.css";
import "../Orders/Orders.css";
import "../OrderDetails/OrderDetails.css";

import DashBtn from "../../Components/DashBtn";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import Prof from "../../assets/prof.svg";
import Hidden from "../../assets/hidden.svg";

const index = ({
  dashVisibility,
  toggleActive,
  dashActive,
  toggleDashboardVisibility,
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
        <div className="orders-section order-details">
          <div className="orders-details orders-header flex">
            <h3 className="h3">New Customer</h3>
            <div className="flex">
              <Link to="/customers">
                <DashBtn title="Cancel" />
              </Link>
              <DashBtn title="Create" />
            </div>
          </div>
          <div className="order-details-two">
            <div className="order-details-item-one orders-stats">
              <h3 className="h3">Customers</h3>
              <div className="order-details-table">
                <div className="order-details-table-header flex">
                  <div className="order-details-table-header-one">
                    <p className="p">Name</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Prof} alt="" />
                    <p className="p">killan James</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Prof} alt="" />
                    <p className="p">killan James</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Prof} alt="" />
                    <p className="p">killan James</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-details-item-two">
              <form>
                <div className="order-details-item-two-sect-one orders-stats">
                  <h3 className="h3">Customer Details</h3>
                  <div className="flex order-details-div">
                    <div className="flex-one">
                      <p className="p">First Name</p>
                      <input className="p-bg" type="text" defaultValue="Same" />
                      <p className="p">Phone Number</p>
                      <input
                        className="p-bg"
                        type="phone"
                        defaultValue="09161363443"
                      />
                    </div>
                    <div className="flex-two">
                      <p className="p">Last Name</p>
                      <input
                        type="text"
                        className="p-bg"
                        defaultValue="James"
                      />
                      <p className="p">Email</p>
                      <input
                        type="email"
                        className="p-bg"
                        defaultValue="Electricbike@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-details-item-two-sect-one orders-stats"></div>
                <div className="order-details-item-two-sect-one orders-stats">
                  <h3 className="h3">Address</h3>
                  <p className="p">Default Address</p>
                  <input
                    type="text"
                    defaultValue="No 33 Azikolro Yenagoa, Bayelsa"
                    className="p-bg"
                  />
                  <p className="p">Address 2</p>
                  <input
                    type="text"
                    className="p-bg"
                    defaultValue="No 33 Azikolro Yenagoa, Bayelsa"
                  />
                  <DashBtn title="Add New Address" />
                </div>
                <div className="order-details-item-two-sect-one orders-stats">
                  <h3 className="h3">Security</h3>
                  <p className="p">Password</p>
                  <div className="password-flex">
                    <input
                      type="password"
                      defaultValue="233244324234434"
                      className="p"
                    />
                    <img src={Hidden} alt="" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
