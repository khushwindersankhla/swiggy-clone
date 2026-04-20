import "./Investor.css"
import InOne from "./InvestorImage/InvertorOne.jpg"
import InTwo from "./InvestorImage/InterVew.jpg"
import InThree from "./InvestorImage/InvertorMoney.jpg"
import InFour from "./InvestorImage/InvestorImageScan.jpg"
function Investor() {
    return (
        <>
            <div className="InvestorOne"><h1><b>INVESTOR RELATIONS</b></h1></div>
            <div className="InvestorTwo">
                <div className="InvestorTwoOne">
                    <div className="InvestorTwoOneOne">
                        <h1>Financial Results Q3FY2026</h1>
                        <span><button id="InvestorTwoOneBtnOne"><b>View Press Release</b></button><button id="InvestorTwoOneBtnTwo"><b>For more detalis</b></button></span>
                    </div>
                    <div className="InvestorTwoOneTwo"><img src={InOne} alt="" /></div>
                </div>
            </div>
            <div className="InvestorThree"><h1>Corporate Announcements</h1></div>

            <div className="InvestorFour">
                <div className="InvestorFourOne">
                    <div className="InvestorFourOneImage">
                        <img src={InTwo} alt="" />
                    </div>
                    <div className="InvestorFourOneHeading">
                        <p id="InvestorFourOneHeadingpara">April 10, 2026</p>
                        <p id="InvestorFourOneHeadingparagr">Swiggy Enhances Board Leadership</p>
                        <button id="InvestorFourOneHeadingbtn"><b>Read More</b></button>
                    </div>
                </div>
                <div className="InvestorFourOne">
                    <div className="InvestorFourOneImage">
                        <img src={InTwo} alt="" />
                    </div>
                    <div className="InvestorFourOneHeading">
                        <p id="InvestorFourOneHeadingpara">April 8, 2026</p>
                        <p id="InvestorFourOneHeadingparagr">Swiggy Partners with Sarvam to Bring India’s
                            First Multilingual Voice-Led Commerce to Food Delivery, Instamart, and Dineout</p>
                        <button id="InvestorFourOneHeadingbtnOne"><b>Read More</b></button>
                    </div>
                </div>
                <div className="InvestorFourOne">
                    <div className="InvestorFourOneImage">
                        <img src={InTwo} alt="" />
                    </div>
                    <div className="InvestorFourOneHeading">
                        <p id="InvestorFourOneHeadingpara">March 6, 2026</p>
                        <p id="InvestorFourOneHeadingparagr">Swiggy Hosts Second Edition of ‘She The Change’ to Honor Women Transforming India’s Culinary Ecosystem</p>
                        <button id="InvestorFourOneHeadingbtnThree"><b>Read More</b></button>
                    </div>
                </div>
            </div>

            <div className="InvertorFive">
                <div className="InvertorFiveOne">
                    <div className="InvertorFiveOneOne">
                        <b>Subscribe for investor alerts</b><br />
                        <input type="text" placeholder="Enter Your mail" />
                        <button>Subscribe</button>
                    </div>
                    <div className="InvertorFiveOneTwo">
                        <img src={InThree} alt="" />
                    </div>
                </div>
            </div>

            <div className="InvertorSix">
                <div className="InvertorSixOne">
                    <div className="InvertorSixOneOne">
                        <h1>For Investor<br /> Related Queries</h1>
                    </div><hr id="InvertorSixOneline" />
                    <div className="InvertorSixOneTwo">
                        <h2 id="InvertorSixOneTwoTwo">Investors/Shareholders</h2>
                        <span> <b id="InvertorSixOneTwoTThree">Email:</b><b id="InvertorSixOneTwoFour">ir@swiggy.in</b></span>
                        <p id="InvertorSixOneTwoFive">Contact Number: 080-68422422.</p>
                        <h2 id="InvertorSixOneTwoSix">Company Secretary & Compliance Officer</h2>
                        <h6 id="InvertorSixOneTwoSeveen">Ms. Cauveri Sriram</h6>
                        <p id="InvertorSixOneTwoEight">Company Secretary & Compliance Officer</p>
                        <span><b id="InvertorSixOneTwonine">Email:</b><b id="InvertorSixOneTwonTen">Secretarial@swiggy.in</b></span>
                        <p id="InvertorSixOneTwoneleven">Contact Number: 080-68422422.</p>
                        <h1 id="Intime">MUFG Intime India Private Limited</h1>
                        <p id="Address">C-101, 1st Floor, 247 Park, Lal Bahadur Shastri Marg, Vikhroli (West),<br />
                            Mumbai, Mumbai City – 400083, Maharashtra, India.</p>
                        <span><b id="WEbiste">Website:</b><b id="innnn">https://in.mpms.mufg.com/</b></span>
                    </div>
                </div>
            </div>
            <div className="InvertorSeveen">
                <img src={InFour} alt="" />
            </div>
        </>
    )
}
export default Investor;