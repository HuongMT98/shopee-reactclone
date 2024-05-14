import DataSliderBottom from "./DataSliderBottom/DataSliderBottom"
import "./SliderBottom.responsive.scss"

function SliderBottom() {
  return (
    <>
      <div className='slider-bottom-wrap'>
        <div className='slider-bottom-wrap-all'>
          <div className='slider-bottom'>
            <DataSliderBottom />
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderBottom
