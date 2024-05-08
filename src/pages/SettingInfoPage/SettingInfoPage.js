import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import NavSideBar from "../../components/Layout/NavSideBar/NavSideBar"
import SettingInfoContentPage from "./SettingInfoContentPage/SettingInfoContentPage"
import "./SettingInfoPage.scss"

function SettingInfoPage() {
  return (
    <>
      <div className='setting-info-page'>
        <div className='setting-info-page-container-wrap'>
          <div className='setting-info-page-container'>
            <div className='setting-info-page-sidebar'>
              <NavSideBar />
            </div>
            <div className='setting-info-page-content'>
              <SettingInfoContentPage />
            </div>
          </div>
        </div>
      </div>{" "}
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default SettingInfoPage
