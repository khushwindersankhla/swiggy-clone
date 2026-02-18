import "./Mainpage.css"
import vegtable from "../../images/vegtableImage.jpg"
import VegtableTwo from "../../images/vegtabletwo.jpg"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { useState } from "react";




function Mainpage() {

    const [showBox, setShowBox] = useState(false);

    function hideshow() {
        setShowBox(!showBox);
    }
    return (
        <>
            <div className="Mainpage">
                <div id="image-one">
                    <img src={vegtable} alt="" />
                </div>
                <div id="image-two">
                    <h1 id="discover">Order food. Discover best restaurants. Swiggy it!</h1>
                    <div className="inputBox">

                        <div id="inputOne" onClick={hideshow} style={{ cursor: "pointer" }}>
                            <FaLocationDot id="loaction" />
                            <b id="place">enter your delevery loaction</b>
                            <IoIosArrowDown id="arrow" />

                        </div>
                        <div id="inputTwo">
                            <b id="search">Search for restaurant, item or more</b>
                            <IoSearchOutline id="item"/>

                        </div>
                        {showBox && (<div className="boxHide">
                            <FaLocationArrow id="use" />

                            <b id="current">Use my current loaction</b>
                            
                        </div>)}
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