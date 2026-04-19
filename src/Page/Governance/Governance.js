import "./Governance.css"
import GoverOne from "./GovernanceImage/GovernanceOne.jpg"
import GoverTwo from "./GovernanceImage/GovernanceTwo.jpg"
import GoverThree from "./GovernanceImage/GovernanceThree.jpg"
import GoverFour from "./GovernanceImage/GovernanceFour.jpg"
import GoverFive from "./GovernanceImage/GovernanceFive.jpg"
import GoverSix from "./GovernanceImage/GovernanceSix.jpg"
import GoverSeveen from "./GovernanceImage/GovernanceSeveen.jpg"

function Governance() {
    return (
        <>
            <div className="GovernanceOne">
                <h1 id="GovernanceOneHeadinng"><b>Governance</b></h1>
            </div>
            <div className="GovernanceTwo">
                <h2 id="GovernanceTwoOne">Board Members</h2>
            </div>
            <div className="GovernanceThree">
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverOne} alt="" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Anad Kripalu</h2>
                        <p id="GovernanceThreeOneTwopara">Chairman,Independent <br />Director</p>

                    </div>

                </div>
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverTwo} alt="" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Sriharsha Majety</h2>
                        <p id="GovernanceThreeOneTwopara">Managing Director and <br />Group CEO</p>

                    </div>
                </div>
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverThree} alt="" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Shailesh Haribhakti</h2>
                        <p id="GovernanceThreeOneTwopara">Independent Director</p>
                    </div>
                </div>
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverFour} alt="" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Suparna Mitra</h2>
                        <p id="GovernanceThreeOneTwopara">Independent Director</p>
                    </div>
                </div>
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverFive} alt="" id="RenanDeCastro" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Faraz Khalid</h2>
                        <p id="GovernanceThreeOneTwopara">Independent Director</p>

                    </div>
                </div>
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverSix} alt="" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Renan De Castro Alves Pinto</h2>
                        <p id="GovernanceThreeOneTwopara">Non-Executive Director</p>
                    </div>
                </div>
                <div className="GovernanceThreeOne">
                    <div className="GovernanceThreeOneOne">
                        <img src={GoverSeveen} alt="" />
                    </div>
                    <div className="GovernanceThreeOneTwo">
                        <h2 id="GovernanceThreeOneTwoName">Ashutosh Sharma</h2>
                        <p id="GovernanceThreeOneTwopara">Non-Executive Director</p>
                    </div>
                </div>
            </div>

            <div className="GoverFive"><h1>Committee Composition</h1></div>
        </>
    )
}
export default Governance;