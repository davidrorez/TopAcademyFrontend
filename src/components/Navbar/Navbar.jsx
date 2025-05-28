import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/academy-logo1.PNG";

export default function Navbar() {

  const handleMatricularClick = () => {
    const whatsappNumber = "50687884669"; 
    const message = "¡Hola! Estoy muy interesado/a en matricularme en Top Academy. Me gustaría recibir más información sobre los cursos disponibles, los horarios y el proceso de inscripción. Muchas gracias.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Logo + Title */}
        <a href="#" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Top Academy"
            style={{ width: "70px", height: "auto", userSelect: "none" }}
            draggable={false}
          />
          <span
            style={{
              color: "#252b42",
              fontWeight: "700",
              fontSize: "24px",
              letterSpacing: "0.1px",
            }}
          >
            Top Academy
          </span>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-5">
            <li className="nav-item">
              <a
                className="nav-link text-secondary fw-semibold"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-secondary fw-semibold"
                href="#"
              >
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-secondary fw-semibold"
                href="#"
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-secondary fw-semibold"
                href="#"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Botón Matrícular */}
          <button
            type="button"
            onClick={handleMatricularClick}
            className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 text-uppercase fw-medium"
          >
            Matrícular <BiRightArrowAlt size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
