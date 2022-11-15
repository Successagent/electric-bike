import "../Button/Button.css";
const index = ({ title, icon, btn }) => {
  return (
    <button id="1" className="btn" onClick={btn}>
      {title} {icon}
    </button>
  );
};

export default index;
