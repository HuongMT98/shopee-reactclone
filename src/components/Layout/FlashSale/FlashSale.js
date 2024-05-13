import "./FlashSale.scss"
import "./FlashSale.responsive.scss"
import flashSaveImg from "../../../Assets/flashsale.png"
import CountdownFlashSale from "./CoundownFlashSale/CoundownFlashSale"
import FlashSaleContent from "./FlashSaleContent/FlashSaleContent"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

function FlashSale() {
  return (
    <div className='flash-sale-container'>
      <div className='flash-sale-wrap'>
        <div className='flash-sale'>
          <div className='flash-sale-title'>
            <div className='flash-sale-left'>
              <div
                className='flash-sale-logo'
                aria-label='title Flash Deals'
                tabIndex='0'
              >
                <img src={flashSaveImg} alt='' />
              </div>
              <div className='flash-sale-logo-coundown'>
                <CountdownFlashSale />
              </div>
            </div>
            <div className='flash-sale-right'>
              <NavLink to='/flashsale'>
                See All <FontAwesomeIcon icon={faAngleRight} />
              </NavLink>
            </div>
          </div>
          <div className='flash-sale-content'>
            <FlashSaleContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSale
