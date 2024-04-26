import DataSliderBottom from "../../../../Assets/SliderBottom/Data"

function SliderBottom() {
  return (
    <>
      <div className='slider-bottom-wrap'>
        <div className='slider-bottom-wrap-all'>
          {/* {DataSliderBottom &&
            DataSliderBottom.map((item) => (
              <div key={item.id} className='slider-bottom-container'>
                <div className='slider-bottom-img'>
                  <img src={item.img} alt='img' />
                </div>
                <div className='slider-bottom-title'>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </>
  )
}

export default SliderBottom
