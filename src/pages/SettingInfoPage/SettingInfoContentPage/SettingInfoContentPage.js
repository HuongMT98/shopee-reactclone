import { useEffect, useState } from "react"
import "./SettingInfoContentPage.scss"
// import axios from "axios"
import SettingInfoContentPageLeft from "./SettingInfoContentPageLeft/SettingInfoContentPageLeft"
import SettingInfoContentPageRight from "./SettingInfoContentPageRight/SettingInfoContentPageRight"
import SettingInfoContentPageMid from "./SettingInfoContentPageMid/SettingInfoContentPageMid"
import ApiUser from "../../../Api/ApiUser"

function SettingInfoContentPage() {
  const [user, setUser] = useState([])

  useEffect(() => {
    ApiUser().then((data) => {
      setUser(data)
    })
  }, [])

  return (
    <>
      <div className='setting-info-content center-item-flex'>
        <div className='setting-info-content-container'>
          <div className='setting-info-content-title'>
            <h4>My Profile</h4>
            <p>Manage and protect your account</p>
          </div>
          <div className='setting-info-content-body'>
            <div className='setting-info-content-body-container'>
              <div className='w20 settinginfoleft'>
                <SettingInfoContentPageLeft user={user} />
              </div>
              <div className='w50 settinginfomid'>
                <SettingInfoContentPageMid user={user} />
              </div>
              <div className='w30 settinginforight'>
                <SettingInfoContentPageRight user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingInfoContentPage
