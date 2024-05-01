import {
  faAngleRight,
  faCheck,
  faRotateLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function ShopeeMallTitle() {
  return (
    <>
      <div className='shopee-mall-title-wrap'>
        <div className='shopee-mall-title'>
          <Link to='./shopeemall'>Shopee Mall</Link>
          <div className='shopee-mall-title-refund'>
            <p>
              <FontAwesomeIcon icon={faRotateLeft} />7 Days Return
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              100% Authentic
            </p>
            <p>
              <FontAwesomeIcon icon={faTruck} />
              Free Shipping
            </p>
          </div>
        </div>
        <Link to='./shopeemall' className='shopee-mall-title-see-more'>
          See More
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </>
  )
}

export default ShopeeMallTitle
