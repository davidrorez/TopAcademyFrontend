import Card from "./Card"
import {FaGraduationCap, FaFireAlt} from "react-icons/fa"
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="top">
                <div className="left">
                    <h5>Join Us</h5>
                    <h1>25K+ STUDENTS<br />TRUST US</h1>
                    <h4>Every day brings with it a fresh set of learning possibilities.</h4>
                    <div className="btn-container">
                    <div className="button-filled">Get Quote Now</div>
                    <div className="button-outline">Learn More</div>
                    </div>
                </div>
                <div className="right">
                    <div className="main-image-container">
                        <img src="Placeholder.png" alt="intro placholder"/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="card-container">
                    <Card
                    icon={<FaGraduationCap/>}
                    title={"Expert instruction"}
                    description={"The gradual accumulation of information about atomic and small-scale behaviour..."}
                    />
                    <Card
                    icon={<FaFireAlt/>}
                    title={"Training Courses"}
                    description={"The gradual accumulation of information about atomic and small-scale behaviour..."}
                    />
                    <Card
                    icon={<FaGraduationCap/>}
                    title={"Expert instruction"}
                    description={"The gradual accumulation of information about atomic and small-scale behaviour..."}
                    />
                </div>
            </div>
        </div>
    )
}