// ImageComponent.jsx
import React from "react";
import "./ImageComponent.css"; // importa tu archivo CSS

const ImageComponent = () => {
  return (
    <div className="container-fluid image-container mt-2 pt-5 mb-5">
      <img
        src="/banner_top_academy.jpg"
        alt="Descripción de la imagen"
        className="centered-image"
      />
    </div>
  );
};

export default ImageComponent;
