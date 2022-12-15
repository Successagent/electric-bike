import "../Products/Products.css";
import "../Orders/Orders.css";

import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import DashBtn from "../../Components/DashBtn";

import { CiFilter } from "react-icons/ci";

import Select from "../../../assets/select.svg";
import Export from "../../../assets/export.svg";
import Import from "../../../assets/import.svg";
import Action from "../../../assets/action.svg";
import Search from "../../../assets/search.svg";
import Edit from "../../../assets/edit.svg";

import Bike from "../../../assets/bike.svg";

function index({
  visibility,
  toggleActive,
  toggleDashboardVisibility,
  active,
}) {
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
            <div className="products-stats-header orders-stats-header flex">
              <div>
                <p className="p">Product Name</p>
              </div>
              <div>
                <p className="p">Price</p>
              </div>
              <div>
                <p className="p">Modified date</p>
              </div>
              <div>
                <p className="p">Created date</p>
              </div>
              <div>
                <p className="p">Action</p>
              </div>
              <div>
                <p className="p">In - Stock</p>
              </div>
            </div>
            <div className="products-stats-inner orders-stats-header orders-stats-inner flex">
              <div className="flex">
                <img src={Bike} alt="" />
                <p className="p">Fat Tire Matt</p>
              </div>
              <div>
                <p className="p">1,150.000</p>
              </div>
              <div>
                <p className="p">30 May 2021</p>
              </div>
              <div>
                <p className="p">28 May 2021</p>
              </div>
              <div className="flex">
                <img src={Edit} alt="" />
                <img src={Action} alt="" />
              </div>
              <div>
                <div className="act-btn on-act"></div>
              </div>
            </div>
            <div className="products-stats-inner orders-stats-header orders-stats-inner flex">
              <div className="flex">
                <img src={Bike} alt="" />
                <p className="p">Fat Tire Matt</p>
              </div>
              <div>
                <p className="p">1,150.000</p>
              </div>
              <div>
                <p className="p">30 May 2021</p>
              </div>
              <div>
                <p className="p">28 May 2021</p>
              </div>
              <div className="flex">
                <img src={Edit} alt="" />
                <img src={Action} alt="" />
              </div>
              <div>
                <div className="on-act"></div>
              </div>
            </div>
            <div className="products-stats-inner orders-stats-header orders-stats-inner flex">
              <div className="flex">
                <img src={Bike} alt="" />
                <p className="p">Fat Tire Matt</p>
              </div>
              <div>
                <p className="p">1,150.000</p>
              </div>
              <div>
                <p className="p">30 May 2021</p>
              </div>
              <div>
                <p className="p">28 May 2021</p>
              </div>
              <div className="flex">
                <img src={Edit} alt="" />
                <img src={Action} alt="" />
              </div>
              <div>
                <div className="on-act"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
