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
import ManagerOne from "./../../images/managementImage.jpg"
import ManagerTwo from "./../../images/managementTwo.jpg"
import MangerThree from "./../../images/managementImageThree.jpg"
import ManagerFour from "./../../images/managementImageFour.jpg"
import ManagerFive from "./../../images/managementImageFive.jpg"
import ManagerSeveen from "./../../images/managementImageSeveen.jpg"
import ManagerSix from "./../../images/managementImgaeSix.jpg"
import Career from "./../../images/careerAtSwiggy.jpg"
import CardOne from "./../../images/CardImageOne.jpg"
import CardTwo from "./../../images/CardImageTwo.jpg"
import CardThree from "./../../images/CardImageThree.jpg"
import ScanImage from "./../../images/ScanImage.jpg"
import Map from "./../../images/LoactionImage.jpg"
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

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
        <button id="btnSilder" onClick={Pre}><IoIosArrowRoundBack id="perIcon" /></button>
        <button id="btnSilderTwo" onClick={next}><IoIosArrowRoundForward id="perIcon" /></button>
        <div id="SilderBoxOne">
          <p id="food">Launch of our Food <br />delivery business</p>
          <img src={Foodd} alt="" id="ImageFood" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of Swiggy<br /> Instamart and Swiggy<br /> Genie</p>
          <img src={FoodOneSilder} alt="" id="ImageFoodOne" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of membership<br /> programme Siggu One</p>
          <img src={FoodOneSilderTwo} alt="" id="ImageFoodd" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Acquisition and intehration <br />of Dineouton Swiggy app </p>
          <img src={swiggyMinis} alt="" id="ImageFood" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of Swiggy HDFC Bank<br /> cp-branded credit <br />card</p>
          <img src={bank} alt="" id="ImageFooddd" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Launch of Bolt and Swiggy<br /> Scenes</p>
          <img src={star} alt="" id="ImageFoodba" />
        </div>
        <div id="SilderBoxOne">
          <p id="food">Swiggy platfrom crossed<br /> 123 million ever transacted <br />users</p>
          <img src={Foodd} alt="" id="ImageFoodga" />
        </div>

      </div>



      <div className="BunisenssBox"><b id="Detalis">Detalis of Business</b><hr id="redline" /></div>

      <div className="TemaBtn">
        <button id="TeamBtnOne"><b>Management Team</b></button>
        <button id="TeamBtnTwo"><b>Board of Directors</b></button>
      </div>
      <div className="BoardSilderMain">
        <button id="BoardBtn"></button>
        <div id="BoardSilderTwo"><img src={ManagerOne} alt="" /><b id="Rahul">Sriharsha Majety</b><p id="Manga">Managing Director and<br /> Group CEO</p></div>
        <div id="BoardSilderOne"><img src={ManagerTwo} alt="" /><b id="Rahul">Nandan Reddy </b><p id="Manga">Managing Director and Group CEO</p></div>
        <div id="BoardSilderOne"><img src={MangerThree} alt="" /><b id="Rahul">Rohiy Kapoor</b><p id="Manga">CEO- Food Marketplace</p></div>
        <div id="BoardSilderOne"><img src={ManagerFour} alt="" /><b id="Rahul">Phani Kishan</b><p id="Manga">Chief Growth Office</p></div>
        <div id="BoardSilderOne"><img src={ManagerFive} alt="" /><b id="Rahul">Rahul Bathro</b><p id="Manga">Chief Financial OFficer</p></div>
        <div id="BoardSilderOne"><img src={ManagerSix} alt="" /><b id="Rahul">Madhusudhan Rao</b><p id="Manga">Chief Technology Officer</p></div>
        <div id="BoardSilderOne"><img src={ManagerSeveen} alt="" /><b id="Rahul">Girish Menon</b><p id="Manga">Chief Human Reseach Officer</p></div>
      </div><hr />

      <div className="CareersMain"><b id="att">CAREERS AT SWIGGY</b></div>
      <div className="TextImageBox">
        <div id="TextImageOne">
          <p id="join">
            When you work at Swiggy, you’re joining a culture of innovation,
            teamwork, and endless possibilities. We believe in empowering our
            employees to take charge of their careers and make a real impact.
            Whether you’re a software engineer, a marketing guru, a logistics
            expert, or someone who loves delivering exceptional customer experiences,
            there’s a place for you at Swiggy.</p>

          <p id="Excited">If you’re excited about making a difference
            and want to be part of a team that’s transforming the way people live, then
            we want to hear from you!</p>

          <p id="Delivery">Explore our current openings and embark
            on your next career adventure with Swiggy. Let’s deliver unparalleled
            convenience together!</p>

          <button id="moree"><b>know more</b></button>
        </div>
        <div id="TextImageTwo">
          <img src={Career} alt="" id="Careeer" />
        </div>

      </div><hr />

      <div className="Blog"><b id="blogg">SWIGGY BLOG</b></div>

      <div className="SwiggyCardMain">
        <div id="SwiggyCardMainOne">
          <img src={CardOne} alt="" id="SwiggyCardImage" />
          <p id="Oct">October 12,2024</p>
          <b id="Cult">Bridging cultures through cuisine:<br /></b>

          <b id="Cultt"> The Nasi and Mee Story</b><br />

          <button id="CardBtn"><b>Read more</b></button>
        </div>
        <div id="SwiggyCardMainOne">
          <img src={CardTwo} alt="" id="SwiggyCardImage" />
          <p id="Oct">October 12,2024</p>
          <b id="Cult">Hiring from 1x to 10x via Swiggy's <br /></b>

          <b id="Cultt">Future Proofing Strategy</b><br />
                    <button id="CardBtn"><b>Read more</b></button>

        </div>
        <div id="SwiggyCardMainOne">
          <img src={CardThree} alt="" id="SwiggyCardImage" />
          <p id="Oct">October 12,2024</p>
          <b id="Culty">Taking Local Campaigns to the<br /></b>
          <b id="Culty">National Stage,Ft.Rana Bayas,</b> <br />
          <b id="Culty"> Senior Area sales Manager at</b><br />
          <b id="Culty">Swiggy</b><br />
           <button id="CardBtnOne"><b>Read more</b></button>
          </div>
      </div>
      <div className="ExploreBtn"><button id="ExploreBtnOne"><b>Explore</b></button></div>
      <div className="ScaanBoxImage"><img src={ScanImage} alt="" /></div>
      <div className="TouchText"><b id="fITT">GET IN TOUCH WITH US</b></div>

      <div className="LoactionBox">
        <div id="LoactionBoxOne">
          <b id="Addd">Head Office Address:</b>
          <p id="Ground">SwiggyLimited (Formerly known as Bundl Technologies Private Limited & Swiggy rivate Limited )<br/>
            No. 55 Sy No 8 o 14 | & J Block-Ground Floor,Embassy Tech Village| <br/>
            Out Ring Road, Devarisanahalli, Bengaluru-560103
          </p>
          <b id="Add">For help and support:</b>
          <p id="Eamil">Email: support@swiggy.in</p>
        </div>
          <div id="LoactionBoxTwo">
            <div id="LoactionBoxTwoTwo"><img src={Map} alt="" /></div>
          </div>
      </div>


      {/* Footer........................................... */}
       <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-logo">
          <h2>Swiggy</h2>
          <p>© 2026 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Investor Relations</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h3 className="mt">Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Cities */}
        <div className="footer-col">
          <h3>Available in:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
          
            <li>Pune</li>
          </ul>
          <button className="city-btn">679 cities</button>
        </div>

        {/* Life at Swiggy */}
        <div className="footer-col">
          <h3>Life at Swiggy</h3>
          <ul>
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h3 className="mt">Social Links</h3>
          <div className="social-icons">
            <FaLinkedin />
      <FaInstagram />
      <FaFacebook />
      <FaPinterest />
      <FaTwitter />
          </div>
        </div>

      </div>
    </footer>
    
    </>
  )
}
export default AboutSwiggy;