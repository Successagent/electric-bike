import { Link } from "react-router-dom";

import "../NewProduct/NewProduct.css";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";

import "../NewCustomer/NewCustomer.css";
import "../Orders/Orders.css";
import "../OrderDetails/OrderDetails.css";

import Bike from "../../../assets/bike.svg";
import ArrowDown from "../../../assets/arrow-down.png";
import Gallery from "../../../assets/gallery-import.png";
import Gallery2 from "../../../assets/gallery-import-2.png";
import GalleryImage from "../../../assets/gallery-image.png";

import DashBtn from "../../Components/DashBtn";

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
        <div className="orders-section order-details">
          <div className="orders-details orders-header flex">
            <h3 className="h3">New Product</h3>
            <div className="flex">
              <Link to="/dash-products">
                <DashBtn title="Cancel" />
              </Link>
              <DashBtn title="Create" />
            </div>
          </div>
          <div className="order-details-two">
            <div className="customer-order-details-item-one order-details-item-one orders-stats">
              <h3 className="h3">Product</h3>
              <div className="order-details-table">
                <div className="order-details-table-header flex">
                  <div className="order-details-table-header-one">
                    <p className="p">Name</p>
                  </div>
                  <div className="order-details-table-header-one">
                    <p className="p">In-Stock</p>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Bike} alt="" />
                    <p className="p">Fat Tire Matt</p>
                  </div>
                  <div>
                    <div className="act-btn on-act"></div>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Bike} alt="" />
                    <p className="p">Fat Tire Matt</p>
                  </div>
                  <div>
                    <div className="act-btn on-act"></div>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Bike} alt="" />
                    <p className="p">Fat Tire Matt</p>
                  </div>
                  <div>
                    <div className="act-btn on-act"></div>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Bike} alt="" />
                    <p className="p">Fat Tire Matt</p>
                  </div>
                  <div>
                    <div className="act-btn on-act"></div>
                  </div>
                </div>
                <div className="order-details-table-main flex">
                  <div className="flex">
                    <img src={Bike} alt="" />
                    <p className="p">Fat Tire Matt</p>
                  </div>
                  <div>
                    <div className="act-btn on-act"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-order-details-item-two order-details-item-two orders-stats">
              <div className="order-details-item-two-sect-one">
                <h3 className="h3">Product Details</h3>
                <p className="p">Product Name *</p>
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
                <p className="p">Price *</p>
                <p className="p p-bg">N | 1,500,000</p>
                <p className="p">Display Image</p>
                <h5 className="p">Add Display Image</h5>
                <div className="p-bg gallery">
                  <img src={Gallery} alt="" />
                  <p className="p">Upload Image or Drag and Drop</p>
                </div>
                <p className="p">Gallery Image</p>
                <h5 className="p">Add product image to gallery</h5>
                <div className="p-bg gallery product-gallery">
                  <img src={GalleryImage} alt="" />
                  <img src={Gallery2} alt="" />
                </div>
                <p className="p">In-Stock *</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
