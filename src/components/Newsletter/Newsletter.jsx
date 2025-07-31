import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";

export default function ContactoRedes() {
  const redes = [
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/Topacademycr",
      color: "#1877F2",
    },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/topacademycr",
      color: "#E4405F",
    },
    {
      nombre: "WhatsApp",
      url: "https://wa.me/50687884669",
      color: "#25D366",
    },
    {
      nombre: "TikTok",
      url: "https://www.tiktok.com/@topacademycr",
      color: "#000000",
    },
    {
      nombre: "YouTube",
      url: "https://www.youtube.com/@topacademycr",
      color: "#FF0000",
    }
  ];

  return (
    <div className="container my-5 py-5" id="contacto">
      
      <SectionHeader
        subtitle={"Contáctanos"}
        title={"¡Escríbenos por nuestras redes sociales!"}
        paragraph={
          "Para consultas o más información, contáctanos a través de nuestras redes sociales o nuestros medios directos. ¡Te responderemos rápido!"
        }
      />

      {/* Redes sociales */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 p-4 " style={{ backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
        {redes.map((red, index) => (
          <a
            key={index}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-4 py-2 d-flex align-items-center gap-2 shadow-sm"
            style={{
              backgroundColor: red.color,
              color: "white",
              fontWeight: "bold",
              borderRadius: "30px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {red.nombre}
          </a>
        ))}
      </div>
    </div>
  );
}
