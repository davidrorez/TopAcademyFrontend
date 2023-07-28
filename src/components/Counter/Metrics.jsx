import React from "react";
import "./Metrics.css"

export default function Matrics({value, title}){
    return(
        <div className="metrics">
            <h1 className="m-value">{value}</h1>
            <h5 className="m-title">{title}</h5>
        </div>
    )
}