import React from "react";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import "./Product.css";
import { redirectToWhatsApp } from "../../utils/whatsapp";

export default function Product({
  thumbnails,
  category,
  title,
  description,
  listNames = [],
  listPrices = [],
  stars,
  badge,
}) {
  const whatsappMessage = (title) => {
    redirectToWhatsApp({
      phone: "50687884669",
      message: `¡Hola! Estoy interesado/a en obtener más información sobre el curso "${title}" en Top Academy.`,
    });
  };

  return (
    <div
      className="card product shadow-sm rounded-4 overflow-hidden h-100"
      id="cursos"
    >
      <div className="position-relative top-section">
        <img
          src={thumbnails}
          alt={`${title} product thumbnail`}
          className="card-img-top img-fluid w-100 object-fit-cover"
          style={{ maxHeight: "300px" }}
        />
        {badge && (
          <div className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-danger text-white rounded">
            {badge}
          </div>
        )}
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        {/* Category and Rating */}
        <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
          <span
            className="text-primary fw-bold text-decoration-none"
          >
            {category}
          </span>
          <div className="bg-dark text-white mt-2 mt-sm-0 mx-2 px-2 py-1 rounded d-flex align-items-center gap-1">
            <AiFillStar className="text-warning" />
            <span className="small">{stars}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted small">{description}</p>

        {/* Price List */}
        <div className="mb-3">
          {listNames.map(
            (name, index) =>
              name &&
              listPrices[index] && (
                <div
                  key={index}
                  className="d-flex gap-2 justify-content-start align-items-center text-start w-100 flex-wrap mb-2"
                >
                  <span className="text-muted fw-bold">{name}:</span>
                  <span className="text-primary fw-bold">
                    {listPrices[index]}
                  </span>
                </div>
              )
          )}
        </div>

        {/* Button */}
        <button
          className="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center gap-2 mt-auto"
          onClick={() => whatsappMessage(title)}
        >
          Más información <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
