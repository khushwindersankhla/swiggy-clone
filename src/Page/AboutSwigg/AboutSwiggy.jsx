import "./AboutSwiggy.css"
import Aboutlogo from "./../../images/AboutSwiggyLogo.jpg"
import MapImage from "./../../images/mapImage.jpg"
import FoodCopy from "./../../images/foodCopy.jpg"
import DineOut from "./../../images/dineoutCopy.jpg"
import Done from "./../../images/bannerr.jpg"
import LogoSwiggyName from "./../../images/swiggySign.jpg"
import Scenes from "./../../images/ScenesNew.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";
import Delevery from "./../../images/MissionDevliveryBoy.jpg"
// import React, { useState } from "react";
import Group from "./../../images/Group.jpg"
import React, { useEffect, useState, useRef } from "react";
import Foodd from "./../../images/FoodImage.jpg"
import FoodOneSilder from "./../../images/instamart.jpg"
import FoodOneSilderTwo from "./../../images/swiggyOne.jpg"
import swiggyMinis from "./../../images/swiggyMinis.jpg"
import bank from "./../../images/bank.jpg"
import star from "./../../images/sliderStar.jpg"
import { IoIosArrowRoundBack } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";

function AboutSwiggy() {

  const [active, setActive] = useState("mission");

  const [order, setOrder] = useState(0);
  const [restaurants, setRestaurants] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [cities, setCities] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setOrder(prev => {
        let increment = 3000000000 / 100; // fast + smooth
        return prev < 3000000000 ? prev + increment : 3000000000;
      });

      setRestaurants(prev => {
        let increment = 238000 / 100;
        return prev < 238000 ? prev + increment : 238000;
      });

      setDelivery(prev => {
        let increment = 520000 / 100;
        return prev < 520000 ? prev + increment : 520000;
      });

      setCities(prev => {
        let increment = 718000 / 100;
        return prev < 718000 ? prev + increment : 718000;
      });

    }, 10); // 🔥 speed yaha control hoti hai

    return () => clearInterval(interval);
  }, []);

  const sliderRef = useRef(null);

  function next() {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  }

  function Pre() {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  }
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
          <video width="888" height="500" controls muted>
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


      <div className="MissionMain">
        <div id="MissionOne">
          <b id="Miss" onClick={() => setActive("mission")}>Mission</b>
          <IoIosArrowRoundForward id="MissIcon" />
          <hr id="lines" />
          <b id="Miss" onClick={() => setActive("vision")}>Vision</b>
          <IoIosArrowRoundForward id="MissIcon" />
          <hr id="lines" />
          <b id="Miss" onClick={() => setActive("values")}>Values</b>
          <IoIosArrowRoundForward id="MissIcon" />
          <hr id="lines" />
        </div>
        <div id="MissionTwo">
          {active === "mission" && (<div id="MissionTwoTwo">
            <p id="lifeee">Our mission is to elevate the quality of life of the urban<br />
              consumer by offering unpapalleled conveience.<br />
              Convenience is what makes us tikIT's what makes us<br />
              frt out of bed and say,"let's do this.</p>
            <div id="MissionDeliveryBoyImage"><img src={Delevery} alt="" /></div>
          </div>)}
          {active === "vision" && (<div id="MissionTwoThree">
            <iframe id="Missss"
              width="700"
              height="450"
              src="https://www.youtube.com/embed/fLz2fgU_x1Q"
              title="YouTube video"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>)}

          {active === "values" && (<div id="MissionTwofour">
            <p id="backbone">Our action are strongly defined by the Swigy<br />
              values. Through ups,downs,and everything in<br />
              between Swiggsters put these values into<br />
              practice in thier everyday ways of working.<br />
              read on to get a taste of how Swiggssters live<br />
              and breathe these valuues and how it forms the<br />
              backbone of our culture.</p>


            <iframe id="EmployeeVedio"
              width="700"
              height="450"
              src="https://www.youtube.com/embed/fLz2fgU_x1Q"
              title="YouTube video"
              frameborder="0"
              allowfullscreen>
            </iframe>
            <button id="Missionbtn"><b>konw More</b></button>
          </div>)}
          <hr id="lastline" />
        </div>
      </div>

      <h1 id="industry">IDUSTRY PIONEER</h1>
      <div className="hyperbox">
        <div id="hyperBoxText">
          <p id="ondians">BEing among the first few entrants, Swiggy has successfully<br />
            pioneered the hyperlocal commerce industry in india, launching <br />
            food Delivery in 2014 and uick commerce in2 2020. Due to the <br />
            pioneering status of Swiggy, i is well-recoised as a leaeder<br />
            im innovation in hyperlocal commmerce and a category-defining<br />
            brand: tusted, intuitive and deeepply embedded in the daily <br />
            routies of millions of ondians.</p>
        </div>
        <div id="hyperBoxImage"> <img src={Group} alt="" /></div>
      </div>

      <div className="Restaurant">
        <div id="Resta">
          <h1 id="billo">  {Math.floor(order / 1000)} Billion + </h1>
          <p id="order"> orders delivered</p>
        </div>
        <hr id="Restaline" />
        <div id="Resta">
          <h1 id="billo">  {Math.floor(restaurants / 1000)}k+ </h1>
          <p id="order"> restaurant partners</p>
        </div>
        <hr id="Restaline" />
        <div id="Resta">
          <h1 id="billo">  {Math.floor(delivery / 1000)}k+ </h1>
          <p id="order">delivery partners</p>
        </div>
        <hr id="Restaline" />
        <div id="Resta">
          <h1 id="billo"> {Math.floor(cities / 1000)}k+ </h1>
          <p id="order">cities in India</p>
        </div>
        <hr id="Restaline" />
      </div>

      <div className="SwiggyMonths">
        <h1 id="journey">THE SWIGGY JOURNEY</h1>
      </div>
      <div className="SilderBoxsMain" ref={sliderRef}>
        <button id="btnSilder" onClick={Pre}><IoIosArrowRoundBack id="perIcon"/></button>
        <button id="btnSilderTwo" onClick={next}><IoIosArrowRoundForward id="perIcon"/></button>
        <div id="SilderBoxOne">
          <p id="food">Launch of our Food <br />delivery business</p>
          <img src={Foodd} alt="" id="ImageFood" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of Swiggy<br /> Instamart and Swiggy<br /> Genie</p>
          <img src={FoodOneSilder} alt="" id="ImageFoodOne" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of membership<br/> programme Siggu One</p>
          <img src={FoodOneSilderTwo} alt="" id="ImageFoodd" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Acquisition and intehration <br/>of Dineouton Swiggy app </p>
          <img src={swiggyMinis} alt="" id="ImageFood" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of Swiggy HDFC Bank<br/> cp-branded credit <br/>card</p>
          <img src={bank} alt="" id="ImageFooddd" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of Bolt and Swiggy<br/> Scenes</p>
          <img src={star} alt="" id="ImageFoodba" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Swiggy platfrom crossed<br/> 123 million ever transacted <br/>users</p>
          <img src={Foodd} alt="" id="ImageFoodga" />
        </div>

      </div>
    </>
  )
}
export default AboutSwiggy;