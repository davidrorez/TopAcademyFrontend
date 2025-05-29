import Card from "./Card";
import { FaGraduationCap, FaChild, FaSchool } from "react-icons/fa";
import placeHolderImg from "../../assets/women3.png";
import rectangleBg from "../../assets/t2.svg";

export default function Header() {
  return (
    <div className="container-fluid mt-2 pt-5" id="home">
      {/* SECCIÓN SUPERIOR */}
        <div
        className="row px-4 py-5 align-items-center"
        style={{
            backgroundImage: `url(${rectangleBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: "50px",
            borderBottomRightRadius: "100px",
            marginBottom: "5rem"
        }}
        >
        {/* IZQUIERDA */}
        <div className="col-12 col-lg-6 d-flex flex-column gap-4">
          <h1 className="fw-bold display-4 text-dark">
            1000+ Estudiantes<br />CONFÍAN EN NOSOTROS.
          </h1>
          <h4 className="text-muted fs-5">
            Primaria, tercer ciclo, bachillerato y más.
          </h4>
          <div className="d-flex flex-wrap gap-3">
            <button className="btn btn-primary px-4 py-2 rounded-3">
              Empezar Ahora
            </button>
            <button className="btn btn-outline-primary px-4 py-2 rounded-3"
              onClick={() => document.getElementById('more-info')?.scrollIntoView({ behavior: 'smooth' })}>
              Más información
            </button>
          </div>
        </div>

        {/* DERECHA */}
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center mt-4 mt-lg-0">
        <img
            src={placeHolderImg}
            alt="intro"
            className="img-fluid d-block"
            draggable="false"
                  style={{ width: '70%' }}
        />
        </div>


      </div>

      {/* SECCIÓN INFERIOR */}
      <div className="container py-5" id="more-info">
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
