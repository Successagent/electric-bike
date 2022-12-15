import "../MainDashboard/MainDashboard.css";
import Navigation from "../Navigation";
import DashHeader from "../DashHeader";
import Orders from "../../pages/Orders";
import Customers from "../../pages/Customers";
import Transaction from "../../pages/Transaction";
import Products from "../../pages/Products";
import Message from "../../pages/Message";
import DashBoard from "../../pages/DashBoard";
import Discount from "../../pages/Discount";
import Categories from "../../pages/Categories";

import { useState } from "react";

const index = ({ visibility, toggleDashboardVisibility }) => {
  const [active, setActive] = useState("customers");
  const toggleActive = (e) => {
    if (e.target.id == "dashboard") {
      setActive("dashboard");
    } else if (e.target.id == "orders") {
      setActive("orders");
    } else if (e.target.id == "customers") {
      setActive("customers");
    } else if (e.target.id == "discount") {
      setActive("discount");
    } else if (e.target.id == "transaction") {
      setActive("transaction");
    } else if (e.target.id == "categories") {
      setActive("categories");
    } else if (e.target.id == "products") {
      setActive("products");
    } else if (e.target.id == "message") {
      setActive("message");
    }
  };

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
        {active == "orders" ? (
          <Orders />
        ) : active == "customers" ? (
          <Customers />
        ) : active == "categories" ? (
          <Categories />
        ) : active == "message" ? (
          <Message />
        ) : active == "discount" ? (
          <Discount />
        ) : active == "products" ? (
          <Products />
        ) : active == "transaction" ? (
          <Transaction />
        ) : (
          <DashBoard />
        )}
      </div>
    </div>
  );
};

export default index;
