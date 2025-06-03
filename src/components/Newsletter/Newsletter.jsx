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

const tiktokSVG = (
<svg xmlns="http://www.w3.org/2000/svg"
  className="icon" 
  style={iconStyle}
  viewBox="0 0 293768 333327"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
  image-rendering="optimizeQuality"
  fill-rule="evenodd"
  clip-rule="evenodd">
    <path d="M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z" fill="#26f4ee"/><path d="M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z" fill="#fb2c53"/><path d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z"/></svg>
);

const youtubeSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={iconStyle}
    viewBox="0 0 24 24"
    fill="#FF0000"
    className="icon"
  >
    <path d="M23.498 6.186a2.977 2.977 0 00-2.098-2.108C19.645 3.5 12 3.5 12 3.5s-7.645 0-9.4.578A2.977 2.977 0 00.502 6.186 31.149 31.149 0 000 12a31.15 31.15 0 00.502 5.814 2.977 2.977 0 002.098 2.108C4.355 20.5 12 20.5 12 20.5s7.645 0 9.4-.578a2.977 2.977 0 002.098-2.108A31.15 31.15 0 0024 12a31.15 31.15 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
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

        <div className="d-flex justify-content-center gap-3">
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

          <a
            href="https://www.tiktok.com/@topacademycr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            {tiktokSVG}
          </a>

          <a
            href="https://www.youtube.com/@topacademycr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            {youtubeSVG}
          </a>

        </div>
      </div>
    </>
  );
}
