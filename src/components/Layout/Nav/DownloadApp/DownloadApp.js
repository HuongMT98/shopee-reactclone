import QRcode from "../../../../Assets/QRcode.png"
import Chplay from "../../../../Assets/googleplay.png"
import Appstore from "../../../../Assets/appstore.png"
import AppGallery from "../../../../Assets/AppGallery.png"
import "./DownloadApp.scss"
function DownloadApp() {
  return (
    <div className='downloadapp-container'>
      <div>
        <img src={QRcode} alt='QRcode' className='downloadapp-qr' />
      </div>
      <div className='downloadapp-icon'>
        <div>
          <img src={Chplay} alt='Chplay' className='appicon' />
        </div>
        <div>
          <img src={Appstore} alt='Appstore' className='appicon' />
        </div>
        <div>
          <img src={AppGallery} alt='AppGallery' className='appicon' />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
