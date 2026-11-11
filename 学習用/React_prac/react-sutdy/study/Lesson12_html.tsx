
import "./Lesson12.css";

export function Lesson12() {
  return (
    <section className="spot-section">
      <article className="spot-card">
        <h2 className="spot-card__title">
          名探偵コナン
        </h2>

        <p className="spot-card__description">
          東京都の聖地スポット
        </p>

        <a
          href="#spot-details"
          className="spot-card__link"
        >
          詳細を見る
        </a>
      </article>

      <section id="spot-details">
        <h2>スポット詳細</h2>
        <p>ここに聖地の紹介を表示する。</p>
      </section>
    </section>
  );
}
