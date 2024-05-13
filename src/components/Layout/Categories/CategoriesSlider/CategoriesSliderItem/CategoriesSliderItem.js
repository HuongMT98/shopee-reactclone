import img1 from "../../../../../Assets/Categories/categories1.png"
import img2 from "../../../../../Assets/Categories/categories2.png"
import img3 from "../../../../../Assets/Categories/categories3.png"
import img4 from "../../../../../Assets/Categories/categories4.png"
import img5 from "../../../../../Assets/Categories/categories5.png"
import img6 from "../../../../../Assets/Categories/categories6.png"
import img7 from "../../../../../Assets/Categories/categories7.png"
import img8 from "../../../../../Assets/Categories/categories8.png"
import img9 from "../../../../../Assets/Categories/categories9.png"
import img10 from "../../../../../Assets/Categories/categories10.png"
import img11 from "../../../../../Assets/Categories/categories11.png"
import img12 from "../../../../../Assets/Categories/categories12.png"
import img13 from "../../../../../Assets/Categories/categories13.png"
import img14 from "../../../../../Assets/Categories/categories14.png"
import img15 from "../../../../../Assets/Categories/categories15.png"
import img16 from "../../../../../Assets/Categories/categories16.png"
import img17 from "../../../../../Assets/Categories/categories17.png"
import img18 from "../../../../../Assets/Categories/categories18.png"
import img19 from "../../../../../Assets/Categories/categories19.png"
import img20 from "../../../../../Assets/Categories/categories20.png"
import img21 from "../../../../../Assets/Categories/categories21.png"
import img22 from "../../../../../Assets/Categories/categories22.png"
import img23 from "../../../../../Assets/Categories/categories23.png"
import img24 from "../../../../../Assets/Categories/categories24.png"
import img25 from "../../../../../Assets/Categories/categories25.png"
import img26 from "../../../../../Assets/Categories/categories26.png"
import img27 from "../../../../../Assets/Categories/categories27.png"

import Slider from "react-slick"
import { Link } from "react-router-dom"

function CategoriesSliderItem() {
  const dataCategori = [
    {
      id: 1,
      image: img1,
      title: "Men Clothes",
    },
    {
      id: 2,
      image: img2,
      title: "Women Clothes",
    },
    {
      id: 3,
      image: img3,
      title: "Mobile & Gadgets",
    },
    {
      id: 4,
      image: img4,
      title: "Moms, Kids & Babies",
    },
    {
      id: 5,
      image: img5,
      title: "Consumer Electronics",
    },
    {
      id: 6,
      image: img6,
      title: "Home & Living",
    },
    {
      id: 7,
      image: img7,
      title: "Computer & Accessories",
    },
    {
      id: 8,
      image: img8,
      title: "Beauty",
    },
    {
      id: 9,
      image: img9,
      title: "Cameras",
    },
    {
      id: 10,
      image: img10,
      title: "Health",
    },
    {
      id: 11,
      image: img11,
      title: "Watches",
    },
    {
      id: 12,
      image: img12,
      title: "Women Shoes",
    },
    {
      id: 13,
      image: img13,
      title: "Men Shoes",
    },
    {
      id: 14,
      image: img14,
      title: "Women Bags",
    },
    {
      id: 15,
      image: img15,
      title: "Home Appliances",
    },
    {
      id: 16,
      image: img16,
      title: "Fashion Accessories",
    },
    {
      id: 17,
      image: img17,
      title: "Sport & Outdoor",
    },
    {
      id: 18,
      image: img18,
      title: "Grocery",
    },
    {
      id: 19,
      image: img19,
      title: "Automotive",
    },
    {
      id: 20,
      image: img20,
      title: "Books & Stationery",
    },
    {
      id: 21,
      image: img21,
      title: "Men Bags",
    },
    {
      id: 22,
      image: img22,
      title: "Kid Fashion",
    },
    {
      id: 23,
      image: img23,
      title: "Toys",
    },
    {
      id: 24,
      image: img24,
      title: "Home care",
    },
    {
      id: 25,
      image: img25,
      title: "Pets",
    },
    {
      id: 26,
      image: img26,
      title: "Tickets, Vouchers & Services",
    },
    {
      id: 27,
      image: img27,
      title: "Tools & Home Improvement",
    },
  ]

  const settings = {
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 5,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
        },
      },
    ],
  }

  return (
    <>
      <div className='slider-container'>
        <Slider {...settings}>
          {dataCategori.map((item) => {
            return (
              <div className='category-slider-wrap-all' key={item.id}>
                <div className='category-content'>
                  <div className='category-slider-img'>
                    <Link to={`/categories`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                  </div>
                  <p>{item.title}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default CategoriesSliderItem
