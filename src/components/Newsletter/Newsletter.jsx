import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Consulta desde el sitio web";
    const mailtoLink = `mailto:loschiniticos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Correo del usuario: ${email}\n\nMensaje:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h6 className="text-primary">Contacto</h6>
        <h3 className="fw-bold">Estamos aquí para responder a tus preguntas</h3>
        <p className="text-muted">
          Si tienes alguna consulta o necesitas más información, no dudes en escribirnos. Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="newsletter-email-input" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="newsletter-email-input"
                  placeholder="Ej: usuario@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newsletter-message-input" className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  id="newsletter-message-input"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
