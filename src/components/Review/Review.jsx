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
    { name: "Nataly Espinoza", gender: "mujer", text: "Súper recomiendo Top Academy , los profesores son muy buenos , yo estudio en esta academia y fue el mejor paso que pude dar." },
    { name: "Jose Centeno", gender: "hombre", text: "Excelentes profesores muy amables y su métodos de enseñanzas son muy buenas y el personal de administración siempre pendientes de cualquier consulta, matricular en Top Academy fue el mejor acierto! Con ellos si es posible lograr nuestras metas. Super recomendados." },
    { name: "Luis Carlos Guevara Salas", gender: "hombre", text: "Muy buena academia yo estoy con ustedes, sociales y matemáticas." },
    { name: "Cristian Salazar Solano", gender: "hombre", text: "Mi mejor decisión fue sacar noveno en top academy excelentes profesores y un excelente servicio ante cualquier consulta super recomendados." },
    { name: "Ashley Kareimy Murillo Mendoza", gender: "mujer", text: "Top Academy son buenos yo estudio con ustedes y los recomiendo." },
    { name: "Melvis Rodriguez", gender: "hombre", text: "Super profesores muy profesionales soy estudiante de esta academia excelente 👌 la recomiendo." },
  ];

  const slides = [];
  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  return (
    <div className="review" id="testimonios">
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
                      <div className="card text-center mb-3" style={{ backgroundColor: "#f9f9f9" }}>
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
