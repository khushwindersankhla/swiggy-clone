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
import Eleven from "../../images/VegetableFlower.jpg"
import Twelve from "../../images/mango.jpg"
import Thirten from "../../images/milk.jpg"
import Fouten from "../../images/select.jpg"
import Fiften from "../../images/puliogare.jpg"
import Sixteen from "../../images/HotelVeiw.jpg"
import Seventeen from "../../images/MahalPlace.jpg"
import Eighteen from "../../images/FoodHotel.jpg"
import { MdStars } from "react-icons/md";
import { HiMiniPercentBadge } from "react-icons/hi2";



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

            <div className="shopInstamart">
                <b id="Groceries">Shop groceries on Instamart</b>
                <div className="ShopInstamartIcon">
                    <div id="ShopIconOne"><IoIosArrowRoundBack id="NavbarBoxTwoIcon" /></div>
                    <div id="ShopIconTwo"><IoIosArrowRoundForward id="NavbarBoxTwoIcon" /></div>
                </div>
                <div className="ShopInstamartOne">
                    <div id="ShopInstamartOneOne"><img src={Eleven} alt="" /><b id="Fresh">Fresh Vegetable</b></div>
                    <div id="ShopInstamartOneOne"><img src={Twelve} alt="" /><b id="Fresh">Fresh Fruits </b></div>
                    <div id="ShopInstamartOneOne"><img src={Thirten} alt="" /><b id="Fresh">Dairy,Bread </b></div>
                    <div id="ShopInstamartOneOne"><img src={Fouten} alt="" /><b id="Fresh">Rice,Atta</b></div>
                    <div id="ShopInstamartOneOne"><img src={Fiften} alt="" /><b id="Fresh">Dry fruits</b></div>

                </div>
            </div>
            <div className="CartMain">
                <b id="Best">Discover best restaurants on Dineout</b>
                <div id="cartIconMain">
                    <div id="cartIconOne"><IoIosArrowRoundBack id="NavbarBoxTwoIcon" /></div>
                    <div id="cartIconTwo"><IoIosArrowRoundForward id="NavbarBoxTwoIcon" /></div>
                </div>
                <div className="CartOne">
                    <div id="CartOneOne">
                        <div id="CartOneOneOne">
                            <b id="Boss">The Boss Jaipur</b>
                            <MdStars id="StarIcon" />
                            <b id="FourNumber">4.2</b>
                            <img src={Sixteen} alt="" />
                            <p id="Asian">Continental.Asian </p>
                            <p id="AsianOne">₹ 2200 for two</p>
                            <p id="AsianTwo">The Grand Walk,Gandhi Nagar,Jaipur</p>
                            <p id="AsianThree">4.7km</p>
                            <div id="OfferBox"><HiMiniPercentBadge id="percatge"/><b>Flat 15% off on pre-booking</b></div>
                            </div>
                    </div>
                    <div id="CartOneTwo">
                        <b id="Boss">Hari Mahal Palace </b>
                        <MdStars id="StarIcon" />
                        <b id="FourNumber">4.2</b>
                        <img src={Seventeen} alt="" />
                        </div>
                    <div id="CartOneThree">
                        <b id="Boss">Falahaas For Upwas </b>
                        <MdStars id="StarIcon" />
                        <b id="FourNumber">4.2</b>
                        <img src={Eighteen} alt="" />
                        </div>
                </div>

            </div>
        </>
    )
}
export default Navbar;