import "../Navigation/Navigation.css";

import { Link } from "react-router-dom";

import DashboardHeaderLogo from "../../assets/dashboardlogo.png";
import Orders from "../../assets/orders.png";
import DashboardLogo from "../../assets/element-3.png";
import Customers from "../../assets/customers.png";
import Products from "../../assets/products.png";
import Categories from "../../assets/categories.png";
import Discount from "../../assets/discount.png";
import Transaction from "../../assets/transaction.png";
import Message from "../../assets/message.png";

import DashboardLogo2 from "../../assets/dashboardlogo-2.png";
import Orders2 from "../../assets/orders-2.png";
import Customers2 from "../../assets/customers-2.png";
import Products2 from "../../assets/products-2.png";
import Categories2 from "../../assets/categories-2.png";
import Discount2 from "../../assets/discount-2.png";
import Transaction2 from "../../assets/transaction-2.png";
import Message2 from "../../assets/message-2.png";

const index = ({ dashVisibility, dashActive, toggleActive }) => {
  return (
    <section className="dashboard-navigation" data-visible={dashVisibility}>
      <div className="nav-header">
        <img src={DashboardHeaderLogo} alt="" />
      </div>
      <div className="nav-menu-sect">
        <h3 className="h3">Menu</h3>
        <Link to="/dashboard">
          <div
            className={`flex ${dashActive == "dashboard" ? "dash-active" : ""}`}
            onClick={toggleActive}
            id="dashboard"
          >
            <img
              id="dashboard"
              src={dashActive == "dashboard" ? DashboardLogo2 : DashboardLogo}
              alt=""
            />
            <p
              className={`p ${dashActive == "dashboard" ? "dash-p" : ""}`}
              id="dashboard"
            >
              Dashboard
            </p>
          </div>
        </Link>
        <Link to="/orders">
          <div
            className={`flex ${dashActive == "orders" ? "dash-active" : ""}`}
            onClick={toggleActive}
            id="orders"
          >
            <img
              src={dashActive == "orders" ? Orders2 : Orders}
              alt=""
              id="orders"
            />
            <p
              className={`p ${dashActive == "orders" ? "dash-p" : ""}`}
              id="orders"
            >
              Orders
            </p>
          </div>
        </Link>
      </div>
      <div className="nav-menu-sect">
        <h3 className="h3">Management</h3>
        <Link to="/customers">
          <div
            className={`flex ${dashActive == "customers" ? "dash-active" : ""}`}
            onClick={toggleActive}
            id="customers"
          >
            <img
              src={dashActive == "customers" ? Customers2 : Customers}
              id="customers"
            />
            <p
              className={`p ${dashActive == "customers" ? "dash-p" : ""}`}
              id="customers"
            >
              Customers
            </p>
          </div>
        </Link>
        <Link to="/dash-products">
          <div
            className={`flex ${dashActive == "products" ? "dash-active" : ""}`}
            onClick={toggleActive}
            id="products"
          >
            <img
              src={dashActive == "products" ? Products2 : Products}
              id="products"
            />
            <p
              className={`p ${dashActive == "products" ? "dash-p" : ""}`}
              id="products"
            >
              Products
            </p>
          </div>
        </Link>
        <Link to="/categories">
          <div
            className={`flex ${
              dashActive == "categories" ? "dash-active" : ""
            }`}
            onClick={toggleActive}
            id="categories"
          >
            <img
              src={dashActive == "categories" ? Categories2 : Categories}
              id="categories"
            />
            <p
              className={`p ${dashActive == "categories" ? "dash-p" : ""}`}
              id="categories"
            >
              Categories
            </p>
          </div>
        </Link>
        <Link to="/discount">
          <div
            className={`flex ${dashActive == "discount" ? "dash-active" : ""}`}
            onClick={toggleActive}
            id="discount"
          >
            <img
              src={dashActive == "discount" ? Discount2 : Discount}
              alt=""
              id="discount"
            />
            <p
              className={`p ${dashActive == "discount" ? "dash-p" : ""}`}
              id="discount"
            >
              Discount
            </p>
          </div>
        </Link>
      </div>
      <div className="nav-menu-sect">
        <h3 className="h3">Notifications</h3>
        <Link to="/transaction">
          <div
            className={`flex ${
              dashActive == "transaction" ? "dash-active" : ""
            }`}
            onClick={toggleActive}
            id="transaction"
          >
            <img
              src={dashActive == "transaction" ? Transaction2 : Transaction}
              alt=""
              id="transaction"
            />
            <p
              className={`p ${dashActive == "transaction" ? "dash-p" : ""}`}
              id="transaction"
            >
              Transaction
            </p>
          </div>
        </Link>
        <Link to="/message">
          <div
            className={`flex ${dashActive == "message" ? "dash-active" : ""}`}
            onClick={toggleActive}
            id="message"
          >
            <img
              src={dashActive == "message" ? Message2 : Message}
              alt=""
              id="message"
            />
            <p
              className={`p ${dashActive == "message" ? "dash-p" : ""}`}
              id="message"
            >
              Message
            </p>
          </div>
        </Link>
      </div>
      <div className="nav-menu-sect">
        <Link to="/settings">
          <h3 className="h3">Setting</h3>
        </Link>
      </div>
    </section>
  );
};

export default index;
