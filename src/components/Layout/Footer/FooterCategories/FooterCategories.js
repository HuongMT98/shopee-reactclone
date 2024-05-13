import { Link, NavLink } from "react-router-dom"
import "./FooterCategories.repsonsive.scss"

function FooterCategories() {
  return (
    <>
      <div className='footer-categories-container'>
        <div className='footer-categories'>
          <h4 className='footer-categories-title'>Footer Categories</h4>
          <div className='footer-categories-list'>
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>MEN CLOTHES</Link>
              <div>
                <NavLink>Pants & Leggings</NavLink> | <NavLink>Shorts</NavLink>|{" "}
                <NavLink>Skirts</NavLink> | <NavLink>Jeans</NavLink> |{" "}
                <NavLink>Dresses</NavLink> | <NavLink>Wedding Dresses</NavLink>{" "}
                | <NavLink>Jumpsuits</NavLink>,{" "}
                <NavLink>Playsuits & Overalls</NavLink> |{" "}
                <NavLink>Jackets</NavLink>, <NavLink>Coats & Vests</NavLink> |
                <NavLink>Sweaters & Cardigans</NavLink> |{" "}
                <NavLink>Hoodies & Sweatshirts</NavLink>|{" "}
                <NavLink>Sets</NavLink> |{" "}
                <NavLink>Lingerie & Underwear</NavLink> |{" "}
                <NavLink>Sleepwear & Pajamas</NavLink> | <NavLink>Tops</NavLink>{" "}
                | <NavLink>Sportwear</NavLink> |{" "}
                <NavLink>Maternity Wear</NavLink> |{" "}
                <NavLink>Traditional Wear</NavLink> |{" "}
                <NavLink>Costumes</NavLink> | <NavLink>Fabric</NavLink> |{" "}
                <NavLink>Socks & Stockings</NavLink> | <NavLink>Others</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                WOMEN CLOTHES
              </Link>
              <div>
                <NavLink>Jackets</NavLink>, <NavLink>Coats & Vests</NavLink> |
                <NavLink>Suit Jackets & Blazers</NavLink> |{" "}
                <NavLink>Hoodies & Sweatshirts</NavLink> |{" "}
                <NavLink>Jeans</NavLink> | <NavLink>Pants/Suits</NavLink> |{" "}
                <NavLink>Shorts</NavLink>| <NavLink>Tops</NavLink> |{" "}
                <NavLink>Tanks</NavLink> |{" "}
                <NavLink>Innerwear & Underwear</NavLink> |{" "}
                <NavLink>Sleepwear</NavLink> | <NavLink>Sets</NavLink> |{" "}
                <NavLink>Socks</NavLink> | <NavLink>Traditional Wear</NavLink> |
                <NavLink>Costumes</NavLink> |{" "}
                <NavLink>Occupational Attire</NavLink> |{" "}
                <NavLink>Others</NavLink> | <NavLink>Men Jewelries</NavLink> |{" "}
                <NavLink>Eyewear</NavLink> |<NavLink>Belts</NavLink> |{" "}
                <NavLink>Neckties</NavLink>,{" "}
                <NavLink>Bow Ties & Cravats</NavLink> |{" "}
                <NavLink>Additional Accessories</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                MOBILE & GADGETS
              </Link>
              <div>
                <NavLink>Mobile Phones</NavLink> | <NavLink>Tablets</NavLink> |{" "}
                <NavLink>Powerbanks</NavLink> |{" "}
                <NavLink>Batteries, Cables & Charger</NavLink> |{" "}
                <NavLink>Cases, Covers, & Skins</NavLink> |{" "}
                <NavLink>Screen Protectors</NavLink> |{" "}
                <NavLink>Phone Holders</NavLink> |{" "}
                <NavLink>Memory Cards</NavLink> | <NavLink>Sims</NavLink> |{" "}
                <NavLink>Other Accessories</NavLink> |{" "}
                <NavLink>Other devices</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                MOMS, KIDS & BABIES
              </Link>
              <div>
                <NavLink>Baby Travel Essentials</NavLink> |{" "}
                <NavLink>Feeding Essentials </NavLink>|{" "}
                <NavLink>Maternity Accessories</NavLink> |{" "}
                <NavLink>Maternity Healthcare</NavLink>|{" "}
                <NavLink>Bath & Body Care </NavLink>| <NavLink>Nursery</NavLink>{" "}
                | <NavLink>Baby Safety</NavLink> | <NavLink>Baby Food</NavLink>{" "}
                | <NavLink>Baby Healthcare</NavLink> |{" "}
                <NavLink>Diapering & Potty</NavLink> | <NavLink>Toys</NavLink> |
                <NavLink>Gift Sets & Packages</NavLink> |{" "}
                <NavLink>Others</NavLink> |{" "}
                <NavLink>Milk 24 months and ups</NavLink> |{" "}
                <NavLink>Milk Formula 0- 24 months</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                CONSUMER ELECTRONICS
              </Link>
              <div>
                <NavLink>Wearable Devices</NavLink> |{" "}
                <NavLink>Tivi Accessories</NavLink> |{" "}
                <NavLink>Gaming & Console</NavLink> |{" "}
                <NavLink>Console Accessories</NavLink> |{" "}
                <NavLink>Video Games</NavLink> |
                <NavLink>Accessories and spare parts</NavLink> |{" "}
                <NavLink>Earphones</NavLink> | <NavLink>Audio</NavLink> |{" "}
                <NavLink>Tivi</NavLink> | <NavLink>Tivi Box</NavLink> |{" "}
                <NavLink>Headphones</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                HOME & LIVING
              </Link>
              <div>
                <NavLink>Bedding</NavLink> | <NavLink>Furniture</NavLink> |{" "}
                <NavLink>Home Decoration</NavLink> |{" "}
                <NavLink>Tools and Home improvement</NavLink>|{" "}
                <NavLink>Kitchenware and food storage</NavLink> |{" "}
                <NavLink>Lighting</NavLink> |{" "}
                <NavLink>Outdoor & Garden</NavLink> |{" "}
                <NavLink>Bathroom</NavLink> |{" "}
                <NavLink>Regilious and Worship items</NavLink> |{" "}
                <NavLink>Party supplies</NavLink>|{" "}
                <NavLink>Housekeeping and Laundry</NavLink> |{" "}
                <NavLink>Houseorganizers</NavLink> |{" "}
                <NavLink>Drinkware</NavLink> |{" "}
                <NavLink>Home Fragrance & Aromatherapy</NavLink> |{" "}
                <NavLink>Dinnerware</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                COMPUTER & ACCESSORIES
              </Link>
              <div>
                <NavLink>Desktop Computers </NavLink>|{" "}
                <NavLink>Monitors</NavLink> |{" "}
                <NavLink>Desktop & Laptop Components</NavLink> |{" "}
                <NavLink>Data Storage</NavLink> |
                <NavLink>Network Components</NavLink> |{" "}
                <NavLink>Printers, Scanners & Projectors</NavLink> |{" "}
                <NavLink>Peripherals & Accessories</NavLink> |{" "}
                <NavLink>Laptops</NavLink> | <NavLink>Others</NavLink>|{" "}
                <NavLink>Gaming</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>BEAUTY</Link>
              <div>
                <NavLink>Skincare</NavLink> |{" "}
                <NavLink>Bath & Body Care</NavLink> | <NavLink>Makeup</NavLink>{" "}
                | <NavLink>Hair Care </NavLink>|{" "}
                <NavLink>Beauty Tools & Accessories</NavLink> |{" "}
                <NavLink>Oral Care</NavLink> |{" "}
                <NavLink>Perfumes & Fragrances </NavLink>|{" "}
                <NavLink>Men's Care</NavLink> | <NavLink>Others</NavLink> |
                <NavLink>Feminine Care</NavLink> |{" "}
                <NavLink>Beauty Sets & Packages</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>CAMERAS</Link>
              <div>
                <NavLink>Cameras</NavLink> |{" "}
                <NavLink>Security Cameras & Systems </NavLink>|
                <NavLink> Memory Cards</NavLink> | <NavLink>Lenses</NavLink> |{" "}
                <NavLink>Camera Accessories</NavLink> |{" "}
                <NavLink>Drones</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>HEALTH</Link>
              <div>
                <NavLink>Medical Supplies</NavLink> |{" "}
                <NavLink>Insect Repellents</NavLink> | <p>Food Supplement</p> |
                <NavLink>Adult Diapers & Incontinence</NavLink> |{" "}
                <NavLink>Beauty Supplements </NavLink>|{" "}
                <NavLink>Sexual Wellness</NavLink> |
                <NavLink>Massage & Therapy Devices</NavLink> |{" "}
                <NavLink>Others</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>WATCHES</Link>
              <div>
                <NavLink>Men Watches</NavLink> |{" "}
                <NavLink>Women Watches</NavLink> |{" "}
                <NavLink>Set & Couple Watches</NavLink> |{" "}
                <NavLink>Kid Watches</NavLink>|{" "}
                <NavLink>Watches Accessories</NavLink> |{" "}
                <NavLink>Others</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>WOMEN SHOES</Link>
              <div>
                <NavLink>Boots</NavLink> | <NavLink>Sneakers</NavLink> |{" "}
                <NavLink>Flats</NavLink> | <NavLink>Heels</NavLink> |{" "}
                <NavLink>Wedges</NavLink> |
                <NavLink>Flat Sandals & Flip Flops</NavLink> |{" "}
                <NavLink>Shoe Care & Accessories</NavLink> |{" "}
                <NavLink>Others</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>GROCERY</Link>
              <div>
                <NavLink>Snacks</NavLink> |{" "}
                <NavLink>Convenience / Ready-to-eat</NavLink> |{" "}
                <NavLink>Food Staples</NavLink> |{" "}
                <NavLink>Cooking Essentials</NavLink> |{" "}
                <NavLink>Baking Needs</NavLink> |{" "}
                <NavLink>Dairy & Eggs</NavLink> | <NavLink>Beverages</NavLink> |
                <NavLink>Breakfast Cereals & Spread</NavLink> |{" "}
                <NavLink>Bakery</NavLink> |{" "}
                <NavLink>Alcoholic Beverages</NavLink> |{" "}
                <NavLink>Gift Set & Hampers</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>WOMEN BAGS</Link>
              <div>
                <NavLink>Backpacks</NavLink> | <NavLink>Laptop Bags</NavLink> |{" "}
                <NavLink>Clutches & Wristlets</NavLink> |{" "}
                <NavLink>Waist Bags & Chest Bags</NavLink> |{" "}
                <NavLink>Tote Bags</NavLink> |{" "}
                <NavLink>Top-handle Bags</NavLink> |{" "}
                <NavLink>Crossbody & Shoulder Bags</NavLink> |
                <NavLink>Wallets</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                HOME APPLIANCES
              </Link>
              <div>
                <NavLink>Kitchen Appliances</NavLink> |{" "}
                <NavLink>Large Appliance</NavLink> |{" "}
                <NavLink>Vacuums & Floor care</NavLink> |
                <NavLink>Air Conditioners & Fans</NavLink> |{" "}
                <NavLink>Garment Care</NavLink> | <NavLink>Others</NavLink> |
                <NavLink>Blenders, Mixers & Grinders</NavLink> |{" "}
                <NavLink>Electric Cookers</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                FASHION ACCESSORIES
              </Link>
              <div>
                <NavLink>Rings</NavLink> | <NavLink>Earrings</NavLink> |{" "}
                <NavLink>Scarves & Shawls</NavLink> | <NavLink>Gloves</NavLink>{" "}
                | <NavLink>Hair Accessories</NavLink>|{" "}
                <NavLink>Bracelets & Bangles</NavLink> |
                <NavLink>Anklets</NavLink> | <NavLink>Hats & Caps</NavLink> |{" "}
                <NavLink>Necklaces</NavLink> | <NavLink>Eyewear</NavLink> |
                <NavLink>Investment Precious Metals</NavLink> |{" "}
                <NavLink>Belts</NavLink> | <NavLink>Neckties</NavLink>,{" "}
                <NavLink>Bow Ties & Cravats</NavLink> |{" "}
                <NavLink>Additional Accessories</NavLink> |{" "}
                <NavLink>Accessories Sets & Packages</NavLink> |{" "}
                <NavLink>Others</NavLink> | <NavLink>Socks & Stockings</NavLink>{" "}
                | <NavLink>Umbrella</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                SPORT & OUTDOOR
              </Link>
              <div>
                <NavLink>Luggage</NavLink> | <NavLink>Travel Bags</NavLink> |{" "}
                <NavLink>Travel Accessories</NavLink> |{" "}
                <NavLink>Sports & Outdoor Recreation Equipments</NavLink> |
                <NavLink>Sports Footwear</NavLink> |{" "}
                <NavLink>Sports & Outdoor Apparels</NavLink> |{" "}
                <NavLink>Sports & Outdoor Accessories</NavLink> |{" "}
                <NavLink>Others</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>TOYS</Link>
              <div>
                <NavLink>Hobbies & Collectibles</NavLink> |{" "}
                <NavLink>Game Zone</NavLink> |{" "}
                <NavLink>Educational Toys</NavLink> |{" "}
                <NavLink>Baby & Toddler Toys</NavLink> |{" "}
                <NavLink>Action & Outdoor Toys</NavLink> |{" "}
                <NavLink>Dolls & Stuffed Toys</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>WOMEN BAGS</Link>
              <div>
                <NavLink>Backpacks</NavLink> | <NavLink>Laptop Bags</NavLink> |{" "}
                <NavLink>Clutches & Wristlets</NavLink> |{" "}
                <NavLink>Waist Bags & Chest</NavLink>
                <NavLink>Bags</NavLink> | <NavLink>Tote Bags</NavLink> |{" "}
                <NavLink>Top-handle Bags</NavLink> |{" "}
                <NavLink>Crossbody & Shoulder Bags</NavLink> |{" "}
                <NavLink>Wallets</NavLink> | <NavLink>Bag Accessories</NavLink>{" "}
                | <NavLink>Others</NavLink>
              </div>
            </div>{" "}
            <div className='footer-categories-item'>
              <Link className='footer-categories-title-link'>
                HOME APPLIANCES
              </Link>
              <div>
                <NavLink>Kitchen Appliances</NavLink> |{" "}
                <NavLink>Large Appliance</NavLink> |{" "}
                <NavLink>Vacuums & Floor care</NavLink> |{" "}
                <NavLink>Air Conditioners & Fans</NavLink> |{" "}
                <NavLink>Garment Care</NavLink> | <NavLink>Others</NavLink> |
                <NavLink>Blenders, Mixers & Grinders</NavLink> |{" "}
                <NavLink>Electric Cookers</NavLink>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterCategories
