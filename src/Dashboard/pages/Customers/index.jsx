import { Link } from "react-router-dom";

import "../Customers/Customers.css";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

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
            <Link to="/new-customer">
              <DashBtn title="New Customer" icon={<p>+</p>} />
            </Link>
          </div>
          <div className="orders-stats">
            <div className="div">
              <div className="customers-stats-header orders-stats-header flex">
                <div>
                  <p className="p">Full Name</p>
                </div>
                <div>
                  <p className="p">Email</p>
                </div>
                <div>
                  <p className="p">Phone Number</p>
                </div>
                <div>
                  <p className="p">Created</p>
                </div>
                <div>
                  <p className="p">Action</p>
                </div>
              </div>
              <div className="customers-stats-inner orders-stats-header orders-stats-inner flex">
                <div className="flex">
                  <img src={Prof} alt="" />
                  <p className="p">killan James</p>
                </div>
                <div>
                  <p className="p">Killan@gmail.com</p>
                </div>
                <div>
                  <p className="p">081 8293 9382</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>

                <div className="flex">
                  <Link to="/edit-customer">
                    <img src={Edit} alt="" />
                  </Link>
                  <Link to="/view-customer">
                    <img src={UserProf} alt="" />
                  </Link>
                  <img src={Action} alt="" />
                </div>
              </div>
              <div className="customers-stats-inner orders-stats-header orders-stats-inner flex">
                <div className="flex">
                  <img src={Prof} alt="" />
                  <p className="p">killan James</p>
                </div>
                <div>
                  <p className="p">Killan@gmail.com</p>
                </div>
                <div>
                  <p className="p">081 8293 9382</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div className="flex">
                  <Link to="/edit-customer">
                    <img src={Edit} alt="" />
                  </Link>
                  <Link to="/view-customer">
                    <img src={UserProf} alt="" />
                  </Link>
                  <img src={Action} alt="" />
                </div>
              </div>
              <div className="customers-stats-inner orders-stats-header orders-stats-inner flex">
                <div className="flex">
                  <img src={Prof} alt="" />
                  <p className="p">killan James</p>
                </div>
                <div>
                  <p className="p">Killan@gmail.com</p>
                </div>
                <div>
                  <p className="p">081 8293 9382</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>

                <div className="flex">
                  <Link to="/edit-customer">
                    <img src={Edit} alt="" />
                  </Link>
                  <Link to="/view-customer">
                    <img src={UserProf} alt="" />
                  </Link>
                  <img src={Action} alt="" />
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
