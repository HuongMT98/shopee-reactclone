import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ScrollToTop from "react-scroll-up"

function ScrollToTopBtn() {
  return (
    <div className='scroll-to-top-btn'>
      <ScrollToTop showUnder={160}>
        <span className='icon-up'>
          <FontAwesomeIcon icon={faCaretUp} />
        </span>
      </ScrollToTop>
    </div>
  )
}

export default ScrollToTopBtn
