import '../BorderButton/BorderButton.css'

const index = ({ icon, title }) => {
  return (
    <button className="btn border-btn">
      {icon} {title}
    </button>
  )
}

export default index
