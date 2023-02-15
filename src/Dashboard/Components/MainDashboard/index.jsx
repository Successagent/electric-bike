import { Routes, Route, useLocation } from "react-router-dom";

import "./MainDashboard.css";

import Orders from "../../Dashboard/pages/Orders";
import Customers from "../../Dashboard/pages/Customers";
import Transaction from "../../Dashboard/pages/Transaction";
import DashboardProducts from "../../pages/DashboardProducts";
import Message from "../../Dashboard/pages/Message";
import DashBoard from "../../Dashboard/pages/DashBoard";
import Discount from "../../Dashboard/pages/Discount";
import Categories from "../../Dashboard/pages/Categories";
import OrderDetails from "../../Dashboard/pages/OrderDetails";
import NewCustomer from "../../Dashboard/pages/NewCustomer";
import EditCustomer from "../../Dashboard/pages/EditCustomer";
import CustomerView from "../../Dashboard/pages/CustomerView";
import NewProduct from "../../Dashboard/pages/NewProduct";
import EditProduct from "../../Dashboard/pages/EditProduct";
import NewCategory from "../../Dashboard/pages/NewCategory";
import EditCategory from "../../Dashboard/pages/EditCategory";

import { useState } from "react";

const index = () => {
  const [val, setVal] = useState("edit");
  const [visibility, setVisibility] = useState(false);
  const [active, setActive] = useState("");

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

  const toggleDashboardVisibility = () => setVisibility(!visibility);
  console.log(active);

  return (
    <>
      <Routes>
        <Route
          path="/orders"
          element={
            <Orders
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/customers"
          element={
            <Customers
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <Categories
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/message"
          element={
            <Message
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/discount"
          element={
            <Discount
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/dash-products"
          element={
            <Products
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/transaction"
          element={
            <Transaction
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashBoard
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/order-details"
          element={
            <OrderDetails
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/new-customer"
          element={
            <NewCustomer
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/edit-customer"
          element={
            <EditCustomer
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/view-customer"
          element={
            <CustomerView
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/new-product"
          element={
            <NewProduct
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/edit-product"
          element={
            <EditProduct
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
            />
          }
        />
        <Route
          path="/new-category"
          element={
            <NewCategory
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
              val={val}
            />
          }
        />
        <Route
          path="/edit-category"
          element={
            <EditCategory
              active={active}
              toggleActive={toggleActive}
              toggleDashboardVisibility={toggleDashboardVisibility}
              visibility={visibility}
              val={val}
            />
          }
        />
      </Routes>
    </>
  );
};

export default index;
