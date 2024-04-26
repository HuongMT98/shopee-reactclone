import React from "react"

import "../../Categories/Categories.scss"
import CategoriesSliderItem from "./CategoriesSliderItem/CategoriesSliderItem"

function CategoriesSlider() {
  return (
    <div className='categories-slider-wrap'>
      <CategoriesSliderItem />
    </div>
  )
}

export default CategoriesSlider
