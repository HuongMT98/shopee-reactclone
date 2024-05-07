import { NavLink } from "react-bootstrap"

function FooterPolicy() {
  return (
    <>
      <div className='footer-policy-container'>
        <div className='footer-policy'>
          <div className='footer-policy-list'>
            <NavLink>PRIVACY POLICY</NavLink> |
            <NavLink>TERM OF SERVICE</NavLink> |
            <NavLink>SHIPPING POLICY</NavLink> |<NavLink>VIOLATION</NavLink>
          </div>
          <div className='footer-policy-item'>
            <p className='footer-policy-text'>Shopee Company Limited</p>
          </div>
          <div className='footer-policy-item'>
            <p className='footer-policy-text'>
              Floors 4-5-6, Capital Place Building, No. 29, Lieu Giai Street,
              Ngoc Khanh ward, Ba Dinh District, Hanoi, Vietnam
            </p>
          </div>
          <div className='footer-policy-item'>
            <p className='footer-policy-text'>
              Person in charge of information management: Nguyen Duc Tri
            </p>
          </div>
          <div className='footer-policy-item'>
            <p className='footer-policy-text'>
              Business Registration Certificate No: 0106773786
            </p>
          </div>
          <div>
            <p className='footer-policy-text'>
              © 2015 - Copyright belongs to Shopee Company Limited
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterPolicy
