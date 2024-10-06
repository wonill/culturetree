/* eslint-disable react/prop-types */
import style from "../styles/RankingShows.module.css";
// import genreCodes from "../utils/genreCodes.js";

const RankingShows = ({ genre }) => {
  const shows = [
    { title: "Show A", rank: 1, imgSrc: "path/to/image1.png" },
    { title: "Show B", rank: 2, imgSrc: "path/to/image2.png" },
    { title: "Show C", rank: 3, imgSrc: "path/to/image3.png" },
  ];

  return (
    <section className={style.shows}>
      {shows.map((show) => (
        <div key={show.rank} className={style.showCard}>
          <img src={show.imgSrc} alt={show.title} className={style.showImage} />
          <h2>{show.title}</h2>
          <p>Rank {show.rank}</p>
        </div>
      ))}
    </section>
  );
};

export default RankingShows;
