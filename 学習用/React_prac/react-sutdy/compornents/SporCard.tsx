type SportCardProps = {
    name : string;
    description : string;
};

export function SpotCard({
    name,description} : SportCardProps) {
    return (
        <article className="spot-card">
            <h3>{name}</h3>
            <p>{description}</p>
        </article>
    );
}