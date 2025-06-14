import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import rectangleBg from '../../assets/t.svg';

export default function Matters() {

    const goToYoutubeChannel = () => {
        window.open("https://www.youtube.com/", "_blank")
    };
    const linkYoutubeVideo = "https://www.youtube.com/embed/-C3guV3goqs";

    return (
        <div
            className="container-fluid py-5" id="us"
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
                            <button className="btn btn-dark" onClick={goToYoutubeChannel}> Aprende más
                                <IoIosArrowForward size={16}/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-5 col-md-6 position-relative d-flex justify-content-center">
                    <div className="ratio ratio-16x9" style={{ width: '100%', maxWidth: '420px' }}>
                        <iframe width="468"
                            height="832"
                            src={linkYoutubeVideo}
                            title="Top Academy"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
