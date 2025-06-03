import Card from "./Card";
import { FaGraduationCap, FaChild, FaSchool } from "react-icons/fa";
import placeHolderImg from "../../assets/women3.png";
import rectangleBg from "../../assets/t2.svg";
import { redirectToWhatsApp } from "../../utils/whatsapp";
import "./../Header/Header.css";

export default function Header() {
  const handleMatricularClick = () => {
    redirectToWhatsApp({
      phone: "50687884669",
      message:
        "¡Hola! Estoy muy interesado/a en matricularme en Top Academy. Me gustaría recibir más información sobre los cursos disponibles, los horarios y el proceso de inscripción. Muchas gracias.",
    });
  };

  return (
    <div className="container-fluid mt-2 pt-5" id="inicio">
      {/* SECCIÓN SUPERIOR */}
    <div
      className="row px-4 py-5 align-items-center align-items-center"
      style={{
        backgroundImage: `url(${rectangleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",       
        backgroundRepeat: "no-repeat",
        borderTopLeftRadius: "50px",
        borderBottomRightRadius: "100px",
        marginBottom: "5rem",
        minHeight: "500px", 
      }}
    >
        {/* IZQUIERDA */}
        <div className="col-12 col-lg-6 d-flex flex-column gap-4 mt-4">
          <span
            style={{
              color: "#252b42",
              fontWeight: "700",
              fontSize: "2.2rem",
              letterSpacing: "0.1px",
            }}
          >
            Top Academy
          </span>
          <h1 className="fw-bold text-dark display-5 display-md-4">
            1000+ Estudiantes
            <br />
            CONFÍAN EN NOSOTROS.
          </h1>
          <h4 className="text-muted fs-6 fs-md-5">
            Ofrecemos cursos desde primaria, tercer ciclo y bachillerato, hasta cursos técnicos, idiomas, talleres y preparación para admisión universitaria. Una formación integral para tu futuro.
          </h4>

          {/* BOTONES */}
          <div className="d-flex flex-column flex-sm-row gap-3">
            <button
              className="btn btn-primary w-100 px-4 py-2 rounded-3"
              onClick={handleMatricularClick}
            >
              Empezar Ahora
            </button>
            <button
              className="btn btn-outline-primary w-100 px-4 py-2 rounded-3"
              onClick={() =>
                document
                  .getElementById("mas-info")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Más información
            </button>
          </div>
        </div>

        {/* DERECHA */}
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center mt-4 mt-lg-0">
<img
  src={placeHolderImg}
  alt="intro"
  className="img-fluid responsive-img"
  draggable="false"
/>

        </div>
      </div>

      {/* SECCIÓN INFERIOR */}
      <div className="container py-5" id="mas-info">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <Card
              icon={<FaChild />}
              title="Primaria"
              description="Brindamos las bases sólidas para el aprendizaje desde los primeros años escolares."
            />
          </div>
          <div className="col-12 col-md-4">
            <Card
              icon={<FaSchool />}
              title="Tercer Ciclo"
              description="Acompañamos a los estudiantes en su transición con contenidos dinámicos y prácticos."
            />
          </div>
          <div className="col-12 col-md-4">
            <Card
              icon={<FaGraduationCap />}
              title="Bachillerato"
              description="Preparación integral para superar el bachillerato y avanzar hacia la universidad o el mundo laboral."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
