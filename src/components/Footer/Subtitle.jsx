import React from "react";
import "./Subtitle.css"


export default function Subtitle({innerText, href}){
    return(
        <a href={href} className="footer-subtitle">{innerText}</a>
    )
}