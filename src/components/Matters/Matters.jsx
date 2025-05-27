import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import kid from '../../assets/kid.png';
import rectangleBg from '../../assets/t.svg';

export default function Matters() {
    return (
        <div
            className="container-fluid py-5"
            style={{
                backgroundImage: `url(${rectangleBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderTopLeftRadius: "100px",
                borderBottomRightRadius: "100px"
            }}
        >
            <div className="row align-items-center justify-content-between px-3 gap-4">
                {/* Left Section */}
                <div className="col-lg-5 col-md-6">
                    <div className="d-flex flex-column align-items-start gap-4 ms-lg-5">
                        <h2 className="fw-bold text-dark" style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
                            Cada Estudiante Importa
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                            En nuestra academia, creemos que cada estudiante tiene un potencial único.
                            Nos esforzamos por ofrecer una educación personalizada que inspire,
                            motive y prepare a nuestros alumnos para alcanzar sus metas académicas y personales.
                        </p>
                        <div className="d-flex align-items-center gap-2 border-bottom border-dark-subtle pb-1" style={{ cursor: 'pointer' }}>
                            <h6 className="mb-0 fw-bold text-dark" style={{ letterSpacing: '1px' }}>Aprende más</h6>
                            <IoIosArrowForward size={16} className="text-dark" />
                        </div>
                        <div className="bg-primary" style={{ height: '5px', width: '95px' }} />
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-5 col-md-6 position-relative d-flex justify-content-center">
                    <img src={kid} alt="Niño estudiando" className="img-fluid" style={{ maxWidth: '280px' }} />
                </div>
            </div>
        </div>
    );
}
