import "../Discount/Discount.css";

import DashBtn from "../../Components/DashBtn";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import { CiFilter } from "react-icons/ci";

import Select from "../../assets/select.svg";
import Export from "../../assets/export.svg";
import Import from "../../assets/import.svg";
import Action from "../../assets/action.svg";
import Search from "../../assets/search.svg";
import Edit from "../../assets/edit.svg";

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
        <div className="orders-section">
          <div className="orders-header flex">
            <h3 className="h3">Order</h3>
            <form className="input-con">
              <input type="text" placeholder="Search Products" />
              <img src={Search} alt="" />
            </form>
            <DashBtn
              title="Filter"
              icon={<CiFilter style={{ fontSize: "20px" }}></CiFilter>}
            />
            <DashBtn title="Select" icon={<img src={Select} alt="" />} />
            <DashBtn title="Export" icon={<img src={Export} alt="" />} />
            <DashBtn title="Import" icon={<img src={Import} alt="" />} />
            <DashBtn title="New Order" icon={<p>+</p>} />
          </div>
          <div className="orders-stats">
            <div className="div">
              <div className="discount-stats-header orders-stats-header flex">
                <div>
                  <p className="p"> Name</p>
                </div>
                <div>
                  <p className="p">Type</p>
                </div>
                <div>
                  <p className="p">Code</p>
                </div>
                <div>
                  <p className="p">Start Date</p>
                </div>
                <div>
                  <p className="p">End Date</p>
                </div>
                <div>
                  <p className="p">Uses</p>
                </div>
                <div>
                  <p className="p">Action</p>
                </div>
                <div>
                  <p className="p">Status</p>
                </div>
              </div>
              <div className="discount-stats-inner orders-stats-header orders-stats-inner flex">
                <div>
                  <p className="p">Discount one</p>
                </div>
                <div>
                  <p className="p">Free Shipping</p>
                </div>
                <div>
                  <p className="p">H0L1DAY20</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">3</p>
                </div>
                <div className="flex">
                  <img src={Edit} alt="" />
                  <img src={Action} alt="" />
                </div>
                <div className="">
                  <button className="status-btn">Complete</button>
                </div>
              </div>
              <div className="discount-stats-inner orders-stats-header orders-stats-inner flex">
                <div>
                  <p className="p">Discount one</p>
                </div>
                <div>
                  <p className="p">Free Shipping</p>
                </div>
                <div>
                  <p className="p">H0L1DAY20</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">3</p>
                </div>
                <div className="flex">
                  <img src={Edit} alt="" />
                  <img src={Action} alt="" />
                </div>
                <div className="">
                  <button className="status-btn">Complete</button>
                </div>
              </div>
              <div className="discount-stats-inner orders-stats-header orders-stats-inner flex">
                <div>
                  <p className="p">Discount one</p>
                </div>
                <div>
                  <p className="p">Free Shipping</p>
                </div>
                <div>
                  <p className="p">H0L1DAY20</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">3</p>
                </div>
                <div className="flex">
                  <img src={Edit} alt="" />
                  <img src={Action} alt="" />
                </div>
                <div className="">
                  <button className="status-btn">Complete</button>
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
