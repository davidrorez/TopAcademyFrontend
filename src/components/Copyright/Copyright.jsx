import React from "react";
import "./Copyright.css"

export default function Copyright(){
    return(
        <footer className="copyright">
            <div>
                © {new Date().getFullYear()} TopAcademy. Todos los derechos reservados.
            </div>
        </footer>
    )
}