import React from "react";
import {
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="info">
    <footer
      className="text-white pt-5"
      style={{
        background: "linear-gradient(135deg, #2d5bfd, #1e3dd9)",
      }}
    >
      <div className="container pb-4">
        <div className="row g-4">

          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Top Academy Costa Rica</h5>
            <p style={{ lineHeight: "1.7" }}>
              Instituto educativo dedicado a formación académica y técnica, con
              cursos de inglés, portugués, administración y más. Modalidad
              presencial y virtual, desde primaria hasta bachillerato.
            </p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3 text-uppercase">Contacto</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li className="d-flex align-items-start">
                <BiMap className="me-2 mt-1" />
                <span>
                  175 oeste de la biblioteca pública, Alajuela centro, Costa Rica
                </span>
              </li>
              <li className="d-flex align-items-center">
                <AiOutlinePhone className="me-2" />
                <a href="tel:+50687884669" className="text-white text-decoration-none footer-link">
                  8788 4669
                </a>
              </li>
              <li className="d-flex align-items-center">
                <AiOutlineMail className="me-2" />
                <a href="mailto:topacademycr@gmail.com" className="text-white text-decoration-none footer-link">
                  topacademycr@gmail.com
                  </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3 text-uppercase">Redes Sociales</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li className="d-flex align-items-center">
                <AiOutlineFacebook className="me-2" />
                <a href="https://www.facebook.com/Topacademycr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none footer-link">
                  Facebook
                </a>
              </li>
              <li className="d-flex align-items-center">
                <AiOutlineInstagram className="me-2" />
                <a href="https://www.instagram.com/topacademycr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none footer-link">
                  Instagram
                </a>
              </li>
              <li className="d-flex align-items-center">
                <FaTiktok className="me-2" />
                <a href="https://www.tiktok.com/@topacademycr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none footer-link">
                  TikTok
                </a>
              </li>
              <li className="d-flex align-items-center">
                <AiOutlineYoutube className="me-2" />
                <a href="https://www.youtube.com/@topacademycr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none footer-link">
                  YouTube
                </a>
              </li>
              <li className="d-flex align-items-center">
                <FaWhatsapp className="me-2" />
                <a href="https://wa.me/50687884669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none footer-link">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center py-3"
        style={{ background: "#152c9f" }}
      >
        © {new Date().getFullYear()} TopAcademy  Todos los derechos reservados.
      </div>
    </footer>
    </div>
  );
}
