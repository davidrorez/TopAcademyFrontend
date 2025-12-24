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
      text: "Clases diseñadas paso a paso para personas adultas que necesitan claridad, no confusión.",
      icon: <FaTools size={32} color="#00A6FF" />,
    },
    {
      title: "Modalidad Flexible",
      text: "Estudia desde casa, ajustando tus horarios sin descuidar tu trabajo o familia.",
      icon: <FaLaptop size={32} color="#00A6FF" />,
    },
    {
      title: "Acceso Ilimitado",
      text: "Repite las clases y consulta el material todas las veces que lo necesites.",
      icon: <FaClock size={32} color="#00A6FF" />,
    },
    {
      title: "Certificación Incluida",
      text: "Completa tu preparación y avanza con respaldo académico.",
      icon: <FaCertificate size={32} color="#00A6FF" />,
    },
  ];

  return (
    <div className="container mt-5">
      <div data-aos="fade-up">
        <SectionHeader
          subtitle={course.category}
          title={course.title}
          paragraph={course.paragraph}
        />
      </div>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div>
            <div
              className="p-4 shadow-sm rounded-3"
              data-aos="fade-up"
              style={{ backgroundColor: "#f8f8f8ff" }}
            >
              <h4 className="mb-3" style={{ color: "#001B55" }}>
                ¿Qué aprenderás en este curso?
              </h4>
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
                <p className="mb-0 text-muted">{course.note}</p>
              </div>

              <h5 className="mb-3" style={{ color: "#001B55" }}>
                Este curso te permitirá:
              </h5>
              <ul className="text-muted" style={{ lineHeight: "1.8" }}>
                {course.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5" data-aos="fade-up">
        <div className="row g-4">
          {beneficios.map((b, i) => (
            <div key={i} className="col-md-6 d-flex">
              <div
                className="p-4 shadow-sm rounded-3 d-flex align-items-start h-100 w-100"
                style={{ backgroundColor: "#f8f8f8ff" }}
              >
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
