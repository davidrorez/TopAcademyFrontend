export default function Card({ icon, title, description }) {
  return (
    <div className="h-100 shadow rounded-3 text-center p-4" style={{ backgroundColor: "#f8f8f8ff" }}>
      <div
        className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff1a",
          color: "#007bff",
          fontSize: "1.8rem",
        }}
      >
        {icon}
      </div>
      <h5>{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
  );
}
