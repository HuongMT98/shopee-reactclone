import { Link } from "react-router-dom"
import LOGO from "../../components/Layout/Nav/NavBottom/NavLogo/LOGO"
import "./SignUpPage.scss"
import SignUpPageContent from "./SignUpPageContent/SignUpPageContent"
import FooterBottom from "../../components/Layout/Footer/FooterBottom/FooterBottom"
import FooterInfo from "../../components/Layout/Footer/FooterInfo/FooterInfo"
import FooterPolicy from "../../components/Layout/Footer/FooterPolicy/FooterPolicy"
function SignUpPage() {
  return (
    <>
      <div className='sign-up-page'>
        <div className='sign-up-page-container'>
          <div className='sign-up-pagelogo'>
            <Link to='/'>
              <LOGO />
            </Link>
            <h1 className='signup-logo-title'>Sign Up</h1>
          </div>
        </div>
      </div>
      <SignUpPageContent />
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default SignUpPage
