import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import "./Review.css";
import womanAvatar from "../../assets/avatar1.png";
import manAvatar from "../../assets/avatar2.png";

const avatarImages = {
  hombre: manAvatar,
  mujer: womanAvatar,
};

export default function Review() {
  const reviews = [
    { name: "Martha", gender: "mujer", text: "¡Excelente servicio! Estoy muy satisfecha con la atención." },
    { name: "Johny", gender: "hombre", text: "El equipo fue muy profesional. ¡100% recomendado!" },
    { name: "Mary Kate", gender: "mujer", text: "Muy contenta con el trabajo realizado. ¡Los volvería a contratar!" },
    { name: "Carlos", gender: "hombre", text: "Un trato muy amable. ¡Volveré pronto!" },
    { name: "Laura", gender: "mujer", text: "Rápido, eficiente y profesional." },
    { name: "Luis", gender: "hombre", text: "Superaron mis expectativas. ¡Gracias!" },
  ];

  const slides = [];
  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  return (
    <div className="review">
      <SectionHeader
        subtitle={"Testimonios"}
        title={"Lo que dicen nuestros estudiantes"}
        paragraph={
          "Nuestros estudiantes comparten cómo la academia ha impactado positivamente su aprendizaje y crecimiento académico."
        }
      />
      <div className="container my-5">
        <div
          id="carouselCards"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ position: "relative" }}
        >
          <div className="carousel-inner">
            {slides.map((group, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="row">
                  {group.map((review, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="card text-center mb-3">
                        <div className="card-body">
                          <img
                            src={avatarImages[review.gender]}
                            alt={`${review.gender} avatar`}
                            className="rounded-circle mb-3"
                            width="60"
                            height="60"
                          />
                          <h5 className="card-title">{review.name}</h5>
                          <p className="card-text">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCards"
            data-bs-slide="prev"
            style={{ filter: "invert(1)" }}
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Anterior</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselCards"
            data-bs-slide="next"
            style={{ filter: "invert(1)" }}
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  );
}
