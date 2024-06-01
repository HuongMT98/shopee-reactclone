import { useEffect, useState } from "react"
import "./NavSideBar.scss"
import axios from "axios"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

import img1 from "../../../Assets/NavSideBar/navsidebar1.png"
import img2 from "../../../Assets/NavSideBar/navsidebar2.png"
import img3 from "../../../Assets/NavSideBar/navsidebar3.png"
import img4 from "../../../Assets/NavSideBar/navsidebar4.png"
import img5 from "../../../Assets/NavSideBar/navsidebar5.png"
import img6 from "../../../Assets/NavSideBar/navsidebar6.png"

function NavSideBar() {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5200/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className='nav-sidebar-container'>
        <div className='nav-sidebar'>
          <div className='nav-sidebar-user'>
            <Link className='user'>
              {user.map((item) => (
                <div className='user-wrap' key={item.id}>
                  <img src={item.image} alt='' className='user-img' />
                  <div className='user-info-edit'>
                    <p>{item.name}</p>
                    <div className='edit'>
                      <FontAwesomeIcon icon={faPen} />
                      <Link to='/info' className='edit-link'>
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Link>
          </div>
        </div>
        <div className='nav-sidebar-bottom'>
          <div className='nav-sidebar-bottom-title'>
            <img src={img1} alt='' />
            <Link className='navsidebar-bottom-titleaccount' to='/sale'>
              5.5 Brands Sale
            </Link>
          </div>
          <ul className='nav-sidebar-bottom-list'>
            <div>
              <img src={img2} alt='' />
              <Link className='navsidebar-bottom-titleaccount'>My Account</Link>
            </div>
            <li>
              <NavLink to='/info'>Profile</NavLink>
            </li>
            <li>
              <NavLink to='/info/bank'>Banks & Cards</NavLink>
            </li>
            <li>
              <NavLink to='/info/address'>Addresses</NavLink>
            </li>
            <li>
              <NavLink to='/info/password'>Change Password</NavLink>
            </li>
            <li>
              <NavLink to='/notification'>Notification Settings</NavLink>
            </li>
            <li>
              <NavLink to='/info/privacy'>Privacy Settings</NavLink>
            </li>
          </ul>
          <div className='nav-sidebar-bottom-title'>
            <img src={img3} alt='' />
            <Link className='navsidebar-bottom-titleaccount' to='/purchase'>
              My Purchases
            </Link>
          </div>
          <div className='nav-sidebar-bottom-title'>
            <img src={img4} alt='' />
            <Link className='navsidebar-bottom-titleaccount' to='/notification'>
              Notifications
            </Link>
          </div>
          <div className='nav-sidebar-bottom-title'>
            <img src={img5} alt='' />
            <Link className='navsidebar-bottom-titleaccount'>My Vouchers</Link>
          </div>
          <div className='nav-sidebar-bottom-title'>
            <img src={img6} alt='' />
            <Link className='navsidebar-bottom-titleaccount'>
              My Shopee Coins
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavSideBar
