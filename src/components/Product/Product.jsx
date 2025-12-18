import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import "./Product.css";

export default function Product({
  paramName,
  thumbnails,
  title,
  description,
  stars,
  badge,
}) {
  return (
    <div
      className="card mx-3 shadow rounded-4 overflow-hidden h-100 border-0"
      id="cursos"
      style={{ backgroundColor: "#f8f8f8ff" }}
    >
      <div className="position-relative text-center pt-4 pb-2 bg-light">
        {badge && (
          <span
            className="position-absolute bg-danger top-0 start-0 px-3 py-1 rounded-pill"
            style={{ color: "white", fontSize: "0.75rem" }}
          >
            {badge}
          </span>
        )}

        <img
          src={thumbnails}
          alt={`${title} product thumbnail`}
          className="rounded-circle shadow-sm"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            border: "4px solid white",
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-center mb-2">{title}</h5>
        {stars && (
          <div className="d-flex justify-content-center gap-1 mb-2">
            {Array.from({ length: stars }).map((_, i) => (
              <AiFillStar key={i} color="#f5b50a" />
            ))}
          </div>
        )}

        <p className="card-text text-muted small text-center">{description}</p>

        <a
          href={`/curso/${paramName}`}
          className="btn btn-primary w-100 mt-auto d-flex justify-content-center align-items-center gap-2 rounded-3 fw-semibold"
        >
          Más información <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
}
