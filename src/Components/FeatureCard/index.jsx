import '../FeatureCard/FeatureCard.css'
import FeatureLogo from '../../assets/FeatureLogo.png'
import BorderButton from '../../Components/BorderButton'
import Button from '../../Components/Button'

import MotorBike from '../../assets/tabler_motorbike.png'

import { CgArrowRight } from 'react-icons/cg'

const index = ({ reverse }) => {
  return (
    <div
      className="home-feature-section"
      style={{ flexDirection: `${reverse == 'reverse' ? 'row-reverse' : ''}` }}
    >
      <div className="feature-item-one">
        <h3 className="h3">Feature 1</h3>
        {reverse == 'reverse' ? (
          <h2 className="h2">Outstanding Products With Exceptional Brands</h2>
        ) : (
          <h1 className="h1">Explore and Ride the World with Us</h1>
        )}
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quisque
          dignissim tellus, tempus nec donec aliquam enim, posuere. Massa
          volutpat amet odio urna vel aliquet. Cras vitae malesuada tortor enim
          dictum a quam consectetur tristique.
        </p>
        {reverse == 'reverse' ? (
          ''
        ) : (
          <div className="grid">
            <BorderButton
              icon={<img src={MotorBike} alt="" />}
              title="Electric Bikes"
            />
            <BorderButton
              icon={<img src={MotorBike} alt="" />}
              title="Electric Bikes"
            />
            <BorderButton
              icon={<img src={MotorBike} alt="" />}
              title="Electric Bikes"
            />
            <BorderButton
              icon={<img src={MotorBike} alt="" />}
              title="Electric Bikes"
            />
          </div>
        )}
        <Button title="Start Shopping" icon={<CgArrowRight></CgArrowRight>} />
      </div>
      <div>
        <img src={FeatureLogo} alt="" />
      </div>
    </div>
  )
}

export default index
