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
                        thumbnails={ProductThumbnails3}
                        category={"Bachillerato"}
                        title={"Bachillerato por Madurez"}
                        description={"Obtén la preparación necesaria para superar tus exámenes con éxito."}
                        listNames={["Materias Disponibles", "Cualquier materia sola", "Solo Matématicas", "Bloque completo"]}	
                        listPrices={["Sociales, Cívica, Español, Inglés, Biología, Matemáticas", "8,000", "10,000", "30,000"]}
                        badge={"30%"}
                        stars={"5.0"}
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails2}
                        category={"Tercer Ciclo"}
                        title={"Tercer Ciclo (séptimo, octavo y noveno) por Madurez"}
                        description={"Refuerza tus conocimientos y prepárate para el bachillerato con confianza."}
                        listNames={["1 materia", "2 materias", "3 materias", "4 materias", "5 y 6 materias", "Bloque completo"]}
                        listPrices={["5,000", "10,000", "15,000", "20,000", "25,000", "25,000"]}
                        badge={"20%"}
                        stars={"4.9"}
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Primaria"}
                        title={"Primaria por Madurez"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        listNames={["1 materia", "2 materias", "3 materias", "4 materias", "5 materias", "Bloque completo"]}
                        listPrices={["5,000", "10,000", "15,000", "20,000", "25,000", "25,000"]}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails3}
                        category={"Curso Inglés"}
                        title={"Curso de Inglés"}
                        description={"Obtén la preparación necesaria para superar tus exámenes con éxito."}
                        listNames={["Regular", "Semi-Intensivo", "Intensivo", "Costo matrícula"]}	
                        listPrices={["20,000", "42,500", "60,000", "15,000"]}
                        badge={"30%"}
                        stars={"5.0"}
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails2}
                        category={"Curso Portugués"}
                        title={"Curso de Portugués"}
                        description={"Refuerza tus conocimientos y prepárate para el bachillerato con confianza."}
                        listNames={["Regular", "Semi-Intensivo", "Intensivo", "Costo matrícula"]}	
                        listPrices={["20,000", "42,500", "60,000", "15,000"]}
                        badge={"20%"}
                        stars={"4.9"}
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Cursos Técnicos"}
                        title={"Cursos Técnicos"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        listNames={["Administración", "Asistente Preescolar", "Recursos Humanos", "Logística", "Contabilidad", "Mercadeo", "Costo matrícula"]}
                        listPrices={["20,000", "20,000", "20,000", "20,000", "20,000", "20,000", "15,000"]}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>

                <div className="col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Cursos Libres"}
                        title={"Cursos Libres"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        listNames={["Administración", "Asistente Preescolar", "Recursos Humanos", "Logística", "Contabilidad", "Mercadeo", "Costo matrícula"]}
                        listPrices={["12,000", "12,000", "12,000", "12,000", "12,000", "12,000", "15,000"]}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>

                <div className="col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Talleres"}
                        title={"Talleres"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        listNames={["Psicopedagogía", "Servicio al Cliente", "Habilidades Blandas"]}
                        listPrices={["15,000", "15,000", "15,000"]}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>

                <div className="col-md-4 d-flex justify-content-center mb-4">
                    <Product
                        thumbnails={ProductThumbnails1}
                        category={"Admisión"}
                        title={"Admisión"}
                        description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                        listNames={["UCR y UNA", "TEC"]}
                        listPrices={["0", "0"]}
                        badge={"20%"}
                        stars={"4.8"}
                    />
                </div>
            </div>
        </div>
    );
}
