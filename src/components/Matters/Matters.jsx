import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Matters.css";
import imageBottom from '../../assets/image-bottom.png';
import imageTopLeft from '../../assets/image-top-left.png';
import rectangleCircle from '../../assets/Rectangle-circle.svg';
import rectangleWide from '../../assets/Rectangle-wide.svg';
import kid from '../../assets/kid.png';
import rectangleBg from '../../assets/Rectangle-bg.png';

export default function Matters() {
    return (
        <div
            className="matters"
            style={{ backgroundImage: `url(${rectangleBg})`,
            backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        >
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
                    <img src={kid} alt="kid" />
                </div>
                <div className="absolute-image">
                    <img src={imageBottom} alt="shape" className="image-bottom-right" />
                    <img src={imageTopLeft} alt="shape" className="image-top-right" />
                    <img src={rectangleCircle} alt="shape" className="image-top-left" />
                    <img src={rectangleWide} alt="shape" className="image-bottom-left" />
                </div>
            </div>
        </div>
    );
}
