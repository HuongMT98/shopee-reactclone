import "./FlashSale.scss"
import flashSaveImg from "../../../Assets/flashsale.png"
import CountdownFlashSale from "./CoundownFlashSale/CoundownFlashSale"

function FlashSale() {
  return (
    <div className='flash-sale-container'>
      <div className='flash-sale-wrap'>
        <div className='flash-sale'>
          <div className='flash-sale-title'>
            <div
              class='flash-sale-logo'
              aria-label='title Flash Deals'
              tabindex='0'
            >
              <img src={flashSaveImg} alt='' />
            </div>
            <div className='flash-sale-logo-coundown'>
              <CountdownFlashSale />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSale
