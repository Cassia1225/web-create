import "./../css/Lesson5_style.css";

export function Lesson5_html() {
    return (
    <article className="spot-card">
      <h3 className="spot-card__title">
        名探偵コナン
      </h3>
      <p className="spot-card__location">
        東京都
      </p>
      <a
        className="spot-card__link"
        href="https://www.google.com/maps"
      >
        Google Mapsで見る
      </a>
    </article>

  );
}