import "../OrderDetails/OrderDetails.css";
import "../Orders/Orders.css";

import DashBtn from "../../Components/DashBtn";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import Bike from "../../../assets/bike.svg";

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
          <div className="orders-section order-details">
            <div className="orders-details orders-header flex">
              <h3 className="h3">Order: 2342346</h3>
              <div className="flex">
                <DashBtn title="Refund" />
                <DashBtn title="New Order" icon={<p>+</p>} />
              </div>
            </div>
            <div className="order-details-two">
              <div className="order-details-item-one orders-stats">
                <h3 className="h3">Orders</h3>
                <div className="order-details-table">
                  <div className="order-details-table-header flex">
                    <div className="order-details-table-header-one">
                      <p className="p">Name</p>
                    </div>
                    <div className="order-details-table-header-two">
                      <p className="p">Status</p>
                    </div>
                  </div>
                  <div className="order-details-table-main flex">
                    <div>
                      <p className="p">23423465</p>
                    </div>
                    <div>
                      <button className="status-btn">Pending</button>
                    </div>
                  </div>
                  <div className="order-details-table-main flex">
                    <div>
                      <p className="p">23423465</p>
                    </div>
                    <div>
                      <button className="status-btn">Pending</button>
                    </div>
                  </div>
                  <div className="order-details-table-main flex">
                    <div>
                      <p className="p">23423465</p>
                    </div>
                    <div>
                      <button className="status-btn">Pending</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-details-item-two">
                <div className="order-details-item-two-sect-one orders-stats">
                  <h3 className="h3">Order Details</h3>
                  <p className="p">ORDER NO</p>
                  <p className="p p-bg">12345678</p>
                  <p className="p">Tracking Code</p>
                  <p className="p p-bg">12345678</p>
                  <p className="p">Customer</p>
                  <p className="p p-bg">12345678</p>
                  <p className="p">Note</p>
                  <p className="p p-bg">
                    Lorem ipsum dolor sit amet consectetur. Urna pellentesque
                    dolor aenean dictum scelerisque accumsan amet. Platea
                    feugiat at imperdiet mus nam. Turpis lobortis erat fames
                    libero tortor quam mus volutpat suscipit. Sem tristique arcu
                    amet odio non sit at. Malesuada dictumst nulla egestas{" "}
                  </p>
                  <p className="p">Order Date</p>
                  <p className="p p-bg">20 May 2020</p>
                </div>
                <div className="order-details-item-two-sect-one orders-stats">
                  <h3 className="h3">Cart Details</h3>
                  <div className="order-details-table div order-details-div">
                    <div className="order-details-table-header flex">
                      <div className="order-details-table-header-one">
                        <p className="p">Product</p>
                      </div>
                      <div className="order-details-table-header-two">
                        <p className="p">Quantity</p>
                      </div>
                      <div className="order-details-table-header-two">
                        <p className="p">Unit Price</p>
                      </div>
                    </div>
                    <div className="order-details-table-main flex">
                      <div className="flex">
                        <img src={Bike} alt="" />
                        <p className="p">Fat Tire Matt</p>
                      </div>
                      <div className="left">
                        <p className="p">1</p>
                      </div>
                      <div className="right">
                        <p className="p">1,150,000</p>
                      </div>
                    </div>
                    <div className="order-details-table-main flex">
                      <div className="flex">
                        <img src={Bike} alt="" />
                        <p className="p">Fat Tire Matt</p>
                      </div>
                      <div className="left">
                        <p className="p">1</p>
                      </div>
                      <div className="right">
                        <p className="p">1,150,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-details-item-two-sect-one orders-stats">
                  <h3 className="h3">History</h3>
                  <p className="p">Order Completed on</p>
                  <p className="p p-bg">08:30PM 28 May 2021</p>
                  <p className="p">Shipping Details</p>
                  <div className="p-bg">
                    <p className="p">
                      <span>Address:</span> No 26 Azikoro Goodnews Street,
                      Yenagoa Bayelsa State
                    </p>
                    <p className="p">
                      <span>Email:</span> Electric-bike@gmail.com
                    </p>
                    <p className="p">
                      <span>Phone Number:</span> 07088613649
                    </p>
                  </div>
                  <p className="p">Billing Details</p>
                  <div className="p-bg">
                    <p className="p">
                      <span>Name:</span> Success Lionel
                    </p>
                    <p className="p">
                      <span>Payment Type:</span> Transfer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
