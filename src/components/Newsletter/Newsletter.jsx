import React from "react";

const iconStyle = {
  width: 40,
  height: 40,
  transition: "transform 0.3s ease, filter 0.3s ease",
  cursor: "pointer",
  display: "inline-block",
};

const facebookSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={iconStyle}
    viewBox="0 0 24 24"
    fill="#1877F2"
    className="icon"
  >
    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.92.001c-1.506 0-1.797.716-1.797 1.765v2.316h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.324-.6 1.324-1.324V1.325C24 .6 23.4 0 22.675 0z" />
  </svg>
);

const instagramSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={iconStyle}
    viewBox="0 0 24 24"
    fill="#E4405F"
    className="icon"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.875 1.5a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

const whatsappSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={iconStyle}
    viewBox="0 0 24 24"
    fill="#25D366"
    className="icon"
  >
    <path d="M20.52 3.48A11.815 11.815 0 0012.02 0C5.38 0 .14 5.22.14 11.86c0 2.12.55 4.15 1.6 5.94L0 24l6.36-1.66a11.837 11.837 0 005.67 1.43c6.63 0 11.88-5.22 11.88-11.87a11.8 11.8 0 00-3.39-8.32zm-8.49 17.06a9.703 9.703 0 01-5.02-1.45l-.36-.22-3.78.99.98-3.69-.24-.38a9.705 9.705 0 0116.75-10.42 9.67 9.67 0 01-7.33 14.97zm5.1-6.85c-.28-.14-1.65-.82-1.9-.91-.25-.1-.43-.14-.61.14s-.7.91-.85 1.1c-.15.19-.3.21-.58.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.43-.48.14-.15.19-.25.28-.42.09-.18.05-.32-.02-.46-.07-.14-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.47-.16 0-.35-.02-.54-.02s-.46.07-.7.32c-.25.25-.94.91-.94 2.22 0 1.3.96 2.56 1.1 2.74.14.18 1.9 2.9 4.61 4.06.64.28 1.14.45 1.53.58.64.22 1.22.19 1.68.11.51-.09 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.13-.25-.2-.54-.34z" />
  </svg>
);

export default function ContactoRedes() {
  return (
    <>
      <style>
        {`
          .icon:hover {
            transform: scale(1.2);
            filter: brightness(0.85);
          }
        `}
      </style>

      <div className="container my-5" id="contacto">
        <div className="text-center mb-4">
          <h6 className="text-primary">Contacto</h6>
          <h3 className="fw-bold">¡Escríbenos por nuestras redes sociales!</h3>
          <p className="text-muted">
            Para consultas o más información, contáctanos a través de nuestras redes sociales. ¡Te responderemos rápido!
          </p>
        </div>

        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://www.facebook.com/Topacademycr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            {facebookSVG}
          </a>
          <a
            href="https://www.instagram.com/topacademycr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            {instagramSVG}
          </a>
          <a
            href="https://wa.me/50687884669"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            {whatsappSVG}
          </a>
        </div>
      </div>
    </>
  );
}
