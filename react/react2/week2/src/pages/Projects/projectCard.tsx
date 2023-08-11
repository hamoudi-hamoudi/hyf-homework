import "./projectCard.css";

interface Icard {
  title: string;
  description: string;
}

function Card({ title, description }: Icard) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
export default Card;
