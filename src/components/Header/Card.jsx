import "./Card.css"
export default function Card({icon, title, description}) {
    return (
        <div className="card">
            <div className="icon-container">
                <div className="icon">{icon}</div>
            </div>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    )
}