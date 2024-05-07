import { NavLink } from "react-router-dom"

function FooterInfo() {
  return (
    <>
      <div className='footer-info-container'>
        <div className='footer-info'>
          <div>
            <h5 className='footer-info-title'>
              © 2024 Shopee. All Rights Reserved .
            </h5>
          </div>
          <div>
            <h5 className='footer-info-title'>
              Country & Region: <NavLink>Singapore</NavLink> |
              <NavLink>Indonesia</NavLink> | <NavLink>Thailand</NavLink> |
              <NavLink>Malaysia</NavLink> |<NavLink>Vietnam</NavLink> |{" "}
              <NavLink>Philippines</NavLink> |<NavLink>Brazil</NavLink> |
              <NavLink>México</NavLink> | <NavLink>Colombia</NavLink>
              <NavLink>Chile</NavLink> | <NavLink>Taiwan</NavLink>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterInfo
