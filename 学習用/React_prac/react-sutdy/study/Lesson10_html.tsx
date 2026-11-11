
import "./../css/Lesson10_style.css";

type Spot = {
  id: number;
  name: string;
  location: string;
};

const spots: Spot[] = [
  { id: 1, name: "名探偵コナン", location: "東京都" },
  { id: 2, name: "ゆるキャン△", location: "山梨県" },
  { id: 3, name: "ぼっち・ざ・ろっく！", location: "東京都" },
];

export function Lesson10() {
  return (
    <section className="spot-list">
      {spots.map((spot) => (
        <article className="spot-card" key={spot.id}>
          <h2>{spot.name}</h2>
          <p>{spot.location}</p>
        </article>
      ))}
    </section>
  );
}
