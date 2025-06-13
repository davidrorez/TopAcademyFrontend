import React, { useEffect, useRef } from "react";

export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm && window.instgrm.Embeds.process();
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "360px", // Cambia esto para ajustar el ancho máximo
        margin: "0 auto",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: 40,
          padding: 0,
          width: "100%", // Hace que se ajuste al contenedor padre
        }}
        ref={containerRef}
      ></blockquote>
    </div>
  );
}

