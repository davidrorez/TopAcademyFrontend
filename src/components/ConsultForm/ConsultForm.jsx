import { useState } from "react";
import { redirectToWhatsApp } from "../../utils/whatsapp";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";

export default function ConsultForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalMessage = `Hola, mi nombre es ${name}. ${msg}`;

    redirectToWhatsApp({
      phone: "50687884669",
      message: finalMessage,
    });

    setName("");
    setMsg("");
  };
  return (
    <div className="container my-5" id="consult-form" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow border-0 rounded-4 p-4 h-100">
            <div className="text-center mb-4">
              <h4 className="fw-bold">¿Tienes alguna consulta?</h4>
              <p className="text-muted small">
                Completa el formulario y un asesor se pondrá en contacto
                contigo.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Nombre completo
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <AiOutlineUser />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Mensaje</label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <AiOutlineMessage className="mt-1" />
                  </span>
                  <textarea
                    className="form-control"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    rows={4}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    required
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 fw-semibold rounded-3 d-flex justify-content-center align-items-center gap-2"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
