import React, { useEffect } from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import "./Review.css";

export default function Review() {
  useEffect(() => {
    // Carga el SDK de Facebook si no está cargado
    if (!window.FB) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v17.0";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="review">
      <SectionHeader
        subtitle={"Testimonios"}
        title={"Lo que dicen nuestros estudiantes"}
        paragraph={
          "Nuestros estudiantes comparten cómo la academia ha impactado positivamente su aprendizaje y crecimiento académico."
        }
      />
      <div className="review-container">
        <div id="fb-root"></div>
        <div
          className="fb-comments"
          data-href="https://www.facebook.com/Topacademycr"
          data-width="500"
          data-numposts="5"
          data-order-by="reverse_time"
        ></div>
      </div>
    </div>
  );
}
