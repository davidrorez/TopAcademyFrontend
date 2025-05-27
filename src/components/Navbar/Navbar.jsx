import {BiRightArrowAlt} from "react-icons/bi"
import "./Navbar.css"
import logo from "../../assets/academy-logo.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img className="logo" src={logo} alt="Top Academy" />
                <span className="title">Top Academy</span>
            </div>
            <ul className="nav-menu">
                <li className="nav-menu-item">Inicio</li>
                <li className="nav-menu-item">Cursos</li>
                <li className="nav-menu-item">Nosotros</li>
                <li className="nav-menu-item">Contacto</li>
            </ul>
            <div className="nav-login">
                <div className="join-us">
                    <span>Matrícular</span>
                    <BiRightArrowAlt className="icon" />
                </div>
            </div>
        </div>
    )
}