import "../CardHeader/CardHeader.css";

const index = ({ headerTwo, text }) => {
  return (
    <>
      <div className="card-header">
        <h2 className="h2">{headerTwo}</h2>
        <p className="p">{text}</p>
      </div>
    </>
  );
};

export default index;
