import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Matters.css";
import kid from '../../assets/kid.png';
import rectangleBg from '../../assets/t.svg';

export default function Matters() {
    return (
        <div
        className="matters"
        style={{ 
            backgroundImage: `url(${rectangleBg})`,
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: "100px",
            borderBottomRightRadius: "100px"
        }}
>

            <div className="left">
                <h2 className="title">Cada Estudiante Importa</h2>
                <p className="paragraph">
                    En nuestra academia, creemos que cada estudiante tiene un potencial único.
                    Nos esforzamos por ofrecer una educación personalizada que inspire,
                    motive y prepare a nuestros alumnos para alcanzar sus metas académicas y personales.
                </p>
                <div className="learn-more">
                    <h6>Aprende más</h6>
                    <IoIosArrowForward className="icon" />
                </div>
            </div>
            <div className="right">
                <div className="main-image">
                    <img src={kid} alt="Niño estudiando" />
                </div>
            </div>
        </div>
    );
}
