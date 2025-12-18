import { FaTools, FaLaptop, FaClock, FaCertificate } from "react-icons/fa";
import { useParams } from "react-router-dom";
import SectionHeader from "../Section-Header/SectionHeader";
import { coursesInfo } from "../../utils/course-info";

export default function CourseDescription() {
  const { paramName } = useParams();
  const course = coursesInfo.find((course) => course.paramName === paramName);

  const beneficios = [
    {
      title: "Aprendizaje Estructurado",
      text: "Contenido organizado para avanzar de manera clara y progresiva.",
      icon: <FaTools size={32} color="#00A6FF" />,
    },
    {
      title: "Modalidad Flexible",
      text: "Estudia desde cualquier lugar en modalidad presencial o virtual.",
      icon: <FaLaptop size={32} color="#00A6FF" />,
    },
    {
      title: "Acceso Ilimitado",
      text: "Consulta el material y las lecciones siempre que lo necesites.",
      icon: <FaClock size={32} color="#00A6FF" />,
    },
    {
      title: "Certificación Incluida",
      text: "Obtén una certificación al finalizar el curso y validar tus conocimientos.",
      icon: <FaCertificate size={32} color="#00A6FF" />,
    },
  ];

  return (
    <div className="container mt-5">
      <div data-aos="fade-up">
        <SectionHeader
          subtitle={course.category}
          title={course.title}
          paragraph="Explora nuestros programas educativos diseñados para ayudarte a alcanzar el éxito académico."
        />
      </div>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div>
            <div className="p-4 shadow-sm rounded-3" data-aos="fade-up" style={{ backgroundColor: "#f8f8f8ff" }}>
              <h4 className="mb-3" style={{ color: "#001B55" }}>
                ¿Qué aprenderás en este curso?
              </h4>

              {/* Texto principal */}
              <p className="text-muted" style={{ lineHeight: "1.7" }}>
                {course.fullDescription}
              </p>

              <div
                className="p-3 rounded-3 mt-3 mb-4"
                style={{
                  backgroundColor: "#E8F3FF",
                  borderLeft: "5px solid #007bff",
                }}
              >
                <strong style={{ color: "#001B55" }}>Nota importante:</strong>
                <p className="mb-0 text-muted">
                  Nuestro programa está diseñado para adaptarse a diferentes
                  niveles, por lo que podrás avanzar a tu propio ritmo y
                  reforzar lo que necesites.
                </p>
              </div>

              {/* Lista de puntos clave */}
              <h5 className="mb-3" style={{ color: "#001B55" }}>
                Este curso te permitirá:
              </h5>
              <ul className="text-muted" style={{ lineHeight: "1.8" }}>
                <li>
                  Comprender los temas clave de forma clara y estructurada.
                </li>
                <li>
                  Acceder a recursos actualizados y materiales exclusivos.
                </li>
                <li>
                  Recibir acompañamiento académico durante tu aprendizaje.
                </li>
                <li>
                  Prepararte para evaluaciones y certificaciones oficiales.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5" data-aos="fade-up">
        <div className="row g-4">
          {beneficios.map((b, i) => (
            <div key={i} className="col-md-6 d-flex">
              <div className="p-4 shadow-sm rounded-3 d-flex align-items-start h-100 w-100" style={{ backgroundColor: "#f8f8f8ff" }}>
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    backgroundColor: "#007bff1a",
                    color: "#007bff",
                    fontSize: "28px",
                    flexShrink: 0,
                  }}
                >
                  {b.icon}
                </div>

                {/* TEXTO */}
                <div className="d-flex flex-column">
                  <h5 className="fw-bold mb-1" style={{ color: "#001B55" }}>
                    {b.title}
                  </h5>
                  <p className="mb-0 text-muted">{b.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
