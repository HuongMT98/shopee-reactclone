import shoppeNotification1 from "../../../../../Assets/shoppe-notification-1.jpg"
import shoppeNotification2 from "../../../../../Assets/shoppe-notification-2.png"
import shoppeNotification3 from "../../../../../Assets/shoppe-notification-3.png"

function NotificationContent() {
  const username = "Nguyen Van A"
  const notifications = [
    {
      id: 1,
      title: `${username} ơi khoan hẳn ngủ nha`,
      image: shoppeNotification1,
      content:
        "💥Sắp tới giờ săn sale cuối tháng rùiii 🌟Anessa, Samsung, Coolmate..giảm đến 50% 🌸5 mã Freeship đến 300.000đ 💸Khung giờ sale khủng - Chốt đơn 'tỉnh người'",
    },
    {
      id: 2,
      title: `😊 ${username} ơi, cho Shopee hỏi nhỏ`,
      image: shoppeNotification2,
      content:
        '✨ Các chương trình của Shopee có "ghi điểm" trong lòng bạn? Hãy chia sẻ ý kiến TẠI ĐÂY để giúp Shopee cải thiện hơn nữa nhé!',
    },
    {
      id: 3,
      title: `TẶNG ${username} MÃ 100K CHỐT ĐƠN ĐÓN LỄ`,
      image: shoppeNotification3,
      content:
        "🎫Khi nhập FMCGA500K cho đơn từ 500.000đ 💰Thêm loạt mã giảm 20.000đ, Freeship cực đã 💥Khám phá và mua ngay TẠI ĐÂY!",
    },
    {
      id: 4,
      title: `ĐẠI LỄ CẬN KỀ - LÊN ĐỒ ĐI CHƠI THÔI`,
      image: shoppeNotification3,
      content:
        "🤷‍♀️Outfit cực chất, xinh hết nấc 🥰Lên đồ đi chơi 30/4 1/5 ngay hôm nay 📢Bỏ giỏ hàng chờ sale siêu ưu đãi",
    },
    {
      id: 5,
      title: `🎁 ${username} MÃ 100K CHỐT ĐƠN ĐÓ LỄ`,
      image: shoppeNotification1,
      content:
        "Nhớ vài lưu ý, Lễ vui đặt hàng🛒🇻🇳. Bỏ túi ngay các lưu ý cho dịp Lễ 30.4 & 1.5 sắp tới TẠI ĐÂY bạn nhé!",
    },
  ]

  return (
    <div>
      {notifications.map((notification) => (
        <div key={notification.id} className='box-notification'>
          <div>
            <img
              src={notification.image}
              alt=''
              className='image-notification'
            />
          </div>
          <div>
            <div className='boxwrap-notification'>
              <h5 className='title-notification'>{notification.title}</h5>
              <p className='content-notification'>{notification.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotificationContent
