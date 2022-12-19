import { Routes, Route, useLocation } from "react-router-dom";

import "../MainDashboard/MainDashboard.css";

import Orders from "../../pages/Orders";
import Customers from "../../pages/Customers";
import Transaction from "../../pages/Transaction";
import Products from "../../pages/Products";
import Message from "../../pages/Message";
import DashBoard from "../../pages/DashBoard";
import Discount from "../../pages/Discount";
import Categories from "../../pages/Categories";
import OrderDetails from "../../pages/OrderDetails";
import NewCustomer from "../../pages/NewCustomer";
import EditCustomer from "../../pages/EditCustomer";
import CustomerView from "../../pages/CustomerView";
import NewProduct from "../../pages/NewProduct";
import EditProduct from "../../pages/EditProduct";
import NewCategory from "../../pages/NewCategory";
import EditCategory from "../../pages/EditCategory";

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
