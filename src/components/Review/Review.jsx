import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import Comment from "../Comment/Comment";
import "./Review.css";
import Avatar1 from "../../assets/Avatar.jpg";
import Avatar2 from "../../assets/Avatar.jpg";
import Avatar3 from "../../assets/Avatar.jpg";

export default function Review() {
    return (
        <div className="review">
            <SectionHeader
                subtitle={"Testimonios"}
                title={"Lo que dicen nuestros estudiantes"}
                paragraph={"Nuestros estudiantes comparten cómo la academia ha impactado positivamente su aprendizaje y crecimiento académico."}
            />
            <div className="review-container">
                <Comment
                    username={"Ana López"}
                    title={"Estudiante de Primaria"}
                    profile_src={Avatar1}
                    text={"Gracias a la academia ahora entiendo mejor las matemáticas y me divierto aprendiendo todos los días."}
                />
                <Comment
                    username={"Diego Martínez"}
                    title={"Estudiante de Tercer Ciclo"}
                    profile_src={Avatar2}
                    text={"Las clases son dinámicas y los profesores explican muy bien. Me siento más seguro con mis tareas y exámenes."}
                />
                <Comment
                    username={"Valeria Gómez"}
                    title={"Estudiante de Bachillerato"}
                    profile_src={Avatar3}
                    text={"La preparación para los exámenes de bachillerato ha sido excelente. Estoy mucho más preparada gracias a sus cursos."}
                />
            </div>
        </div>
    );
}
