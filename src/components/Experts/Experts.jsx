import React from "react";
import SectionHeader from "../Section-Header/SectionHeader";
import Product from "../Product/Product";
import "./Experts.css";
import ProductThumbnails1 from "../../assets/product-thumbnails.jpg";     
import ProductThumbnails2 from "../../assets/product-thumbnails-2.jpg";
import ProductThumbnails3 from "../../assets/product-thumbnails-2.jpg";

export default function Experts() {
    return (
        <div className="experts">
            <SectionHeader
                subtitle="Nuestros Cursos"
                title="Formación Académica de Calidad"
                paragraph="Explora nuestros programas educativos diseñados para ayudarte a alcanzar el éxito académico desde la primaria hasta el bachillerato."
            />
            <div className="products-container">
                <Product
                    thumbnails={ProductThumbnails1}
                    category={"Primaria"}
                    title={"Programa de Educación Primaria"}
                    description={"Desarrolla las bases del aprendizaje en un entorno divertido y estimulante."}
                    price={"₡15,000"}
                    disscount={"₡12,000"}
                    saleCount={"120"}
                    badge={"20%"}
                    stars={"4.8"}
                />
                <Product
                    thumbnails={ProductThumbnails2}
                    category={"Tercer Ciclo"}
                    title={"Preparación Académica para Tercer Ciclo"}
                    description={"Refuerza tus conocimientos y prepárate para el bachillerato con confianza."}
                    price={"₡20,000"}
                    disscount={"₡16,000"}
                    saleCount={"85"}
                    badge={"20%"}
                    stars={"4.9"}
                />
                <Product
                    thumbnails={ProductThumbnails3}
                    category={"Bachillerato"}
                    title={"Curso Intensivo para Bachillerato"}
                    description={"Obtén la preparación necesaria para superar tus exámenes con éxito."}
                    price={"₡25,000"}
                    disscount={"₡18,750"}
                    saleCount={"140"}
                    badge={"25%"}
                    stars={"5.0"}
                />
            </div>
        </div>
    );
}
