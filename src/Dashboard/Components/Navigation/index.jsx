import "../Navigation/Navigation.css";

import DashboardHeaderLogo from "../../../assets/dashboardlogo.png";
import Orders from "../../../assets/orders.png";
import DashboardLogo from "../../../assets/element-3.png";
import Customers from "../../../assets/customers.png";
import Products from "../../../assets/products.png";
import Categories from "../../../assets/categories.png";
import Discount from "../../../assets/discount.png";
import Transaction from "../../../assets/transaction.png";
import Message from "../../../assets/message.png";

import DashboardLogo2 from "../../../assets/dashboardlogo-2.png";
import Orders2 from "../../../assets/orders-2.png";
import Customers2 from "../../../assets/customers-2.png";
import Products2 from "../../../assets/products-2.png";
import Categories2 from "../../../assets/categories-2.png";
import Discount2 from "../../../assets/discount-2.png";
import Transaction2 from "../../../assets/transaction-2.png";
import Message2 from "../../../assets/message-2.png";

const index = ({ visibility, active, toggleActive }) => {
  return (
    <section className="dashboard-navigation" data-visible={visibility}>
      <div className="nav-header">
        <img src={DashboardHeaderLogo} alt="" />
      </div>
      <div className="nav-menu-sect">
        <h3 className="h3">Menu</h3>
        <div
          className={`flex ${active == "dashboard" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="dashboard"
        >
          <img
            id="dashboard"
            src={active == "dashboard" ? DashboardLogo2 : DashboardLogo}
            alt=""
          />
          <p
            className={`p ${active == "dashboard" ? "dash-p" : ""}`}
            id="dashboard"
          >
            Dashboard
          </p>
        </div>
        <div
          className={`flex ${active == "orders" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="orders"
        >
          <img src={active == "orders" ? Orders2 : Orders} alt="" id="orders" />
          <p className={`p ${active == "orders" ? "dash-p" : ""}`} id="orders">
            Orders
          </p>
        </div>
      </div>
      <div className="nav-menu-sect">
        <h3 className="h3">Management</h3>
        <div
          className={`flex ${active == "customers" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="customers"
        >
          <img
            src={active == "customers" ? Customers2 : Customers}
            id="customers"
          />
          <p
            className={`p ${active == "customers" ? "dash-p" : ""}`}
            id="customers"
          >
            Customers
          </p>
        </div>
        <div
          className={`flex ${active == "products" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="products"
        >
          <img
            src={active == "products" ? Products2 : Products}
            id="products"
          />
          <p
            className={`p ${active == "products" ? "dash-p" : ""}`}
            id="products"
          >
            Products
          </p>
        </div>
        <div
          className={`flex ${active == "categories" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="categories"
        >
          <img
            src={active == "categories" ? Categories2 : Categories}
            id="categories"
          />
          <p
            className={`p ${active == "categories" ? "dash-p" : ""}`}
            id="categories"
          >
            Categories
          </p>
        </div>
        <div
          className={`flex ${active == "discount" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="discount"
        >
          <img
            src={active == "discount" ? Discount2 : Discount}
            alt=""
            id="discount"
          />
          <p
            className={`p ${active == "discount" ? "dash-p" : ""}`}
            id="discount"
          >
            Discount
          </p>
        </div>
      </div>
      <div className="nav-menu-sect">
        <h3 className="h3">Notifications</h3>

        <div
          className={`flex ${active == "transaction" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="transaction"
        >
          <img
            src={active == "transaction" ? Transaction2 : Transaction}
            alt=""
            id="transaction"
          />
          <p
            className={`p ${active == "transaction" ? "dash-p" : ""}`}
            id="transaction"
          >
            Transaction
          </p>
        </div>
        <div
          className={`flex ${active == "message" ? "dash-active" : ""}`}
          onClick={toggleActive}
          id="message"
        >
          <img
            src={active == "message" ? Message2 : Message}
            alt=""
            id="message"
          />
          <p
            className={`p ${active == "message" ? "dash-p" : ""}`}
            id="message"
          >
            Message
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
