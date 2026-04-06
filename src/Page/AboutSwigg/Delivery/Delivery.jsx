import "./Delivery.css";
import Footer from "../../../Componets/Footer/Footer";
// import Aboutlogo from ""
import swiggyone from "../../images-2/swiggy-one.webp";
import hdfc from "../../images-2/Hdfc.webp";
import ride from "../../images-2/Group-1000006480.webp";
import partner from "../../images-2/home-2-300x300.webp";
import flavour from "../../images-2/flavour-300x258.webp";
import hdfc2 from "../../images-2/hdfcs-card-768x714.webp";
import ride2 from "../../images-2/Desktop-3-768x513.png";
import partner2 from "../../images-2/swiggy-768x699 (1).png";
import flavour2 from "../../images-2/Flavour Meets Fame.png";
function Delivery() {
  return (
    <>
      {/* <div className="Deliveryheader">
        <div id="DeliveryheaderLogo"></div>
        <a href="" id="menuu"><b>About Swiggy</b></a>
        <a href="" id="menu"><b>Our Businsses</b></a>
        <a href="" id="menu"><b>DElivering For Everyone</b></a>
        <a href="" id="menu"><b>New Room</b></a>
        <a href="" id="menu"><b>Investor Relations</b></a>
        <a href="" id="menu"><b>Sustainability</b></a>
        <a href="" id="menu"><b>Contact Us</b></a>
      </div> */}

      {/* hero section */}
      <div id="Deliveryherosection">
        <h1 className="Deliveryherosection-heading">Delivering for everyone</h1>
        <p className="Deliveryherosection-pragrap">
          At Swiggy, we are committed to providing the best delivery experience
          to everyone, everywhere.
        </p>
        <div id="Deliveryherosectionbox">
          <div className="Deliveryherosectionbox1">
            <div className="Deliveryherosectionbox1-top">
              <img src={swiggyone} alt="" />
            </div>
            <div className="Deliveryherosectionbox1-bootem">Swiggy one</div>
          </div>
          <div className="Deliveryherosectionbox1">
            <div className="Deliveryherosectionbox1-top">
              <img src={hdfc} alt="" />
            </div>
            <div className="Deliveryherosectionbox1-bootem">
              HDFC Cretid card
            </div>
          </div>
          <div className="Deliveryherosectionbox1">
            <div className="Deliveryherosectionbox1-top">
              <img src={ride} alt="" />
            </div>
            <div className="Deliveryherosectionbox1-bootem">
              Ride with Swiggy
            </div>
          </div>
          <div className="Deliveryherosectionbox1">
            <div className="Deliveryherosectionbox1-top">
              <img src={partner} alt="" />
            </div>
            <div className="Deliveryherosectionbox1-bootem">
              Partner Programme
            </div>
          </div>
          <div className="Deliveryherosectionbox1">
            <div className="Deliveryherosectionbox1-top">
              <img src={flavour} alt="" />
            </div>
            <div className="Deliveryherosectionbox1-bootem">Flavour</div>
          </div>
        </div>
      </div>

      {/* swiggy one section */}
      <section id="Deliveryswiggyone">
        <div id="Deliveryswiggyone-img">
          <img src={swiggyone} alt="" />
        </div>
        <div id="Deliveryswiggyone-content">
          <h1>Swiggy One</h1>
          <p>
            Swiggy One is our membership programme, accessible across offerings,
            that offers members discounts and promotions on our platform,
            including free delivery on select orders. Users can become Swiggy
            One members by paying a membership fee.
          </p>
          <button id="Deliveryswiggyone-btn">Know More</button>
        </div>
      </section>

      {/* hdfc bank cardit card  */}
      <section id="Deliveryhdfc">
        <div id="Deliveryhdfc-content">
          <h1>HDFC Bank Credit Card</h1>
          <p>
            Get ready to experience the awesome world of cashback and benefits
            with the Swiggy HDFC Bank Credit Card!
          </p>
          <button id="Deliveryhdfc-btn">apply now </button>
        </div>
        <div id="Deliveryhdfc-img">
          <img src={hdfc2} alt="" />
        </div>
      </section>

      {/* ride with swiggy section */}
      <section id="Deliveryride">
        <div id="Deliveryride-content">
          <h1>Ride with Swiggy</h1>
          <p>
            Join our platform and earn regular payouts with exciting bonuses and
            incentives, along with other benefits
          </p>
          <button id="Deliveryride-btn">Learn More</button>
        </div>
        <div id="Deliveryride-img">
          <img src={ride2} alt="" />
        </div>
      </section>

      {/*Swiggy Restaurant Partner Programme  */}
      <section id="Deliverypartner">
        <div id="Deliverypartner-img">
          <img src={partner2} alt="" />
        </div>
        <div id="Deliverypartner-content">
          <h1>Swiggy Restaurant Partner Programme</h1>
          <p>
            Our unified app approach enables our partner base to benefit from a
            larger user base across offerings, flexible and larger logistics and
            delivery network, and tools to expand their businesses.
          </p>
          <button id="Deliverypartner-btn">Partner with Us</button>
        </div>
      </section>

      {/* Flavour Meets Fame */}
      <section id="Deliveryflavour">
        <div id="Deliveryflavour-content">
          <h1>Flavour Meets Fame</h1>

          <p>
            If you ever wanted to thank your favourite restaurants and wondered
            how, here’s your chance to express your love by casting a vote for
            them.
          </p>
          <button id="Deliveryflavour-btn">Know More</button>
        </div>
        <div id="Deliveryflavour-img">
          <img src={flavour2} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Delivery;
