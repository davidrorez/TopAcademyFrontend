import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import Product from "../Product/Product";
import "./Experts.css";
import ProductThumbnails1 from "../../assets/product-thumbnails.jpg";
import ProductThumbnails2 from "../../assets/product-thumbnails-2.jpg";
import ProductThumbnails3 from "../../assets/product-thumbnails-2.jpg";

export default function Experts() {
    return (
        <div className="experts container">
            <SectionHeader
                subtitle="Nuestros Cursos"
                title="Formación Académica de Calidad"
                paragraph="Explora nuestros programas educativos diseñados para ayudarte a alcanzar el éxito académico desde la primaria hasta el bachillerato."
            />

            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Primaria"}
                        title={"Programa de Educación Primaria"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        price={"₡15,000"}
                        disscount={"₡12,000"}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails2}
                        category={"Tercer Ciclo"}
                        title={"Preparación Académica para Tercer Ciclo"}
                        description={"Refuerza tus conocimientos y prepárate para el bachillerato con confianza."}
                        price={"₡20,000"}
                        disscount={"₡16,000"}
                        badge={"20%"}
                        stars={"4.9"}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails3}
                        category={"Bachillerato"}
                        title={"Curso Intensivo para Bachillerato"}
                        description={"Obtén la preparación necesaria para superar tus exámenes con éxito."}
                        price={"₡25,000"}
                        disscount={"₡18,750"}
                        badge={"25%"}
                        stars={"5.0"}
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Primaria"}
                        title={"Programa de Educación Primaria"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        price={"₡15,000"}
                        disscount={"₡12,000"}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails2}
                        category={"Tercer Ciclo"}
                        title={"Preparación Académica para Tercer Ciclo"}
                        description={"Refuerza tus conocimientos y prepárate para el bachillerato con confianza."}
                        price={"₡20,000"}
                        disscount={"₡16,000"}
                        badge={"20%"}
                        stars={"4.9"}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails3}
                        category={"Bachillerato"}
                        title={"Curso Intensivo para Bachillerato"}
                        description={"Obtén la preparación necesaria para superar tus exámenes con éxito."}
                        price={"₡25,000"}
                        disscount={"₡18,750"}
                        badge={"25%"}
                        stars={"5.0"}
                    />
                </div>
            </div>
        </div>
    );
}
