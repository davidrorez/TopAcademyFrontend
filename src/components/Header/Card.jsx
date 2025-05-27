export default function Card({ icon, title, description }) {
  return (
    <div className="card p-4 shadow-sm" style={{ maxWidth: '20rem', borderRadius: '0.5rem' }}>
      <div
        className="bg-primary rounded-circle d-flex justify-content-center align-items-center mb-3"
        style={{ width: '4rem', height: '4rem', padding: '0.75rem' }}
      >
        <div className="text-white fs-2 d-flex justify-content-center align-items-center">
          {icon}
        </div>
      </div>
      <h3 className="text-dark fs-5 fw-bold">{title}</h3>
      <div
        className="bg-primary my-3"
        style={{ width: '3rem', height: '0.125rem' }}
      ></div>
      <p className="text-secondary fs-7">{description}</p>
    </div>
  );
}
