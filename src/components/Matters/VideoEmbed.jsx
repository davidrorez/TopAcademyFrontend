import React, { useEffect, useRef } from "react";

export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Esta función carga el script oficial de Instagram para procesar el embed
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Cargar script si no está cargado
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm && window.instgrm.Embeds.process();
      document.body.appendChild(script);
    }
  }, [url]);

  return (
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
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "99.375%",
      }}
      ref={containerRef}
    ></blockquote>
  );
}
