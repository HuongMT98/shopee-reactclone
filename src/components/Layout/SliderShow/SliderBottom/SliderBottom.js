import SlideBot from "./SliderBottom.json"

function SliderBottom() {
  return (
    <>
      <div className='slider-bottom-wrap'>
        <div className='slider-bottom-wrap-all'>
          {SlideBot &&
            SlideBot.map((item) => (
              <div key={item.id} className='slider-bottom-container'>
                <div className='slider-bottom-img'>
                  <img src={item.img} alt='img' />
                </div>
                <div className='slider-bottom-title'>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default SliderBottom
