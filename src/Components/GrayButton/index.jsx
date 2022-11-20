import "../GrayButton/GrayButton.css";

const index = ({ title, btn, icon }) => {
  return (
    <button id="2" className="gray-btn" onClick={btn}>
      {icon} {title}
    </button>
  );
};

export default index;
