import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import { 
  AiFillFacebook, 
  AiFillInstagram, 
  AiOutlineWhatsApp, 
  AiFillYoutube,
  AiOutlineMail 
} from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

export default function ContactoRedes() {
  const redes = [
    { nombre: "Facebook", icono: <AiFillFacebook size={22} />, url: "https://www.facebook.com/Topacademycr", clase: "bg-primary" },

    { nombre: "Instagram", icono: <AiFillInstagram size={22} />, url: "https://www.instagram.com/topacademycr", clase: "bg-warning" },

    { nombre: "WhatsApp", icono: <AiOutlineWhatsApp size={22} />, url: "https://wa.me/50687884669", clase: "bg-success" },

    { nombre: "TikTok", icono: <SiTiktok size={20} />, url: "https://www.tiktok.com/@topacademycr", clase: "bg-dark" },

    { nombre: "YouTube", icono: <AiFillYoutube size={22} />, url: "https://www.youtube.com/@topacademycr", clase: "bg-danger" },

    { nombre: "Correo", icono: <AiOutlineMail size={22} />, url: "mailto:topacademycr@gmail.com", clase: "bg-secondary" },
  ];

  return (
    <div className="container my-5 py-5" id="contacto">
      <div data-aos="fade-up">
        <SectionHeader
          subtitle="Contáctanos"
          title="¡Escríbenos por nuestras redes sociales!"
          paragraph="Para consultas o más información, contáctanos a través de nuestras redes sociales o nuestros medios directos. ¡Te responderemos rápido!"
        />
      </div>

      <div
        className="row row-cols-1 row-cols-md-2 g-4 justify-content-center mt-4 p-4 rounded-4 shadow-sm bg-light"
        data-aos="fade-up"
      >
        {redes.map((red, i) => (
          <div key={i} className="d-flex justify-content-center">
            <a
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn d-flex align-items-center justify-content-center gap-2 
                text-white fw-semibold w-75 py-3 rounded-pill shadow ${red.clase}
                hover-opacity-75 hover-shadow-lg transform-scale-105`}
              style={{ transition: "all 0.2s ease" }}
            >
              {red.icono}
              {red.nombre}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
