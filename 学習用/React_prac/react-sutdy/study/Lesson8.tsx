import type {Profile} from "./../model/Profile"
import "./../css/Lesson8_style.css"

export function ProfileCard({name,role,description}:Profile) {
  return (
    <article className="profile-card">
      <h2 className="profile-card__name">{name}</h2>
      <p className="profile-card__role">{role}</p>
      <p className="profile-card__description">
        {description}
      </p>
    </article>
  );
}