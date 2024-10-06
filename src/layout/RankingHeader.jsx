/* eslint-disable react/prop-types */
import style from "../styles/RankingHeader.module.css";

const RankingHeader = ({ onGenreChange, activeGenre }) => {
  const genres = [
    "무용",
    "뮤지컬",
    "한국음악",
    "대중음악",
    "서커스/마술",
    "아동/가족",
    "연극",
  ];

  return (
    <section className={style.rankingHeader}>
      <h2>예매 순위</h2>
      <nav className={style.nav}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`${style.navButton} ${
              activeGenre === genre ? style.active : ""
            }`}
          >
            {genre}
          </button>
        ))}
      </nav>
    </section>
  );
};

export default RankingHeader;
