import { useEffect, useState } from "react"
import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
import NavSideBar from "../../components/Layout/NavSideBar/NavSideBar"
import "./Info.scss"
import axios from "axios"
function Info() {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5200/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className='info-container'>
        <div className='info-wrap'>
          <div className=''>
            <NavSideBar />
          </div>
          <div className='info'>
            <div className='infopage-wrap'>
              <h4>My Profile</h4>
              <h5>Manage and protect your account</h5>
            </div>
            {user.map((item) => {
              return (
                <div className='infopage-item' key={item.id}>
                  <div className='infopage-item-info'>
                    <div className='infopage-item-name'>
                      <h5>Username</h5>
                      <p>{item.name}</p>
                    </div>
                    <div className='infopage-item-inputname'>
                      <h5>Name</h5>
                      <input type='text' placeholder={item.name} />
                    </div>
                    <div className='infopage-item-email'>
                      <h5>Email</h5>
                      <p>{item.email}</p>
                    </div>
                    <div className='infopage-item-phone'>
                      <h5>Phone</h5>
                      <p>{item.phone}</p>
                    </div>
                    <div className='infopage-item-gender'>
                      <h5>Gender</h5>
                      <p>{item.gender}</p>
                    </div>
                    <div className='infopage-item-dob'>
                      Date of birth
                      <div>
                        <input type='time' />
                      </div>
                    </div>
                    <button>Save</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Info
