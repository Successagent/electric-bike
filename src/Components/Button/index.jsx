import '../Button/Button.css'
const index = ({ title, icon }) => {
  return (
    <button className="btn">
      {title} {icon}
    </button>
  )
}

export default index
