import "./Header.css"
import Logo from "../../images/logo.jpg"
// import { MdArrowOutward } from "react-icons/md";


function Header() {
    return (
        <>
            <div className="header-main">
                <div className="swiggy-logo"><img src={Logo} alt="" /></div>
                <b id="corporate">Swiggy Corporate</b>
                <b id="partner">partner with us</b>
                <button id="btn"><b>Get the app</b></button>
                <button id="btn-two"><b>Sign in</b></button>
            </div>
        </>
    )
}
export default Header;