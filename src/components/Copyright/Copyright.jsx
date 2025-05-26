import React from "react";
import {AiFillGithub, AiFillHeart} from "react-icons/ai"
import {CgFigma} from "react-icons/cg"
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