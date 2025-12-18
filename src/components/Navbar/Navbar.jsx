import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/academy-logo1.PNG";
import { redirectToWhatsApp } from "../../utils/whatsapp"; 

export default function Navbar() {

const goToSection = (section) => {
  window.location.href = `/#${section}`;
};


  const handleMatricularClick = () => {
    redirectToWhatsApp({
      phone: "50687884669",
      message:
        "¡Hola! Estoy muy interesado/a en matricularme en Top Academy. Me gustaría recibir más información sobre los cursos disponibles, los horarios y el proceso de inscripción. Muchas gracias.",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Logo + Title */}
        <a href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Top Academy"
            style={{ width: "70px", height: "auto", userSelect: "none" }}
            draggable={false}
          />
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-3">
            <li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("inicio")}
  >
    Inicio
  </button>
</li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("nosotros")}
  >
    Nosotros
  </button>
</li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("cursos")}
  >
    Cursos
  </button>
</li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("contacto")}
  >
    Contacto
  </button>
</li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("testimonios")}
  >
    Testimonios
  </button>
</li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("ubicacion")}
  >
    Ubicación
  </button>
</li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0"
    onClick={() => goToSection("info")}
  >
    Info
  </button>
</li>

          </ul>

          {/* Botón Matricular */}
          <button
            type="button"
            onClick={handleMatricularClick}
            className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 text-uppercase fw-medium mt-3 mt-lg-0"
          >
            Matricúlate aquí <BiRightArrowAlt size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
