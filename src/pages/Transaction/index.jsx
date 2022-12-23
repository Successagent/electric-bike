import "../Transaction/Transaction.css";
import Navigation from "../../Components/Navigation";
import DashHeader from "../../Components/DashHeader";
import DashBtn from "../../Components/DashBtn";

import { CiFilter } from "react-icons/ci";

import Import from "../../assets/import.svg";
import Search from "../../assets/search.svg";
import { Link } from "react-router-dom";

const index = ({
  dashVisibility,
  toggleActive,
  toggleDashboardVisibility,
  dashActive,
}) => {
  return (
    <div className="dashboard">
      <Navigation
        dashVisibility={dashVisibility}
        toggleActive={toggleActive}
        dashActive={dashActive}
      />
      <div className="dashboard-body">
        <DashHeader
          toggleDashboardVisibility={toggleDashboardVisibility}
          dashActive={dashActive}
        />
        <div className="orders-section">
          <div className="orders-header transaction-header flex">
            <div>
              <h3 className="h3">Messages</h3>
            </div>
            <div>
              <form className="input-con">
                <input type="text" placeholder="Search Products" />
                <img src={Search} alt="" />
              </form>
              <DashBtn
                title="Filter"
                icon={<CiFilter style={{ fontSize: "20px" }}></CiFilter>}
              />
              <DashBtn title="Select" icon={<img src={Import} alt="" />} />
            </div>
          </div>
          <div className="orders-stats">
            <div className="div">
              <div className="orders-stats-header flex">
                <div>
                  <p className="p">Full Name</p>
                </div>
                <div>
                  <p className="p">Email</p>
                </div>
                <div>
                  <p className="p">Subject</p>
                </div>
                <div>
                  <p className="p">Message</p>
                </div>
                <div>
                  <p className="p">Date</p>
                </div>
              </div>
              <Link to="/order-details">
                <div className="orders-stats-header message-stats-header orders-stats-inner flex">
                  <div>
                    <p className="p">killan James</p>
                  </div>
                  <div>
                    <p className="p">kilian@gmail.com</p>
                  </div>
                  <div>
                    <div>
                      <p className="p">payments not going</p>
                    </div>
                  </div>
                  <div>
                    <p className="p">Lorem ipsum lorem ipsum lorem ipsum...</p>
                  </div>
                  <div>
                    <p className="p">28 May 2021</p>
                  </div>
                </div>
              </Link>
              <Link to="/order-details">
                <div className="orders-stats-header message-stats-header orders-stats-inner flex">
                  <div>
                    <p className="p">killan James</p>
                  </div>
                  <div>
                    <p className="p">kilian@gmail.com</p>
                  </div>
                  <div>
                    <div>
                      <p className="p">payments not going</p>
                    </div>
                  </div>
                  <div>
                    <p className="p">Lorem ipsum lorem ipsum lorem ipsum...</p>
                  </div>
                  <div>
                    <p className="p">28 May 2021</p>
                  </div>
                </div>
              </Link>
              <Link to="/order-details">
                <div className="orders-stats-header message-stats-header orders-stats-inner flex">
                  <div>
                    <p className="p">killan James</p>
                  </div>
                  <div>
                    <p className="p">kilian@gmail.com</p>
                  </div>
                  <div>
                    <div>
                      <p className="p">payments not going</p>
                    </div>
                  </div>
                  <div>
                    <p className="p">Lorem ipsum lorem ipsum lorem ipsum...</p>
                  </div>
                  <div>
                    <p className="p">28 May 2021</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
