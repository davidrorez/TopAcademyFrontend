// LocationMap.jsx
import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import "./LocationMap.css";

const LocationMap = () => {
  return (
    <div className="map-section container mb-5" id="ubicacion">
      <div data-aos="fade-up">
        <SectionHeader
          subtitle="Ubicación"
          title="Encuéntranos en el mapa"
          paragraph="Visítanos en nuestras instalaciones y conoce más sobre nuestra oferta académica. Estamos ubicados en una zona de fácil acceso para todos nuestros estudiantes."
        />
      </div>
      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Ubicación Academia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.4971473782853!2d-84.21877792549122!3d10.020790272677637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9007f2c9b81%3A0xf65881285994da1b!2sTOP%20ACADEMY!5e1!3m2!1ses!2scr!4v1753937040922!5m2!1ses!2scr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
