import { coursesInfo } from "../../utils/course-info";
import { useParams } from "react-router-dom";
import { redirectToWhatsApp } from "../../utils/whatsapp";
import bgHeader from "../../assets/bg-header.jpg";
import rectangleBg from "../../assets/t2.svg";
import "./../Header/Header.css";

const CourseHeader = () => {
    const { paramName } = useParams();

    const course = coursesInfo.find((course) => course.paramName === paramName);

    if (!course) {
        return (<div className="container-fluid mt-2 pt-5">
            <h2 className="text-center">Curso no encontrado</h2>
        </div>
        );
    }

    const whatsappMessage = (title) => {
      redirectToWhatsApp({
        phone: "50687884669",
        message: `¡Hola! Estoy interesado/a en obtener más información sobre el curso "${title}" en Top Academy.`,
      });
    };

  return (
    <div className="mt-2 pt-5 overflow-hidden" id="inicio">
      <div
        style={{
          width: "100vw",
          backgroundImage: `url(${bgHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "2rem",
        }}
      >
        <div className="container pb-5 my-5">
          <div className="row px-4 py-5 align-items-center">
          {/* IZQUIERDA */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-4 mt-4" data-aos="fade-right">
            <h1 className="text-dark display-5 display-md-4">
                {course.title}
            </h1>
            <h4 className="text-muted fs-6 fs-md-5">
                {course.quote}
            </h4>
          <div className="row">
            <div className="col-12 col-md-6">
              <button
                className="btn btn-primary w-100 px-4 py-2 rounded-3"
                onClick={() => whatsappMessage(course.title)}
              >
                Matricular ahora
              </button>
            </div>
          </div>
          </div>

          {/* DERECHA */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center mt-4 mt-lg-0" data-aos="fade-left">
            <img
              src={course.thumbnails}
              alt="intro"
              className="img-fluid responsive-img rounded-circle"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default CourseHeader;
