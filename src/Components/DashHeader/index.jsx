import "../DashHeader/DashHeader.css";
import DashProf from "../../assets/dashprofile.png";
import Vector from "../../assets/vectors.png";

import { AiOutlineMenu } from "react-icons/ai";

const index = ({ toggleDashboardVisibility, dashActive }) => {
  return (
    <section className="dashboard-header">
      <div className="dash-menu-con">
        <AiOutlineMenu onClick={toggleDashboardVisibility}></AiOutlineMenu>
      </div>
      <div className="flex">
        <p className="p">
          {dashActive == "customers" ||
          dashActive == "categories" ||
          dashActive == "products" ||
          dashActive == "discount"
            ? "Management"
            : dashActive == "orders" || dashActive == "dashboard"
            ? "Menu"
            : "Settings"}
        </p>
        <p className="p" style={{ textTransform: "capitalize" }}>
          {dashActive}
        </p>
      </div>
      <div className="flex row-reverse">
        <img src={DashProf} alt="" />
        <p className="p">Deko</p>
        <img className="hide" src={Vector} alt="" />
      </div>
    </section>
  );
};

export default index;
