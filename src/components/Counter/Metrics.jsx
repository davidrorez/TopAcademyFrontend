export default function Metrics({ value, title }) {
  return (
    <div className="d-flex flex-column align-items-center p-3 gap-2 text-center"
        style={{ maxWidth: "100%", width: "230px" }}>
      <h1 className="text-primary fw-bold display-4 m-0">{value}</h1>
      <h5 className="fw-bold text-dark m-0">{title}</h5>
    </div>
  );
}
