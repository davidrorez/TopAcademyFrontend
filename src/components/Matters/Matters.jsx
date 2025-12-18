import { FaYoutube } from "react-icons/fa";

export default function Matters() {

    const goToYoutubeChannel = () => {
        window.open("https://www.youtube.com/@TopAcademycr", "_blank");
    };

    const youtubeVideos = [
        "https://www.youtube.com/embed/-C3guV3goqs",
        "https://www.youtube.com/embed/WA-2qP_ppwA",
        "https://www.youtube.com/embed/1dkVp1X8v1w",
    ];

    return (
        <section className="container my-5 py-5 p-4 shadow rounded-3 d-flex align-items-start h-100 w-80" id="us" 
            style={{ backgroundColor: "#f8f8f8ff" }}>
            <div className="row g-5 align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-lg-5 col-md-6" data-aos="fade-right">
                    <h2>
                        Cada Estudiante Importa
                    </h2>

                    <p
                        className="text-muted mt-3"
                    >
                        En nuestra academia creemos en el potencial único de cada estudiante.
                        Ofrecemos una educación personalizada que inspira, motiva y prepara
                        para alcanzar metas académicas y personales.
                    </p>

                    <button
                        className="btn btn-primary d-flex align-items-center gap-2 mt-4 px-4 py-2"
                        style={{ borderRadius: "10px", fontSize: "1rem" }}
                        onClick={goToYoutubeChannel}
                    >
                        <FaYoutube size={20} />
                        Visitar canal de YouTube
                    </button>
                </div>

                {/* RIGHT VIDEOS */}
                <div className="col-lg-7 col-md-6 d-flex flex-wrap justify-content-center gap-4" data-aos="fade-left">

                    {youtubeVideos.map((videoUrl, index) => (
                        <div
                            key={index}
                            className="ratio ratio-16x9 shadow-sm rounded-3"
                            style={{
                                width: "100%",
                                maxWidth: "420px",
                                overflow: "hidden",
                                transition: "transform .3s"
                            }}
                        >
                            <iframe
                                src={videoUrl}
                                title={`Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-100 h-100"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
