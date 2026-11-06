import "../css/ProfileCard.css"

type ProfileCardProps = {
    name: string;
    role: string;
    description: string;
};

export function Lesson7_test({name,role,description}:ProfileCardProps) {
    return(
        <article className="profile-card">
            <h2 className="profile-card__name">
                {name}
            </h2>

            <p className="profile-card__role">
                {role}
            </p>

            <p className="profile-card__description">
                {description}
            </p>
        </article>
    );
}