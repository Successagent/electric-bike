import { Link } from "react-router-dom";

import "../Categories/Categories.css";

import DashBtn from "../../Components/DashBtn";

import { CiFilter } from "react-icons/ci";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

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
            <Link to="/new-category">
              <DashBtn title="New Category" icon={<p>+</p>} />
            </Link>
          </div>
          <div className="orders-stats">
            <div className="div">
              <div className="customers-stats-header orders-stats-header flex">
                <div>
                  <p className="p">Category Name</p>
                </div>
                <div>
                  <p className="p">Total</p>
                </div>
                <div>
                  <p className="p">Modified Date</p>
                </div>
                <div>
                  <p className="p">Created Date</p>
                </div>
                <div>
                  <p className="p">Action</p>
                </div>
              </div>
              <div className="customers-stats-inner orders-stats-header orders-stats-inner flex">
                <div>
                  <p className="p">Electric bike</p>
                </div>
                <div>
                  <p className="p">26</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div className="flex">
                  <Link to="/edit-category">
                    <img src={Edit} alt="" />
                  </Link>
                  <img src={Action} alt="" />
                </div>
              </div>
              <div className="customers-stats-inner orders-stats-header orders-stats-inner flex">
                <div>
                  <p className="p">Electric bike</p>
                </div>
                <div>
                  <p className="p">26</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div className="flex">
                  <Link to="/edit-category">
                    <img src={Edit} alt="" />
                  </Link>
                  <img src={Action} alt="" />
                </div>
              </div>
              <div className="customers-stats-inner orders-stats-header orders-stats-inner flex">
                <div>
                  <p className="p">Electric bike</p>
                </div>
                <div>
                  <p className="p">26</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div>
                  <p className="p">30 May 2021</p>
                </div>
                <div className="flex">
                  <Link to="/edit-category">
                    <img src={Edit} alt="" />
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
