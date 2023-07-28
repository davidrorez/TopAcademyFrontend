import {BiRightArrowAlt} from "react-icons/bi"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img className="logo" src="academy-logo.png" alt="DigitalSkills Institute" />
                <span className="title">DigitalSkills Institute</span>
            </div>
            <ul className="nav-menu">
                <li className="nav-menu-item">Home</li>
                <li className="nav-menu-item">Product</li>
                <li className="nav-menu-item">Pricing</li>
                <li className="nav-menu-item">Contact</li>
            </ul>
            <div className="nav-login">
                <span className="log-in">Login</span>
                <div className="join-us">
                    <span>Join US</span>
                    <BiRightArrowAlt className="icon" />
                </div>
            </div>
        </div>
    )
}