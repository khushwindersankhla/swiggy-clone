import "./OurBusinesses.css"
import OurOne from "./OurBusinessesImage/swiggyOOone.jpg"
import OurTwo from "./OurBusinessesImage/Hdfc.jpg"
import OurThree from "./OurBusinessesImage/Group.jpg"
import OurFour from "./OurBusinessesImage/home.jpg"
import OurFive from "./OurBusinessesImage/flavourCopy.jpg"
import OurSix from "./OurBusinessesImage/swiggyOneONe.jpg"
function OurBusinesses() {
  return (
    <>
      <div className="OurMainText">
        <h1 id="headingTextMain">DELIVERING FOR EVERYONE </h1>
        <p id="paraTextMain">Multiple benefits across the ecosystem for consumers, partners and riders</p>
      </div>

      <div className="OurBoxTwo">
        <div id="OurBoxOneOne"> <img src={OurOne} alt="" id="OurBoxOneOneImage" /><button id="OurBoxOneOnebtn"><b>Swiggy One</b></button></div>
        <div id="OurBoxOneOne"><img src={OurTwo} alt="" id="OurBoxOneOneImageTwo" /><button id="OurBoxOneTwobtn"><b>HDFC Credit Card</b></button></div>
        <div id="OurBoxOneOne"><img src={OurThree} alt="" id="OurBoxOneOneImageThree" /><button id="OurBoxOneOnebtn"><b>Ride With Swiggy</b></button></div>
        <div id="OurBoxOneOne"><img src={OurFour} alt="" id="OurBoxOneOneImageFour" /><button id="OurBoxOneFourbtn"><b>Partner Programme </b></button></div>
        <div id="OurBoxOneOne"><img src={OurFive} alt="" id="OurBoxOneOneImageFive" /><button id="OurBoxOneFivebtn"><b>Flavour Meets Fame</b></button></div>
      </div>
      <div className="OurBoxThreeSwiggy">
        <div className="OurBoxThreeOneSwiggy">
          <div className="OurBoxThreeOneOneSwiggy"><img src={OurSix} alt="" /></div>
          <div className="OurBoxThreeOneTwoSwiggy">
            <b id="OurBoxThreeOneTwoHeadingSwiggy">Swiggy One</b>
            <p id="OurBoxThreeOneTwoparaSwiggy">Swiggy One is our membership programme, accessible across offerings, that<br />
              offers members discounts and promotions on our platform, including free<br />
              delivery on select orders. Users can become Swiggy One members by paying <br />
              a membership fee.</p>
              <button id="OurBoxThreeOneTwoBtngy"><p>Know more</p></button>
          </div>
        </div>
      </div>

      
    </>
  )
}
export default OurBusinesses;