import { NavLink } from "react-router-dom"
import "./FooterBottom.responsive.scss"
import img1 from "../../../../Assets/FooterBottom/footer-bottom1.png"
import img2 from "../../../../Assets/FooterBottom/footer-bottom2.png"
import img3 from "../../../../Assets/FooterBottom/footer-bottom3.png"
import img4 from "../../../../Assets/FooterBottom/footer-bottom4.png"
import img5 from "../../../../Assets/FooterBottom/footer-bottom5.png"
import img6 from "../../../../Assets/FooterBottom/footer-bottom6.png"
import img7 from "../../../../Assets/FooterBottom/footer-bottom7.png"
import img8 from "../../../../Assets/FooterBottom/footer-bottom8.png"
import img9 from "../../../../Assets/FooterBottom/footer-bottom9.png"
import img10 from "../../../../Assets/FooterBottom/footer-bottom10.png"
import img11 from "../../../../Assets/FooterBottom/footer-bottom11.png"
import img12 from "../../../../Assets/FooterBottom/footer-bottom12.png"
import img13 from "../../../../Assets/FooterBottom/footer-bottom13.png"
import img14 from "../../../../Assets/FooterBottom/footer-bottom14.png"
import img15 from "../../../../Assets/FooterBottom/footer-bottom15.png"
import img16 from "../../../../Assets/FooterBottom/footer-bottom16.png"
import img17 from "../../../../Assets/FooterBottom/footer-bottom17.png"
import img18 from "../../../../Assets/FooterBottom/footer-bottom18.png"
import img19 from "../../../../Assets/FooterBottom/footer-bottom19.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import img20 from "../../../../Assets/DownloadApp/QRcode.png"
import img21 from "../../../../Assets/DownloadApp/appstore.png"
import img22 from "../../../../Assets/DownloadApp/googleplay.png"
import img23 from "../../../../Assets/DownloadApp/AppGallery.png"

function FooterBottom() {
  return (
    <>
      <div className='footer-bottom-container'>
        <div className='footer-bottom'>
          <div className='footer-bottom-wrap'>
            <div className='footer-bottom-item'>
              <h4 className='footer-bottom-title'>CUSTOMER SERVICE</h4>
              <div className='footer-bottom-list'>
                <NavLink>Help Centre</NavLink>
                <NavLink>Shopee Blog</NavLink>
                <NavLink>Shopee Mall</NavLink>
                <NavLink>How To Buy</NavLink>
                <NavLink>How To Sell</NavLink>
                <NavLink>Payment</NavLink>
                <NavLink>Shopee Coins</NavLink>
                <NavLink>Shipping</NavLink>
                <NavLink>Return & Refund</NavLink>
                <NavLink>Contact Us</NavLink>
                <NavLink>Warranty Policy</NavLink>
              </div>
            </div>
            <div className='footer-bottom-item'>
              <h4 className='footer-bottom-title'>ABOUT SHOPEE</h4>
              <div className='footer-bottom-list'>
                <NavLink>About Us</NavLink>
                <NavLink>Shopee Careers</NavLink>
                <NavLink>Shopee Policies</NavLink>
                <NavLink>Privacy Policy</NavLink>
                <NavLink>Shopee Mall</NavLink>
                <NavLink>Seller Centre</NavLink>
                <NavLink>Flash Deals</NavLink>
                <NavLink>Shopee Ambassador Programme</NavLink>
                <NavLink>Media Contact</NavLink>
              </div>
            </div>
            <div className='footer-bottom-item'>
              <div>
                <h4 className='footer-bottom-title'>PAYMENT</h4>
                <div className='footer-bottom-list-card'>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img1} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img2} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img3} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img4} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img5} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img6} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img7} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img8} alt='' />
                  </div>
                </div>
              </div>
              <div>
                <h4 className='footer-bottom-title'>LOGISTICS</h4>
                <div className='footer-bottom-list-card'>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img9} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img10} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img11} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img12} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img13} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img14} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img15} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img16} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img17} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img18} alt='' />
                  </div>
                  <div className='footer-bottom-list-card-img'>
                    <img src={img19} alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-bottom-item'>
              <h4 className='footer-bottom-title'>FOLLOW US</h4>
              <div className='footer-bottom-list'>
                <div className='footer-bottom-list-social'>
                  <FontAwesomeIcon icon={faFacebook} />
                  <NavLink>Facebook</NavLink>
                </div>
                <div className='footer-bottom-list-social'>
                  <FontAwesomeIcon icon={faInstagram} />
                  <NavLink>Instagram</NavLink>
                </div>
                <div className='footer-bottom-list-social'>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <NavLink>Linkedin</NavLink>
                </div>
              </div>
            </div>
            <div className='footer-bottom-item'>
              <h4 className='footer-bottom-title'>SHOPEE APP DOWNLOAD</h4>
              <div className='footer-bottom-list-wrap'>
                <div className='footer-bottom-list'>
                  <NavLink>
                    <img src={img20} alt='' />
                  </NavLink>
                </div>
                <div className='footer-bottom-list-right'>
                  <NavLink>
                    <img src={img21} alt='' />
                  </NavLink>
                  <NavLink>
                    <img src={img22} alt='' />
                  </NavLink>
                  <NavLink>
                    <img src={img23} alt='' />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBottom
