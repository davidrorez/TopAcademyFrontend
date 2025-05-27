import Card from "./Card"
import { FaGraduationCap, FaChild, FaSchool } from "react-icons/fa"
import "./Header.css"
import placeHolderImg from "../../assets/women3.png"
import rectangleBg from "../../assets/t2.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="top"
            style={{ 
                backgroundImage: `url(${rectangleBg})`,
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat",
                borderTopLeftRadius: "50px",
                borderBottomRightRadius: "50px",
                height: "65vh",
            }}>
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
                        <img src={placeHolderImg} alt="intro placeholder"
                            style={{ height: '500px'
                             }}  />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="card-container">
                    <Card
                        icon={<FaChild />}
                        title="Primaria"
                        description="Brindamos las bases sólidas para el aprendizaje desde los primeros años escolares."
                    />
                    <Card
                        icon={<FaSchool />}
                        title="Tercer Ciclo"
                        description="Acompañamos a los estudiantes en su transición con contenidos dinámicos y prácticos."
                    />
                    <Card
                        icon={<FaGraduationCap />}
                        title="Bachillerato"
                        description="Preparación integral para superar el bachillerato y avanzar hacia la universidad o el mundo laboral."
                    />
                </div>
            </div>
        </div>
    )
}
