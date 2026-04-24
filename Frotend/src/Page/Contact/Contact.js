import "./Contact.css"
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import ConOne from "./ContactImage/yogaDay.jpg"
import ConTow from "./ContactImage/Sandwichcontact.jpg"

function Contact() {
    return (
        <>
            <div className="ContactMain">
                <div className="ContactOne">
                    <h1> Customer Support</h1>
                    <span><h2>Email:</h2><h2 id="supportHeading"> support@swiggy.in</h2></span>
                    <h2 id="Find">Find us on</h2>
                    <span><FaLinkedin id="Facebool" /><FaInstagram id="Facebool" /><FaFacebookSquare id="Facebool" /><FaXTwitter id="Facebool" /></span>
                    <h2 id="Corporate">Corporate Office</h2>
                    <p id="Sumadhura">Sumadhura Capitol Towers, 3rd- 6th Floor – Tower 1, Sy. No. 14 & 158, <br />
                        Pattanduru Agrahara, K R Puram Hobli, Bengaluru  East Taluk, Bengaluru, <br />
                        Karnataka – 560066.</p>
                    <p id="Corporate">Corporate Identity Number: L74110KA2013PLC096530 Registration Number: 096530</p>
                    <button id="CorporateBtn"><b>Get Diretions</b></button>
                    <img src={ConOne} alt="" id="DaOne" />
                </div>
                <div className="ContactTwo">
                    <div className="ContactTwoOne">
                        <img src={ConTow} alt="" id="ImageBoxSSs"/>
                        <h1>Get in touch</h1>
                        <input type="text" placeholder="Enter Name" id="inputOne" />
                        <br /><br />
                        <input type="text" placeholder="Enter Email Address" id="inputOne" />
                        <textarea id="inputTwo" placeholder="Enter Message"></textarea>
                       <button id="submit">Submit</button>
                       <p id="contacting">By contacting us you agree to the Terms and <br/>Conditions and Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;