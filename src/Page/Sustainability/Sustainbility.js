import "./Sustainability.css"
import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import SusOne from "./SustainabilityImage/slideImageOne.jpg"
import SusTwo from "./SustainabilityImage/slideImageTwo.jpg"
import SusThree from "./SustainabilityImage/slideImageThree.jpg"
import SusFour from "./SustainabilityImage/GirlsImage.jpg"
import SusFive from "./SustainabilityImage/BoysImage.jpg"
function Sustainability() {

  return (
    <>
      <div className="SustainabilityOne">
        <span><h1 id="SustainabilityOneHeading">Delivering Unparalleled Convenience,</h1><h1 id="Respo">Responsibly.</h1></span>
        <p id="SustainabilityOnepara">Sustainability is fundamental to how we grow, responsibly and intentionally. It guides our<br />
          operational priorities and shapes everything we do, strengthening our ecosystem, boosting<br />
          resilience and building lasting trust.</p>
        <div className="SustainabilityOneVedio">
          <iframe

            width="560"
            height="315"
            src="https://www.youtube.com/embed/MijX48j2u2g"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="SustainabilityTwo"><h1><hr id="OurLineOne" /> OUR IMPACT <hr id="OurLineTwo" /></h1></div>


      <div className="SustainabilityThree">
        <div className="SustainabilityThreeMain">

          <div className="SustainabilityThreeOne">
            <p id="Safely">Delivering Safely</p>
            <h1 id="cr">18 Cr</h1>
            <h4 id="Insur">Insur claims<br /> disbursed in F25.</h4>
            <div id="BtnOneGreen"><FaArrowUp id="Fly" /></div>
          </div>
          <div className="SustainabilityThreeOneOne"><img src={SusOne} alt="" /></div>
          <div className="SustainabilityThreeOne">
            <p id="Safely">Climate Impact </p>
            <h1 id="cr">4,483</h1>
            <h4 id="Insur">tCOe emissions avoided in<br /> FY25 through EV adoption.</h4>
            <div id="BtnOneGreen"><FaArrowUp id="Fly" /></div>
          </div>
          <div className="SustainabilityThreeOne">
            <p id="Safely">She The Change </p>
            <h1 id="cr">50,000+</h1>
            <h4 id="Insur">Creating ~300,000jobs</h4>
            <div id="BtnOneGreenOne"><FaArrowUp id="Fly" /></div>
          </div>
          <div className="SustainabilityThreeOneOne"><img src={SusTwo} alt="" /></div>
          <div className="SustainabilityThreeOne">
            <p id="Safely">Emergency Respones</p>
            <h1 id="cr">11 Min</h1>
            <h4 id="Insur">Sos respones time</h4>
            <div id="BtnOneGreenTwo"><FaArrowUp id="Fly" /></div>
          </div>
          <div className="SustainabilityThreeOne">
            <p id="Safely">Quality & Trust </p>
            <h1 id="cr">295,000</h1>
            <h4 id="Insur">295,000 uality certified <br />reastaurants accredited in<br /> FY25.</h4>
            <div id="BtnOneGreenThree"><FaArrowUp id="Fly" /></div>
          </div>
          <div className="SustainabilityThreeOneOne"><img src={SusThree} alt="" /></div>
          <div className="SustainabilityThreeOne">
            <p id="Safely">Governance </p>
            <h1 id="cr">ISO 270001</h1>
            <h4 id="Insur">Certified & DPDP Act <br />Compliant</h4>
            <div id="BtnOneGreenFour"><FaArrowUp id="Fly" /></div>
          </div>

        </div>
      </div>

      <div className="SustainabilityFour"><hr id="OurLineOneONe" /><h1>Our Sustainability Pillars</h1><hr id="OurLineOneTwo" /></div>
      <div className="SustainabilityFive">
        <div className="SustainabilityFiveOne">
          <h2 id="CLIMATE">CLIMATE</h2>
          <p id="smarter">Building smarter, cleaner systems<br /> that help us all thrive.</p>
          <button id="smarterBtnOne">Konw more</button>
        </div>
        <div className="SustainabilityFiveOne">
          <h2 id="CLIMATE">COMMUNITY</h2>
          <p id="smarter">Building inclusive, resilient ecosystems where growth is shared and everyone thrives alongside us.</p>
          <button id="smarterBtntwo">Konw more</button>
        </div>
        <div className="SustainabilityFiveOne">
          <h2 id="CLIMATE">CONSCIENCE</h2>
          <p id="smarter">Building trust through strong governance, transparency, and principled decisions, driving innovation and growth the right way.</p>
          <button id="smarterBtnThree">Konw more</button>
        </div>

      </div>

      <div className="SustainabilitySix"> <hr id="REport"/><h1>Reports & Publications</h1><hr id="REpot"/></div>
      <div className="SustainabilitySeveen">
        <div className="SustainabilitySeveenOne">
          <h2>Joy Delivered. Spreading Smiles Across India.</h2>
          <p>Swiggy’s FY2025 BRSR Report</p>
          <button>Veiw Report</button>
          <img src={SusFour} alt="" />
        </div>
      </div>
       <div className="card">
      
      <div className="left">
        <h2>For Sustainability<br />Related Queries</h2>
      </div>

      <div className="divider"></div>

      <div className="right">
        <h3>Contact Details:</h3>
        <h4>Neha Singhvi</h4>
        <p>
          Vice President – Public Affairs, ESG & Corporate Communications
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <span className="email">sustainability@swiggy.in</span>
        </p>
      </div>

    </div>
    <div className="SustainabilityEight"><img src={SusFive} alt="" /></div>
    </>
  )
}
export default Sustainability;