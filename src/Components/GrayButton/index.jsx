import "../GrayButton/GrayButton.css";

const index = ({ title, btn }) => {
  return (
    <button id="2" className="gray-btn" onClick={btn}>
      {title}
    </button>
  );
};

export default index;
