import "../Orders/Orders.css";

import DashBtn from "../../Components/DashBtn";

import { CiFilter } from "react-icons/ci";

import Select from "../../../assets/select.svg";
import Export from "../../../assets/export.svg";
import Import from "../../../assets/import.svg";
import Action from "../../../assets/action.svg";
import Search from "../../../assets/search.svg";

const index = () => {
  return (
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
          <p className="p">Order No</p>
          <p className="p">Customer</p>
          <p className="p">Order Date</p>
          <p className="p">Quantity</p>
          <p className="p">Total</p>
          <p className="p">Action</p>
          <p className="p">Status</p>
        </div>
        <div className="orders-stats-header orders-stats-inner flex">
          <p className="p">23423465</p>
          <p className="p">killan James</p>
          <p className="p">30 May 2021</p>
          <p className="p">3</p>
          <p className="p">N 3, 000, 000</p>
          <button className="action-btn">
            <img src={Action} alt="" />
          </button>

          <button className="status-btn">Complete</button>
        </div>
        <div className="orders-stats-header orders-stats-inner flex">
          <p className="p">23423465</p>
          <p className="p">killan James</p>
          <p className="p">30 May 2021</p>
          <p className="p">3</p>
          <p className="p">N 3, 000, 000</p>
          <button className="action-btn">
            <img src={Action} alt="" />
          </button>
          <button className="status-btn">Refund</button>
        </div>
        <div className="orders-stats-header orders-stats-inner flex">
          <p className="p">23423465</p>
          <p className="p">killan James</p>
          <p className="p">30 May 2021</p>
          <p className="p">3</p>
          <p className="p">N 3, 000, 000</p>
          <button className="action-btn">
            <img src={Action} alt="" />
          </button>
          <button className="status-btn">Pending</button>
        </div>
      </div>
    </div>
  );
};

export default index;
