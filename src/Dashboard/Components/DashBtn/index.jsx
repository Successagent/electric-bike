import "../DashBtn/DashBtn.css";

const index = ({ title, icon }) => {
  return (
    <button className="dash-btn">
      {icon}
      {title}
    </button>
  );
};

export default index;
