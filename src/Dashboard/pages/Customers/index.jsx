import "../Customers/Customers.css";

import DashBtn from "../../Components/DashBtn";

import { CiFilter } from "react-icons/ci";

import Select from "../../../assets/select.svg";
import Export from "../../../assets/export.svg";
import Import from "../../../assets/import.svg";
import Action from "../../../assets/action.svg";
import Search from "../../../assets/search.svg";
import Prof from "../../../assets/prof.svg";
import Edit from "../../../assets/edit.svg";
import UserProf from "../../../assets/userprof.svg";

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
          <p className="p">Full Name</p>
          <p className="p">Email</p>
          <p className="p">Phone Number</p>
          <p className="p">Created</p>
          <p className="p">Action</p>
        </div>
        <div className="customers-stats-header orders-stats-header orders-stats-inner flex">
          <div className="flex">
            <img src={Prof} alt="" />
            <p className="p">killan James</p>
          </div>
          <p className="p">Killan@gmail.com</p>
          <p className="p">081 8293 9382</p>
          <p className="p">30 May 2021</p>

          <div className="flex">
            <img src={Edit} alt="" />
            <img src={UserProf} alt="" />
            <img src={Action} alt="" />
          </div>
        </div>
        <div className="customers-stats-header orders-stats-header orders-stats-inner flex">
          <div className="flex">
            <img src={Prof} alt="" />
            <p className="p">killan James</p>
          </div>
          <p className="p">Killan@gmail.com</p>
          <p className="p">081 8293 9382</p>
          <p className="p">30 May 2021</p>

          <div className="flex">
            <img src={Edit} alt="" />
            <img src={UserProf} alt="" />
            <img src={Action} alt="" />
          </div>
        </div>
        <div className="customers-stats-header orders-stats-header orders-stats-inner flex">
          <div className="flex">
            <img src={Prof} alt="" />
            <p className="p">killan James</p>
          </div>
          <p className="p">Killan@gmail.com</p>
          <p className="p">081 8293 9382</p>
          <p className="p">30 May 2021</p>

          <div className="flex">
            <img src={Edit} alt="" />
            <img src={UserProf} alt="" />
            <img src={Action} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
