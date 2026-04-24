import "./Header.css";
import Logo from "../../images/logo.jpg";
import { useState } from "react";
import { FaTimes, FaUserCircle } from "react-icons/fa";

function Header() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="header-main">
                <div className="swiggy-logo">
                    <img src={Logo} alt="" />
                </div>

                <b id="corporate">Swiggy Corporate</b>
                <b id="partner">partner with us</b>

                <button id="btn">
                    <b>Get the app</b>
                </button>

                <button onClick={() => setShow(true)} id="btn-two">
                    {/* <FaUserCircle style={{ marginRight: "5px" }} /> */}
                    <b>Sign in</b>
                </button>
            </div>

            {/* Login Box */}
            {show && (
                <div className="overlay" onClick={() => setShow(false)}>
                    <div
                        className="LoginBox"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Icon */}
                        <FaTimes
                            className="closeIcon"
                            onClick={() => setShow(false)}
                        />
                        <h1 id="closeLogin">Login</h1>
                      <h5 id="account">or create an account</h5>
                      <hr id="Linekhushw"/>
                      <input type="text"  placeholder="Phone Number"id="LoginNumber"/>
                      <button id="jmeskhush"><b>LOGIN</b></button>
                      <p id="clicking">By clicking on Login, I accept the Terms & Conditions & Privacy<br/> Policy</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;