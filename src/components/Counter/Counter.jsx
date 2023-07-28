import React from "react";
import Matrics from "./Metrics";
import "./Counter.css"

export default function Counter(){
    return(
        <div className="counter">
            <Matrics value={"15k"} title={"Happy Customers"} />
            <Matrics value={"150k"} title={"Monthly Visitors"} />
            <Matrics value={"20+"} title={"Countries  Worldwide"} />
            <Matrics value={"100+"} title={"Top Partners"} />
        </div>
    )
}