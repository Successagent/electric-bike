import { Link } from "react-router-dom";

import "../NewCustomer/NewCustomer.css";
import "../Orders/Orders.css";
import "../OrderDetails/OrderDetails.css";

import DashBtn from "../../Components/DashBtn";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import Prof from "../../../assets/prof.svg";
import Hidden from "../../../assets/hidden.svg";

const index = ({
  visibility,
  toggleActive,
  active,
  toggleDashboardVisibility,
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
              <div className="order-details-item-two-sect-one orders-stats">
                <h3 className="h3">Customer Details</h3>
                <div className="flex order-details-div">
                  <div className="flex-one">
                    <p className="p">First Name</p>
                    <p className="p p-bg">Kilian</p>
                    <p className="p">Phone Number</p>
                    <p className="p p-bg">09161363443</p>
                  </div>
                  <div className="flex-two">
                    <p className="p">Last Name</p>
                    <p className="p p-bg">James</p>
                    <p className="p">Email</p>
                    <p className="p p-bg">Electricbike@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="order-details-item-two-sect-one orders-stats">
                <h3 className="h3">Address</h3>
                <p className="p">Default Address</p>
                <p className="p p-bg">No 33 Azikolro Yenagoa, Bayelsa</p>
                <p className="p">Address 2</p>
                <p className="p p-bg">No 33 Azikolro Yenagoa, Bayelsa</p>
                <DashBtn title="Add New Address" />
              </div>
              <div className="order-details-item-two-sect-one orders-stats">
                <h3 className="h3">Security</h3>
                <p className="p">Password</p>
                <div className="flex p-bg">
                  <input
                    type="password"
                    value="233244324234434"
                    className="p"
                  />
                  <img src={Hidden} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
