import React from "react";
import {IoIosArrowForward} from "react-icons/io"
import "./Matters.css"

export default function Matters() {
    return (
        <div className="matters">
            <div className="left">
                <div className="line"></div>
                <h2 className="title">Every Client Matters</h2>
                <p className="paragraph">Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics 
                </p>
                <div className="learn-more">
                    <h6>Learn More</h6>
                    <IoIosArrowForward className="icon" />
                </div>
            </div>
            <div className="right">
                <div className="main-image">
                    <img src="kid.png" alt="kid" />
                </div>
                <div className="absolute-image">
                    <img src="image-bottom.png" alt="shape" className="image-bottom-right" />
                    <img src="image-top-left.png" alt="shape" className="image-top-right" />
                    <img src="Rectangle-circle.svg" alt="shape" className="image-top-left" />
                    <img src="Rectangle-wide.svg" alt="shape" className="image-bottom-left" />
                </div>
            </div>
        </div>
    )
}