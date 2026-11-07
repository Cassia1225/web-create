
import "./../css/Lesson9_style.css";

type SpotCardProps = {
  name: string;
  location: string;
  recommended: boolean;
};

export function SpotCard({
  name,
  location,
  recommended,
}: SpotCardProps) {
  return (
    <article className="spot-card">
      {recommended && (
        <span className="spot-card__badge">
          おすすめ
        </span>
      )}

      <h2 className="spot-card__title">
        {name}
      </h2>

      <p className="spot-card__location">
        {location}
      </p>
    </article>
  );
}
