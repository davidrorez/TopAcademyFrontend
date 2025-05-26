import Card from "./Card"
import {FaGraduationCap, FaFireAlt} from "react-icons/fa"
import "./Header.css"
import placeHolderImg from "../../assets/Placeholder.png"

export default function Header() {
    return (
        <div className="header">
            <div className="top">
                <div className="left">
                    <h1>1000+ Estudiantes<br />CONFÍAN EN NOSOTROS.</h1>
                    <h4>Primaria, tercer ciclo, bachillerato y más.</h4>
                    <div className="btn-container">
                    <div className="button-filled">Empezar Ahora</div>
                    <div className="button-outline">Más información</div>
                    </div>
                </div>
                <div className="right">
                    <div className="main-image-container">
                        <img src={placeHolderImg} alt="intro placholder"/>
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