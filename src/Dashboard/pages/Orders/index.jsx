import "../Orders/Orders.css";

import DashBtn from "../../Components/DashBtn";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import { CiFilter } from "react-icons/ci";

import Select from "../../../assets/select.svg";
import Export from "../../../assets/export.svg";
import Import from "../../../assets/import.svg";
import Action from "../../../assets/action.svg";
import Search from "../../../assets/search.svg";

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
            <div className="orders-stats-header flex">
              <div>
                <p className="p">Order No</p>
              </div>
              <div>
                <p className="p">Customer</p>
              </div>
              <div>
                <p className="p">Order Date</p>
              </div>
              <div>
                <p className="p">Quantity</p>
              </div>
              <div>
                <p className="p">Total</p>
              </div>
              <div>
                <p className="p">Action</p>
              </div>
              <div>
                <p className="p">Status</p>
              </div>
            </div>
            <div className="orders-stats-header orders-stats-inner flex">
              <div>
                <p className="p">23423465</p>
              </div>
              <div>
                <p className="p">killan James</p>
              </div>
              <div>
                <p className="p">30 May 2021</p>
              </div>
              <div>
                <p className="p">3</p>
              </div>
              <div>
                <p className="p">N 3, 000, 000</p>
              </div>
              <div>
                <button className="action-btn">
                  <img src={Action} alt="" />
                </button>
              </div>
              <div>
                <button className="status-btn">Complete</button>
              </div>
            </div>
            <div className="orders-stats-header orders-stats-inner flex">
              <div>
                <p className="p">23423465</p>
              </div>
              <div>
                <p className="p">killan James</p>
              </div>
              <div>
                <p className="p">30 May 2021</p>
              </div>
              <div>
                <p className="p">3</p>
              </div>
              <div>
                <div>
                  <p className="p">N 3, 000, 000</p>
                </div>
              </div>
              <div>
                <button className="action-btn">
                  <img src={Action} alt="" />
                </button>
              </div>
              <div>
                <button className="status-btn">Refund</button>
              </div>
            </div>
            <div className="orders-stats-header orders-stats-inner flex">
              <div>
                <p className="p">23423465</p>
              </div>
              <div>
                <p className="p">killan James</p>
              </div>
              <div>
                <p className="p">30 May 2021</p>
              </div>
              <div>
                <p className="p">3</p>
              </div>
              <div>
                <p className="p">N 3, 000, 000</p>
              </div>
              <div>
                <button className="action-btn">
                  <img src={Action} alt="" />
                </button>
              </div>
              <div>
                <button className="status-btn">Pending</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
