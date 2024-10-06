// import EventCard from "../components/EventCard";
// import ListCard from "../components/ListCard";

import { useState } from "react";
import RankingHeader from "../layout/RankingHeader.jsx";
import RankingShows from "../layout/RankingShows.jsx";
import RankingList from "../layout/RankingList.jsx";
import style from "../styles/Ranking.module.css";
// import genreCodes from "../utils/genreCodes.js";

const Ranking = () => {
  const [activeGenre, setActiveGenre] = useState("무용");

  const handleGenreChange = (genre) => {
    setActiveGenre(genre);
  };

  return (
    <div className={style.rankingContainer}>
      <RankingHeader
        onGenreChange={handleGenreChange}
        activeGenre={activeGenre}
      />
      <RankingShows genre={activeGenre} />
      <RankingList genre={activeGenre} />
    </div>
  );
};

export default Ranking;
