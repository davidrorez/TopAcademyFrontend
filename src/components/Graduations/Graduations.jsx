import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import "./Graduations.css";
import grad1 from "../../assets/grad1.jpg";
import grad2 from "../../assets/grad2.jpg";
import grad3 from "../../assets/grad3.jpg";
import grad4 from "../../assets/grad4.jpg";
import grad5 from "../../assets/grad5.jpg";
import grad6 from "../../assets/grad6.jpg";

const graduationImages = [grad1, grad2, grad3, grad4, grad5, grad6];

export default function Graduations() {
  const slides = [];
  for (let i = 0; i < graduationImages.length; i += 3) {
    slides.push(graduationImages.slice(i, i + 3));
  }

  return (
    <div className="graduations container" id="graduations">
      <div data-aos="fade-up">
        <SectionHeader
          subtitle={"Graduaciones"}
          title={"Momentos de nuestros estudiantes"}
          paragraph={
            "Celebramos los logros de nuestros estudiantes con estas memorables graduaciones."
          }
        />
      </div>
      <div className="container my-5" data-aos="fade-up">
        <div
          id="carouselGraduations"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((group, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">
                  {group.map((imgSrc, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="card mb-3 border-0 shadow rounded-3">
                        <img
                          src={imgSrc}
                          alt={`Graduación ${i + 1}`}
                          className="d-block w-100"
                          style={{
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controles del carousel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselGraduations"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Anterior</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselGraduations"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  );
}
