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
    <footer className="page-footer font-small blue pt-4" id="info"
      style={{ backgroundColor: "#2d5bfd" }}>
      <div className="container-fluid text-center text-md-left text-white">
        <div className="row">
          {/* Sección info */}
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Top Academy Costa Rica</h5>
            <p>
              Instituto educativo dedicado a formación académica y técnica, con cursos de inglés, portugués, administración y más. 
              Modalidad presencial y virtual, desde primaria hasta bachillerato.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          {/* Sección Contacto */}
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <BiMap style={{ marginRight: 8 }} />
                175 oeste de la biblioteca pública, Alajuela centro, Alajuela, Costa Rica
              </li>
              <li>
                <AiOutlinePhone style={{ marginRight: 8 }} />
                <a href="tel:+50687884669" className="text-white">8788 4669</a>
              </li>
              <li>
                <AiOutlineMail style={{ marginRight: 8 }} />
                <a href="mailto:topacademycr@gmail.com" className="text-white">topacademycr@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Sección Redes Sociales */}
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <AiOutlineFacebook style={{ marginRight: 8 }} />
                <a href="https://www.facebook.com/Topacademycr" target="_blank" rel="noopener noreferrer" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <AiOutlineInstagram style={{ marginRight: 8 }} />
                <a href="https://www.instagram.com/topacademycr/" target="_blank" rel="noopener noreferrer" className="text-white">
                  Instagram
                </a>
              </li>
              <li>
                <FaTiktok style={{ marginRight: 8 }} />
                <a href="https://www.tiktok.com/@topacademycr" target="_blank" rel="noopener noreferrer" className="text-white">
                  Tiktok
                </a>
              </li>
              <li>
                <AiOutlineYoutube style={{ marginRight: 8 }} />
                <a href="https://www.youtube.com/@topacademycr" target="_blank" rel="noopener noreferrer" className="text-white">
                  Youtube
                </a>
              </li>
              <li>
                <FaWhatsapp style={{ marginRight: 8 }} />
                <a href="https://wa.me/50687884669" target="_blank" rel="noopener noreferrer" className="text-white">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
