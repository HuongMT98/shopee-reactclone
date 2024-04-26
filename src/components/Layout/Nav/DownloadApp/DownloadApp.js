import QRcode from "../../../../Assets/DownloadApp/QRcode.png"
import Chplay from "../../../../Assets/DownloadApp/googleplay.png"
import Appstore from "../../../../Assets/DownloadApp/appstore.png"
import AppGallery from "../../../../Assets/DownloadApp/AppGallery.png"
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
