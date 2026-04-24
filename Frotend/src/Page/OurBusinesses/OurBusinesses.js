import "./OurBusinesses.css"
import OurOne from "./OurBusinessesImage/swiggyOOone.jpg"
import OurTwo from "./OurBusinessesImage/Hdfc.jpg"
import OurThree from "./OurBusinessesImage/Group.jpg"
import OurFour from "./OurBusinessesImage/home.jpg"
import OurFive from "./OurBusinessesImage/flavourCopy.jpg"
import OurSix from "./OurBusinessesImage/swiggyOneONe.jpg"
import OurSeveeb from "./OurBusinessesImage/HDFCCard.jpg"
import OurEight from "./OurBusinessesImage/DeveliverflayBoy.jpg"
import Ournine from "./OurBusinessesImage/Boy&Gril.jpg"
import ourTen from "./OurBusinessesImage/OurScan.png"
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

      <div className="OurBoxFourSwiggy">
        <div className="OurBoxFourSwiggOne">
          <div className="OurBoxFourSwiggOneOne">
            <b id="OurBoxFourSwiggOneOneHDFC">HDFC Bank Credit Card</b>
            <p id="OurBoxFourSwiggOneOneHDFCpara">Get ready to experience the awesome world of cashback<br />
              and benefits with the Swiggy HDFC Bank Credit Card!</p>
            <button id="OurBoxFourSwiggOneOnebtn"><b>Apply Now</b></button>
          </div>
          <div className="OurBoxFourSwiggOneTwo"><img src={OurSeveeb} alt="" /></div>
        </div>
      </div><hr />

      <div className="OurBoxFiveSwiggy">
        <div className="OurBoxFiveSwiggyOne">
          <b id="OurBoxFiveSwiggyOneOne">Ride with Swiggy</b>
          <p id="OurBoxFiveSwiggyOnePara">Join our platform and earn regular payouts with exciting bonuses and
            incentives, along with other benefits</p>
          <button id="OurBoxFiveSwiggyOnebtn"><b>Apply Now</b></button>
        </div>
        <div className="OurBoxFiveSwiggyTwo"><img src={OurEight} alt="" /></div>

      </div><hr />
      <div className="OurBoxSixSwiggy">
         <div className="OurBoxSixSwiggyOne">
     <img src={Ournine} alt="" />
         </div>
           <div className="OurBoxSixSwiggyTwo">
            <b id="OurBoxSixSwiggyTwoBlod">Swiggy Restaurant Partner Programme</b>
            <p id="OurBoxSixSwiggyTwopara">Our unified app approach enables our partner base to benefit from a <br/>
            larger user base across offerings, flexible and larger logistics and<br/>
             delivery network, and tools to expand their businesses.</p>
             <button id="OurBoxSixSwiggyTwoBtn"><b>Partner with us</b></button>
           </div>
      </div>
    <div className="OurBoxSeveenSwiggy">
      <img src={ourTen} alt="" />

    </div>
    </>
  )
}
export default OurBusinesses;