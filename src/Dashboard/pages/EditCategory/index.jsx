import "../EditCategory/EditCategory.css";
import "../NewCategory/NewCategory.css";
import { Link } from "react-router-dom";

import "../NewProduct/NewProduct.css";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import "../NewCustomer/NewCustomer.css";
import "../Orders/Orders.css";
import "../OrderDetails/OrderDetails.css";

import Delete from "../../../assets/delete.png";

import ArrowDown from "../../../assets/arrow-down.png";

import DashBtn from "../../Components/DashBtn";
const index = ({
  val,
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
        <div className="orders-section order-details">
          <div className="orders-details orders-header flex">
            <h3 className="h3">New Category</h3>
            <div className="flex">
              <Link to="/categories">
                <DashBtn title="Cancel" />
              </Link>
              <DashBtn title="Create" />
            </div>
          </div>
          <div className="order-details-two">
            <div className=" order-details-item-one orders-stats">
              <h3 className="h3">Category</h3>
              <div className="order-details-table">
                <div className="order-details-table-header flex">
                  <div className="order-details-table-header-one">
                    <p className="p">Name</p>
                  </div>
                  <div className="order-details-table-header-one">
                    <p className="p">Total</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <p className="p">Electric Bike</p>
                  </div>
                  <div className="new-category-table-header-one">
                    <p className="p">37</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <p className="p">Electric Bike</p>
                  </div>
                  <div className="new-category-table-header-one">
                    <p className="p">37</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <p className="p">Electric Bike</p>
                  </div>
                  <div className="new-category-table-header-one">
                    <p className="p">37</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-order-details-item-two order-details-item-two orders-stats">
              <div className="order-details-item-two-sect-one">
                <h3 className="h3">Category Details</h3>
                <p className="p">Category Name *</p>
                <p className="p p-bg">Fat Tire Mat</p>
                <p className="p">Description *</p>
                <p className="p p-bg">
                  Lorem ipsum dolor sit amet consectetur. Urna pellentesque
                  dolor aenean dictum scelerisque accumsan amet. Platea feugiat
                  at imperdiet mus nam. Turpis lobortis erat fames libero tortor
                  quam mus volutpat suscipit. Sem tristique arcu amet odio non
                  sit at. Malesuada dictumst nulla egestas
                </p>
                <p className="p">Categories *</p>
                <h5 className="p">Please select one or more category</h5>
                <div className="create-category">
                  <div className="p p-bg flex">
                    <div className="flex">
                      <DashBtn title="Electric-bike" />
                      <DashBtn title="Electric-bike" />
                    </div>
                    <img src={ArrowDown} alt="" />
                  </div>
                  <DashBtn title="Create" />
                </div>
                {val == "edit" && (
                  <div className="delte-con">
                    <DashBtn
                      icon={<img src={Delete} alt="" />}
                      title="Delete"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
