import React from "react"
import "./SectionHeader.css"

export default function SectionHeader({subtitle, title, paragraph}){
    return(
        <div className="SectionHeader">
            <h6 className="subtitle">{subtitle}</h6>
            <h2 className="title">{title}</h2>
            <p className="paragraph">{paragraph}</p>
        </div>
    )
}