import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import Product from "../Product/Product";
import "./Experts.css";
import { coursesInfo } from "../../utils/course-info";

export default function Experts() {
    return (
        <div className="container">
            <div data-aos="fade-up">
                <SectionHeader
                    subtitle="Nuestros Cursos"
                    title="Formación Académica de Calidad"
                    paragraph="Explora nuestros programas educativos diseñados para ayudarte a alcanzar el éxito académico desde la primaria hasta el bachillerato."
                />
            </div>
            <div className="row justify-content-center" data-aos="fade-up">
                {coursesInfo.map((item, index) => (
                    <div
                        key={index}
                        className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4"
                    >
                        <Product
                            paramName={item.paramName}
                            thumbnails={item.thumbnails}
                            category={item.category}
                            title={item.title}
                            description={item.description}
                            badge={item.badge}
                            stars={item.stars}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
