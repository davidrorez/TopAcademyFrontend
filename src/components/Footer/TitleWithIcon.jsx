import React from "react";
import "./TitleWithIcon.css"



export default function TitleWithIcon({innerText, Icon}){
    return(
        <div className="footer-title-with-icon">
            <div className="icon">
                {Icon}
            </div>
            <h6 className="inner-text">{innerText}</h6>
        </div>
    )
}