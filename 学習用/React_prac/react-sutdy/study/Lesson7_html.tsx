import "./../css/Lesson7_study.css"

type SportCardProps = {
    name: string;
    location: string;
    description: string;
};

export function Lesson7_html({name,location,description}:SportCardProps) {
    return (
    <article className="spot-card">
      <h3 className="spot-card__title">{name}</h3>
      <p className="spot-card__location">{location}</p>
      <p className="spot-card__description">
        {description}
      </p>
    </article>
  );
}