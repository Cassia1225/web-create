
import "./../css/Lesson11_style.css";

type Spot = {
  id: number;
  name: string;
  description: string;
};

const spots: Spot[] = [
  { id: 1, name: "スポットA", description: "聖地スポットの説明A" },
  { id: 2, name: "スポットB", description: "聖地スポットの説明B" },
  { id: 3, name: "スポットC", description: "聖地スポットの説明C" },
  { id: 4, name: "スポットD", description: "聖地スポットの説明D" },
  { id: 5, name: "スポットE", description: "聖地スポットの説明E" },
  { id: 6, name: "スポットF", description: "聖地スポットの説明F" },
];

export function Lesson11() {
  return (
    <section aria-labelledby="spots-title">
      <h2 id="spots-title">聖地スポット一覧</h2>

      <div className="spot-grid">
        {spots.map((spot) => (
          <article className="spot-card" key={spot.id}>
            <h3>{spot.name}</h3>
            <p>{spot.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
