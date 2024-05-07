import { Link, NavLink } from "react-router-dom"

function FooterBanner() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-wrap'>
          <h4 className='footer-title'>
            SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE
          </h4>
          <p className='footer-content'>
            Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và
            miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông
            Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực
            <b>
              Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan,
              Brazil, México & Colombia
            </b>
            . Với sự đảm bảo của Shopee, bạn sẽ mua hàng trực tuyến an tâm và
            nhanh chóng hơn bao giờ hết!
          </p>
          <h4 className='footer-title'>
            MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
          </h4>
          <p className='footer-content'>
            Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến
            thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là
            trang thương mại điện tử cho phép người mua và người bán tương tác
            và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi
            của shop. Do đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn
            giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi
            trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng
            sản phẩm chính hãng, uy tín,
            <NavLink>
              <b>Shopee Mall</b>
            </NavLink>
            chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng
            khi tìm hiểu và sử dụng sản phẩm,
            <NavLink>
              Shopee Blog - trang blog thông tin chính thức của Shopee
            </NavLink>
            - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng
            thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal
            giá tốt bất ngờ.
          </p>
          <p className='footer-content'>
            Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao
            giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán
            ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có
            thể tự <NavLink>tạo chương trình khuyến mãi trên Shopee</NavLink> để
            thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng
            nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản
            phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các
            hoạt động của shop.
          </p>
          <p className='footer-content'>
            Bên cạnh đó, Shopee hợp tác với nhiều đơn vị vận chuyển uy tín trên
            thị trường như <NavLink>SPX</NavLink>,... nhằm cung cấp dịch vu giao
            nhận và vận chuyển tiện lợi cho cả khách hàng và người bán. Cùng với
            nhiều ưu đãi với chi phí giao hàng hợp lý, Shopee đảm bảo cho khách
            hàng trải nghiệm mua sắm thuận tiện nhất.
          </p>
          <h4 className='footer-title'>
            TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
          </h4>
          <ul className='footer-content'>
            Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc,
            mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán
            hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn
            có những ưu điểm sau:
            <li className='footer-content-list'>
              Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy
              được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô
              tìm kiếm, giỏ hàng hoặc tính năng chat liền tay
            </li>
            <li className='footer-content-list'>
              Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi
              trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là
              người bán hàng rất linh hoạt, dễ dàng
            </li>
            <li className='footer-content-list'>
              Cập nhập thông tin khuyến mãi,{" "}
              <NavLink to='./flashsale'>Shopee Flash Sale</NavLink> nhanh chóng
              và liên tục.
            </li>
          </ul>
          <p className='footer-content'>
            Tại Shopee, bạn có thể lưu các <NavLink>mã giảm giá</NavLink>,
            <NavLink>Voucher Xtra</NavLink> và{" "}
            <NavLink>mã miễn phí vận chuyển</NavLink> toàn quốc. Bên cạnh đó,
            Shopee cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như{" "}
            <NavLink>Sale 2.2</NavLink>, <NavLink>Sale 3.3</NavLink>,{" "}
            <NavLink>Sale 4.4</NavLink>, <NavLink>Sale 5.5</NavLink>,{" "}
            <NavLink>Sale 6.6</NavLink>, <NavLink>Sale 7.7</NavLink>,{" "}
            <NavLink>Sale 8.8</NavLink>, <NavLink>Sale 9.9</NavLink>,
            <NavLink>Sale 10.10</NavLink>, <NavLink>Sale 11.11</NavLink>,
            <NavLink>Sale Sinh Nhật 12.12</NavLink>;{" "}
            <NavLink>Khuyến Mãi Tết</NavLink> thả ga săn sale{" "}
            <NavLink>quà Tết</NavLink> chất lượng. Đây là thời điểm để người mua
            hàng có thể nhanh tay chọn ngay cho mình những mặt hàng ưa thích với
            mức giá giảm kỉ lục. Ngoài ra, bạn còn có thể thỏa thích săn sale
            vào các ngày trong tháng như <NavLink>Sale giữa tháng</NavLink> và
            <NavLink>Sale cuối tháng đón lương về</NavLink>, hoặc đón xem
            <NavLink>Shopee Live</NavLink> để săn hàng ngàn deal hời giá sốc.{" "}
          </p>
          <h4 className='footer-title'>
            MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE{" "}
          </h4>
          <p className='footer-content'>
            Bên cạnh <NavLink>Shopee Premium</NavLink>, Shopee còn có rất nhiều
            khuyến mãi khủng cho <NavLink>hàng hiệu giảm đến 50%</NavLink>. Cộng
            với mã giao hàng miễn phí, Shopee cũng có các mã giảm giá được phân
            phối mỗi tháng từ rất nhiều gian hàng chính hãng tham gia chương
            trình khuyến mãi này. Bên cạnh đó, Shopee còn tập hợp rất nhiều
            thương hiệu đình đám được các nhà bán lẻ uy tín phân phối bán trên
            Shopee, <NavLink>top sản phẩm hot deal cho bạn săn sale</NavLink>{" "}
            luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa chọn đa
            dạng, từ các hãng mỹ phẩm nổi tiếng hàng đầu như{" "}
            <NavLink>Kiehl's</NavLink>, <NavLink>MAC</NavLink>,{" "}
            <NavLink>Foreo</NavLink>, <NavLink>SK-II</NavLink>,{" "}
            <NavLink>Estee Lauder</NavLink>,... Đến những thương hiệu công nghệ
            nổi tiếng như: <NavLink>camera hành trình Gopro</NavLink>,{" "}
            <NavLink>máy ảnh Fuifilm</NavLink>,{" "}
            <NavLink>webcam Hikvision</NavLink>,{" "}
            <NavLink>máy đọc sách Kindle</NavLink>,... Tại Shopee, bạn có thể dễ
            dàng tìm thấy các thương hiệu giày thể thao phổ biến hiện nay như:
            <NavLink>New Balance</NavLink>, <NavLink>Nike</NavLink>,{" "}
            <NavLink>Vans</NavLink>, <NavLink>Crocs</NavLink>,...{" "}
          </p>
          <h4 className='footer-title'>
            MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
          </h4>
          <p className='footer-content'>
            Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang
            có nhu cầu mua bất kỳ mặt hàng <NavLink>thời trang nam</NavLink>,
            <NavLink>thời trang nữ</NavLink>, <NavLink>đồng hồ</NavLink>,{" "}
            <NavLink>điện thoại</NavLink>, <NavLink>máy tính & laptop</NavLink>
            ,... thì Shopee cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng
            ý. Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng
            đầu thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể
            đến Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G, Biti’s,...Các
            thương hiệu này hiện cũng đã có cửa hàng chính thức trên Shopee Mall
            với hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một
            kênh bán hàng uy tín, Shopee luôn cam kết mang lại cho khách hàng
            những trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi
            thông tin về người bán và người mua đều được bảo mật tuyệt đối. Các
            hoạt động giao dịch thanh toán tại Shopee luôn được đảm bảo diễn ra
            nhanh chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn
            quan tâm đó chính là mua hàng trên Shopee có đảm bảo không.
          </p>
          <p className='footer-content'>
            Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là Shopee
            Mall đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ
            nhà bán hàng. Ngoài ra, Shopee bảo vệ người mua và người bán bằng
            cách giữ số tiền giao dịch đến khi người mua xác nhận đồng ý với đơn
            hàng và không có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào.
            Thanh toán sau đó sẽ được chuyển đến cho người bán. Đến với Shopee
            ngay hôm nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm
            sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên Shopee
            Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận nơi và 7 ngày
            miễn phí trả hàng. Ngoài ra, khách hàng có thể sử dụng{" "}
            <NavLink>Shopee Xu</NavLink> để đổi lấy mã giảm giá có giá trị cao
            và voucher dịch vụ hấp dẫn. Tiếp đến là{" "}
            <NavLink>Shopee Video</NavLink>, <NavLink>Shopee Live</NavLink>,
            <NavLink>Shopee Home Club</NavLink>,{" "}
            <NavLink>Shopee Mum Club</NavLink>,{" "}
            <NavLink>Shopee Beauty Club</NavLink> và{" "}
            <NavLink>Shopee Book Club</NavLink> với các ưu đãi độc quyền từ các
            thương hiệu lớn có những khách hàng đã đăng ký làm thành viên. Hãy
            truy cập ngay Shopee Việt Nam hoặc tải ngay ứng dụng Shopee về điện
            thoại ngay hôm nay!{" "}
          </p>
          <h4 className='footer-title'>TOP THƯƠNG HIỆU NỔI BẬT</h4>
          <div>
            <u className='footer-content'>
              <Link>Philips</Link> | <Link>Deerma</Link> | <Link>L'Oréal</Link>{" "}
              |<Link>Kiehl's</Link> | <Link>Kappa</Link> | <Link>Juno</Link> |
              <Link>Pampers</Link> | <Link>Nivea</Link> | <Link>L'Oreal</Link>
              <Link>Converse</Link> | <Link>Biti's</Link> | <Link>Owen</Link> |
              <Link>Pedro</Link> | <Link>New Balance</Link> |{" "}
              <Link>adidas</Link> | <Link>Samsung</Link> | <Link>Sunhouse</Link>{" "}
              | <Link>Xiaomi</Link> | <Link>Oreo</Link> | <Link>Nike</Link> |
              <Link>Pantio</Link> | <Link>Supreme</Link> | <Link>PUMA</Link> |
              <Link>Kindle</Link> | <Link>DHC</Link> | <Link>Transino</Link> |
              <Link>Martiderm</Link> | <Link>Paula’s</Link> <Link>Choice</Link>{" "}
              | <Link>The Ordinary</Link> | <Link>KitKat</Link> |{" "}
              <Link>Teelab</Link> | <Link>SomeHow</Link> | <Link>Elise</Link> |
              <Link>YODY</Link> | <Link>Coolmate</Link> |{" "}
              <Link>MARC Fashion</Link> | <Link>Vergency</Link> |{" "}
              <Link>Scott Platon</Link> | <Link>GUMAC</Link> |{" "}
              <Link>Vascara</Link> | <Link>MWC</Link> | <Link>Shondo</Link> |{" "}
              <Link>CANIFA</Link> | <Link>Sablanca</Link> |{" "}
              <Link>OLV Boutique</Link> | <Link>Pandora</Link> |{" "}
              <Link>Bear</Link> | <Link>Santagift</Link> |{" "}
              <Link>Mlen diary</Link> | <Link>Rhys man</Link> |{" "}
              <Link>Bamozo</Link> | <Link>Colorkey</Link> |{" "}
              <Link>The Weird Studio</Link>| <Link>OOKAS</Link> |{" "}
              <Link>Aperire Cosmetic Vietnam</Link> | <Link>Yuumi</Link> |{" "}
              <Link>Ezviz</Link>| <Link>Venson</Link> | <Link>Hobebar</Link> |
              <Link>YOWXII</Link> | <Link>Ventas</Link> |{" "}
              <Link>Laura Sunshine</Link> | <Link>Vijully</Link>
            </u>
            <h4 className='footer-title'>TOP TỪ KHÓA XU HƯỚNG</h4>
            <u className='footer-content'>
              <Link>hasaki</Link> | <Link>ghế giám đốc</Link> |{" "}
              <Link>hoa tulip trắng</Link>| <Link>didongviet</Link> |{" "}
              <Link>kem chống nắng</Link> | <Link>vnb</Link> |{" "}
              <Link>áo bóng đá</Link> | <Link>guardian</Link> |{" "}
              <Link>pharmacity</Link> |<Link>myherbalife</Link> |{" "}
              <Link>chiếu trúc</Link> |<Link>chiếu điều hoà</Link> |{" "}
              <Link>vợt cầu lông</Link> | <Link>tủ nhựa duy tân</Link> |{" "}
              <Link>ghế văn phòng</Link> | <Link>hoa linh lan</Link> |{" "}
              <Link>tokyolife</Link>| <Link>áo chống nắng</Link> |{" "}
              <Link>coolmate</Link> | <Link>hoa tulip</Link> |{" "}
              <Link>chiếu mây</Link> | <Link>sim viettel</Link> |{" "}
              <Link>giấy dán tường</Link>| <Link>bikini</Link> |{" "}
              <Link>bánh sinh nhật</Link>| <Link>hoa hồng</Link> |
              <Link>chiếu điều hòa</Link> | <Link>sen đá</Link> |{" "}
              <Link>con cưng</Link> | <Link>hoa sứ</Link>
            </u>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBanner
