import React from "react";
import {
  AiFillStar,
  AiOutlineArrowRight,
} from "react-icons/ai";

import "./Product.css";

export default function Product({
  thumbnails,
  category,
  title,
  description,
  price,
  disscount,
  stars,
  badge,
}) {
  return (
    <div className="card product shadow-sm rounded-4 overflow-hidden">
      <div className="position-relative top-section">
        <img
          src={thumbnails}
          alt={`${title} product thumbnail`}
          className="card-img-top object-fit-cover"
          style={{ height: "300px", width: "100%" }}
        />
        <div className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-danger text-white rounded">
          {badge}
        </div>
      </div>

      <div className="card-body d-flex flex-column justify-content-between" style={{ height: "300px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <a href={`/${category}`} className="text-primary fw-bold text-decoration-none">
            {category}
          </a>
          <div className="bg-dark text-white px-2 py-1 rounded d-flex align-items-center gap-1">
            <AiFillStar className="text-warning" />
            <span className="small">{stars}</span>
          </div>
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted small">{description}</p>
        <div className="d-flex gap-2 align-items-center mb-3">
          <span className="text-muted text-decoration-line-through fw-bold">${price}</span>
          <span className="text-danger fw-bold">${disscount}</span>
        </div>
        <button className="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center gap-2">
          Learn More <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
