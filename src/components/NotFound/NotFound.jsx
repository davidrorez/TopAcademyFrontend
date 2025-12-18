export default function NotFound() {
    return (
        <div className="container text-center mt-5">
        <h1 className="display-4 fw-bold" style={{ color: "#001B55" }}>
            404
        </h1>
        <p className="text-muted">
            La página que estás buscando no existe o ha sido movida.
        </p>
        <a href="/" className="btn btn-primary mt-3">Volver al inicio</a>
        </div>
    );
}