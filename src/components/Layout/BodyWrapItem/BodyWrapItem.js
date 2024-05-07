import "./BodyWrapItem.scss"
import BodyWrapItemContent from "./BodyWrapItemContent/BodyWrapItemContent"
import BodyWrapItemTitle from "./BodyWrapItemTitle/BodyWrapItemTitle"
function BodyWrapItem() {
  return (
    <>
      <div className='body-wrap-item-container'>
        <div className='body-wrap-item'>
          <BodyWrapItemTitle />
          <BodyWrapItemContent />
        </div>
      </div>
    </>
  )
}

export default BodyWrapItem
