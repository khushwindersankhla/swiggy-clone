import "./DeliveringEveryone.css"
import OneOneOne from "./DeliveringEveryoneImage/Resto.jpg"
import OneOneTwo from "./DeliveringEveryoneImage/instamart.Onejpg.png"
import OneOneThree from "./DeliveringEveryoneImage/dineoutwine.jpg"
import OneOneFour from "./DeliveringEveryoneImage/DoneBoxImage.jpg"
function DeliveringEveryone() {
    return (
        <>
            <div className="DeliveryManBox">
                <h1 id="BoxText">Our Businesses</h1>
            </div>
            <div className="DeveryOneBox">
                <div className="DeveryOneBoxOne">
                    <img src={OneOneOne} alt="" id="FastFoodImage" />
                    <h3 id="HeadingText">Food Devlivery</h3>
                    <hr id="BoxLineFood" />
                    <p id="OnTwxt">On our Food Delivery marketplace,
                        users can<br /> conveniently search and
                        discover multiple<br /> restaurant listings,
                        browse their menus, place <br />food orders,
                        pay seamlessly, and track order<br /> deliveries.
                        These orders are received and<br /> prepared by
                        our restaurant partners and<br /> delivered to
                        users through the large fleet of<br /> delivery
                        partners on our platform.</p>

                    <button id="BtnDevelery"><b>Place your order here</b></button>
                </div>
                <div className="DeveryOneBoxTwo">
                    <img src={OneOneTwo} alt="" id="FastFoodBagImage" />
                    <h3 id="HeadingTextIna">Instamart</h3>
                    <hr id="BoxLineFood" />
                    <p id="OnTwxt">On Instamart, users can access and browse a
                        <br />wide selection of grocery and household items. <br />
                        These orders are received by merchant <br />
                        partners, processed through our dark stores, <br />
                        and delivered to users through delivery partners</p>

                    <button id="BtnDeveleryTwo"><b>Place your order here</b></button>
                </div>

            </div>

            <div className="SecondBoxMain">
                <div className="DeveryOneBoxOne">
                    <img src={OneOneThree} alt="" id="FastFoodImage" />
                    <h3 id="HeadingTextDine">Dineout</h3>
                    <hr id="BoxLineFood" />
                    <p id="OnTwxt">Dineout facilitates a user’s eating-out
                        experience, through which users can discover
                        restaurants, access menus and images, make
                        reservations, benefit from attractive promotions,
                        and make digital payments to such restaurants on our
                        platform.</p>

                    <button id="BtnDevelerythree"><b>Click here to make reservations</b></button>
                </div>

                <div className="DeveryOneBoxTwo">
                    <img src={OneOneTwo} alt="" id="FastFoodBagImage" />
                    <h3 id="HeadingTextIna">Scenes</h3>
                    <hr id="BoxLineFood" />
                    <p id="OnTwxt">Scenes is the events reservation
                        business integrated into the primary app that
                        provides a one-stop-shop solution for bookings
                        of in-restaurant events. Designed for urban
                        consumers seeking premium dining and entertainment
                        options, Scenes extends the experience outdoors, curating,
                        producing and facilitating live events in collaboration with partners.</p>

                    <button id="BtnDeveleryThreee"><b>Know more</b></button>
                </div>
            </div>

            <div className="LastImageDeveleryBox">
                <img src={OneOneFour} alt="" id="Khushwonder"/>
                </div>
        </>
    )
}
export default DeliveringEveryone;