import "./Footer.scss"
import FooterCategories from "./FooterCategories/FooterCategories"
import FooterBanner from "./FooterBanner/FooterBanner"
import FooterBottom from "./FooterBottom/FooterBottom"
import FooterInfo from "./FooterInfo/FooterInfo"
import FooterPolicy from "./FooterPolicy/FooterPolicy"
function Footer() {
  return (
    <>
      <FooterBanner />
      <FooterCategories />
      <FooterBottom />
      <FooterInfo />
      <FooterPolicy />
    </>
  )
}

export default Footer
