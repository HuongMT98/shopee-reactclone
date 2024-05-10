import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import Nav from "../../components/Layout/Nav/Nav"
import NavSideBar from "../../components/Layout/NavSideBar/NavSideBar"
import SettingInfoContentPage from "./SettingInfoContentPage/SettingInfoContentPage"
import "./SettingInfoPage.scss"

function SettingInfoPage() {
  return (
    <>
      {/* Import NavBarComponent */}
      <Nav />
      {/* Content Info-Page */}
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
      </div>
      {/* Import Footer Component */}
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default SettingInfoPage
