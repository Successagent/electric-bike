import "../Button/Button.css";
const index = ({ title, icon, eventFunction }) => {
  return (
    <button id="1" className="btn" onClick={eventFunction}>
      {title} {icon}
    </button>
  );
};

export default index;
