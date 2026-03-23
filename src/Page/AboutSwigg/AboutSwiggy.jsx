import "./AboutSwiggy.css"
import Aboutlogo from "./../../images/AboutSwiggyLogo.jpg"
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

      <div className="AboutSwiggyNavbar"></div>
    </>
  )
}
export default AboutSwiggy;