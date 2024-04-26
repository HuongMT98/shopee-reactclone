import "./Categories.scss"
import CategoriesSlider from "./CategoriesSlider/CategoriesSlider"

function Categories() {
  return (
    <div className='categories-container'>
      <div className='categories'>
        <div className='categories-title'>
          <h4>CATEGORIES</h4>
        </div>
        <div className='categories-slider'>
          <CategoriesSlider />
        </div>
      </div>
    </div>
  )
}

export default Categories
