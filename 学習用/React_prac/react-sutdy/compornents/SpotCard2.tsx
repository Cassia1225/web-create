
import "../css/Card.css";

type SpotCardProps = {
  name: string;
  location: string;
};

export function SpotCard2({ name, location }: SpotCardProps) {
  return (
    <article className="spot-card">
      <h3 className="spot-card__title">{name}</h3>
      <p className="spot-card__location">{location}</p>
      <a className="spot-card__link" href="https://www.google.com/maps">
        Google Mapsで見る
      </a>
    </article>
  );
}
