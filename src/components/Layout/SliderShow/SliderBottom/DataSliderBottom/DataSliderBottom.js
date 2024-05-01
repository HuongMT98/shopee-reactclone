import { NavLink } from "react-router-dom"
import img1 from "../../../../../Assets/SliderBottom/slidebottom.png"
import img2 from "../../../../../Assets/SliderBottom/slidebottom1.png"
import img3 from "../../../../../Assets/SliderBottom/slidebottom2.png"
import img4 from "../../../../../Assets/SliderBottom/slidebottom3.png"
import img5 from "../../../../../Assets/SliderBottom/slidebottom4.png"
import img6 from "../../../../../Assets/SliderBottom/slidebottom5.png"
import img7 from "../../../../../Assets/SliderBottom/slidebottom6.png"
import img8 from "../../../../../Assets/SliderBottom/slidebottom7.png"
function DataSliderBottom() {
  const Data = [
    {
      id: 1,
      image: img1,
      title: "Voucher Giảm Đến 500.000Đ",
    },
    {
      id: 2,
      image: img2,
      title: "Miễn Phí Ship-Có Shopee",
    },
    {
      id: 3,
      image: img3,
      title: "Shopee Siêu Rẻ",
    },
    {
      id: 4,
      image: img4,
      title: "Khung Giờ Săn Sale",
    },
    {
      id: 5,
      image: img5,
      title: "Mã Giảm Giá",
    },
    {
      id: 6,
      image: img6,
      title: "Hàng Hiệu Outlet Giảm 50%",
    },
    {
      id: 7,
      image: img7,
      title: "Quốc Tế Deal Siêu Rẻ",
    },
    {
      id: 8,
      image: img8,
      title: "Nạp Thẻ, Dịch Vụ & Vé Xe Khách",
    },
  ]

  return (
    <div className='slider-bottom-content'>
      {Data.map((item) => (
        <div key={item.id} className='slider-bottom-container'>
          <NavLink to='/voucher'>
            <div className='slider-bottom-img'>
              <img src={item.image} alt='' />
            </div>
            <div className='slider-bottom-title'>
              <p>{item.title}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default DataSliderBottom
