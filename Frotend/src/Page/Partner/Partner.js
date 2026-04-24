import "./Partner.css"
import ParOne from "./PartnerImage/PartnerBG.jpg"
import ParTwo from "./PartnerImage/swiggySImage.jpg"
import { FaCircle } from "react-icons/fa";

function Partner() {
    return (
        <>

            <div className="PartnerOne">
                <img src={ParTwo} alt="" id="imageCountmerOne" />
                <h6 id="WITH">PARTNER WITH SWIGGY!</h6>
                <h1 id="Access"> Access to Swiggy tools <br /> and support</h1>
                <div className="partertwo">
                    <h1 id="Started">Get Started</h1>
                    <p id="restaurant">Enter a mobile number or restaurant <br />ID to continue</p>
                    <input type="text" placeholder="Enter Restaurant ID/ Mobile Number" id="Restaurant" />
                    <button id="ContinueBtn"><b>Continue</b></button>
                    <p id="logging">By logging in, I agree to Swiggy’s terms & conditions</p>
                </div>
                <img src={ParOne} alt="" id="imageCountmer" />

            </div>

            <div className="container">

                {/* LEFT SIDE */}
                <div className="left">
                    <p className="small-text">In just 3 easy steps</p>
                    <h2>Get your restaurant delivery-ready in 24hrs!</h2>

                    <div className="card">

                        <div className="step">
                            <FaCircle className="icon" />
                            <div>
                                <p className="step-title">STEP 1</p>
                                <h3>Install the Swiggy Owner App</h3>
                            </div>
                        </div>

                        <div className="step">
                            <FaCircle className="icon" />
                            <div>
                                <p className="step-title">STEP 2</p>
                                <h3>Login/Register using your phone number</h3>
                            </div>
                        </div>

                        <div className="step">
                            <FaCircle className="icon" />
                            <div>
                                <p className="step-title">STEP 3</p>
                                <h3>Enter restaurant details</h3>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="right">
                    <p className="right-title">
                        For an easy form filling process,<br />
                        you can keep these documents handy.
                    </p>

                    <ul>
                        <li>FSSAI License copy <span>Apply Here</span></li>
                        <li>Your Restaurant menu</li>
                        <li>Bank details</li>
                        <li>GSTIN <span>Apply Here</span></li>
                        <li>PAN card copy</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Partner;