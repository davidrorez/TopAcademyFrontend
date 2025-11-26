import React from "react";
import Metrics from "./Metrics";

export default function Counter() {
  return (
    <div className="container py-5">
      <div className="row gy-4 justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
          <Metrics value={"2,000+"} title={"Estudiantes Graduados"} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
          <Metrics value={"95%"} title={"Tasa de Aprobación"} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
          <Metrics value={"2+"} title={"Años de Experiencia"} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
          <Metrics value={"50+"} title={"Profesores Calificados"} />
        </div>
      </div>
    </div>
  );
}
