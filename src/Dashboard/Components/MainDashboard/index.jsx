import "../MainDashboard/MainDashboard.css";

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
  const [active, setActive] = useState("categories");
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
    <>
      {active == "orders" ? (
        <Orders
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : active == "customers" ? (
        <Customers
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : active == "categories" ? (
        <Categories
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : active == "message" ? (
        <Message
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : active == "discount" ? (
        <Discount
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : active == "products" ? (
        <Products
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : active == "transaction" ? (
        <Transaction
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      ) : (
        <DashBoard
          active={active}
          toggleActive={toggleActive}
          toggleDashboardVisibility={toggleDashboardVisibility}
          visibility={visibility}
        />
      )}
    </>
  );
};

export default index;
