import { IoIosArrowForward } from "react-icons/io";
import rectangleBg from '../../assets/t.svg';

export default function Matters() {

    const goToYoutubeChannel = () => {
        window.open("https://www.youtube.com/@TopAcademycr", "_blank")
    };

    const youtubeVideos = [
        "https://www.youtube.com/embed/-C3guV3goqs",
        "https://www.youtube.com/embed/WA-2qP_ppwA",
        "https://www.youtube.com/embed/1dkVp1X8v1w",
    ];

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
                        <div className="d-flex align-items-center gap-2 pb-1" style={{ cursor: 'pointer' }}>
                            <button className="btn btn-dark" onClick={goToYoutubeChannel}> Nuestro canal de YouTube </button>
                        </div>
                    </div>
                </div>

                {/* Right Section: Lista de videos */}
                <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center gap-4">
                    {youtubeVideos.map((videoUrl, index) => (
                        <div key={index} className="ratio ratio-16x9" style={{ width: '100%', maxWidth: '420px' }}>
                            <iframe
                                width="468"
                                height="832"
                                src={videoUrl}
                                title={`Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
