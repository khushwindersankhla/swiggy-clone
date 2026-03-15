  import "./Footer.css"
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
function Footer(){
    return(
        <>
        <div className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2 className="logo">Swiggy</h2>
          <p>© 2025 Swiggy Limited</p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Swiggy Corporate</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Dineout</p>
          <p>Minis</p>
          <p>Pyng</p>
        </div>

        <div className="footer-col">
          <h3>Contact us</h3>
          <p>Help & Support</p>
          <p>Partner With Us</p>
          <p>Ride With Us</p>

          <h3 className="legal">Legal</h3>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-col">
          <h3>Available in:</h3>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>

          <button className="city-btn">685 cities ⌄</button>
        </div>

        <div className="footer-col">
          <h3>Life at Swiggy</h3>
          <p>Explore With Swiggy</p>
          <p>Swiggy News</p>
          <p>Snackables</p>

          <h3 className="social">Social Links</h3>

          <div className="icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>

      </div>
    </div>
        </>
    )
}
export default Footer;