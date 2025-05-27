import React from "react";
import "./Newsletter.css"

export default function Newsletter(){
    return(
        <div className="newsletter">
            <div className="section-title">
                <h6 className="subtitle">Contacto</h6>
                <h3 className="title">Estamos aquí para responder a tus preguntas</h3>
                <p className="pargraph">Si tienes alguna consulta o necesitas más información, no dudes en escribirnos. Estamos aquí para ayudarte. </p>
            </div>
            <div className="email-box">
                <input type="text" id="newsletter-email-input" placeholder="Correo electrónico" />
                <input type="button" value="Enviar" id="subscribe-button" />
            </div>
        </div>
    )
}