import "./Mainpage.css"
import vegtable from "../../images/vegtableImage.jpg"
import VegtableTwo from "../../images/vegtabletwo.jpg"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io";



function Mainpage() {
    return (
        <>
            <div className="Mainpage">
                <div id="image-one">
                    <img src={vegtable} alt="" /> 
                </div>
                <div id="image-two">
                    <h1 id="discover">Order food. Discover best restaurants. Swiggy it!</h1>
                    <div className="inputBox">
                      
                    <div id="inputOne">
                       <FaLocationDot id="loaction" />
                       <b id="place">enter your delevery loaction</b>
                       <IoIosArrowDown id="arrow" />

                    </div>
                     <div id="inputTwo"></div>
                     <div className="boxHide"></div>
                    </div>
                </div>
                <div id="image-three">
                    <img src={VegtableTwo} alt="" />
                </div>
            </div>
        </>
    )
}
export default Mainpage;