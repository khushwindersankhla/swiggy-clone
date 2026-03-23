import "./AboutSwiggy.css"
import Aboutlogo from "./../../images/AboutSwiggyLogo.jpg"
import MapImage from "./../../images/mapImage.jpg"
import FoodCopy from "./../../images/foodCopy.jpg"
import DineOut from "./../../images/dineoutCopy.jpg"
import Done from "./../../images/bannerr.jpg"
import LogoSwiggyName from "./../../images/swiggySign.jpg"
import Scenes from "./../../images/ScenesNew.jpg"
function AboutSwiggy() {
  return (
    <>
      <div className="AboutSwiggyHeaderMai">
        <div id="AboutSwiggyLogo"><img src={Aboutlogo} alt="" /></div>
        <a href="" id="menuu"><b>About Swiggy</b></a>
        <a href="" id="menu"><b>Our Businsses</b></a>
        <a href="" id="menu"><b>DElivering For Everyone</b></a>
        <a href="" id="menu"><b>New Room</b></a>
        <a href="" id="menu"><b>Investor Relations</b></a>
        <a href="" id="menu"><b>Sustainability</b></a>
        <a href="" id="menu"><b>Contact Us</b></a>
      </div>

      <div className="AboutSwiggyNavbar">
        <div id="boxxo"></div>
        <b id="USs">About Us</b>
        <p id="neww">Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platfrom, accessible,through a unifird app.</p>
        <img src={FoodCopy} alt="" id="ImagswiggyMap" />
        <img src={DineOut} alt="" id="ImageSwiggyOne" />
        <img src={Done} alt="" id="ImageSwiggyTwo" />
        <img src={LogoSwiggyName} alt="" id="ImageSwiggyThree" />
        <img src={Scenes} alt="" id="ImageSwiggyFour" />
        <img src={MapImage} alt="" />
      </div>
      <div className="ipoBox">
        <h1 id="NOCC">
          IPO DELIVERRED-NOVERMBER 2024
        </h1>
      </div>
      <div className="SwiggyVedioBox">
        <div className="swiggyBoxVedio">
          <video width="888" height="500" border-radius="10" controls muted>
            <source
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="AboutSwiggytextOne">
        <b id="knoww">GET TO KNOW US</b>
      </div>
    </>
  )
}
export default AboutSwiggy;