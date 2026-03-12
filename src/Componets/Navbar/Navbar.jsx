import "./Navbar.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import One from "../../images/Desserts.jpg"
import Two from "../../images/Pizza.jpg"
import Three from "../../images/Cake.jpg"
import Four from "../../images/Burger.jpg"
import five from "../../images/South.jpg"
import Six from "../../images/Samosa.jpg"
import Seveen from "../../images/Pasta.jpg"
import Eight from "../../images/Noodles.jpg"
import Nine from "../../images/Coffee.jpg"
import Ten from "../../images/Paratha.jpg"



function Navbar() {
    return (
        <>
            <div className="NavbarMain">
                <b id="NavbarTextOne">Order our best food options</b>
                <div id="NavbarOne">
                    <div id="NavbarBoxOne"><IoIosArrowRoundForward id="NavbarBoxTwoIcon" /></div>
                    <div id="NavbarBoxTwo"><IoIosArrowRoundBack id="NavbarBoxTwoIcon" /></div>
                </div>
                <div className="NavbarTwo">
                    <div id="NavbarTwoOne"><img src={One} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Two} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Three} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Four} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={five} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Six} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Seveen} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Eight} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Nine} alt="" /></div>
                    <div id="NavbarTwoOne"><img src={Ten} alt="" /></div>
                    




                </div>
            </div>
        </>
    )
}
export default Navbar;