import React from "react";
import Matrics from "./Metrics";
import "./Counter.css"

export default function Counter() {
    return (
        <div className="counter">
            <Matrics value={"1,000+"} title={"Estudiantes Graduados"} />
            <Matrics value={"95%"} title={"Tasa de Aprobación"} />
            <Matrics value={"10+"} title={"Años de Experiencia"} />
            <Matrics value={"50+"} title={"Profesores Calificados"} />
        </div>
    );
}
