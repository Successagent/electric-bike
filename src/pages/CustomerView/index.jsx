import "../CustomerView/CustomerView.css";
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
        <div className="orders-section order-details">
          <div className="orders-details orders-header flex">
            <h3 className="h3">New Customer</h3>
            <div className="flex">
              <DashBtn title="Cancel" />
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
                <div className="flex">
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
                <h3 className="h3">Orders</h3>
                <p className="p">Sorted by No</p>
                <div className="order-details-table">
                  <div className="customer-view-details-table-header p-bg order-details-table-header flex">
                    <div className="order-details-table-header-one">
                      <p className="p">Order No</p>
                    </div>
                    <div className="order-details-table-header-one">
                      <p className="p">Order Date</p>
                    </div>
                    <div className="order-details-table-header-one">
                      <p className="p">Quantity</p>
                    </div>
                    <div className="order-details-table-header-one">
                      <p className="p">Total</p>
                    </div>
                    <div className="order-details-table-header-one">
                      <p className="p">Status</p>
                    </div>
                  </div>
                  <div className="order-details-table-main customer-view-details-table-main flex">
                    <div className="flex">
                      <p className="p">23423465</p>
                    </div>
                    <div className="flex">
                      <p className="p">30 May 2021</p>
                    </div>
                    <div className="flex">
                      <p className="p">3</p>
                    </div>
                    <div className="flex">
                      <p className="p">1,1500,000</p>
                    </div>
                    <div>
                      <button className="status-btn">Pending</button>
                    </div>
                  </div>
                  <div className="order-details-table-main customer-view-details-table-main flex">
                    <div className="flex">
                      <p className="p">23423465</p>
                    </div>
                    <div className="flex">
                      <p className="p">30 May 2021</p>
                    </div>
                    <div className="flex">
                      <p className="p">3</p>
                    </div>
                    <div className="flex">
                      <p className="p">1,1500,000</p>
                    </div>
                    <div>
                      <button className="status-btn">Pending</button>
                    </div>
                  </div>
                </div>
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
