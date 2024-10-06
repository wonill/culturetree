import { useState, useEffect } from "react";
import style from "../styles/RecommendedEvents.module.css";
import axios from "axios";
import genreCodes from "../utils/genreCodes";

const RecommendedEvents = () => {
  const [activeTab, setActiveTab] = useState("무용");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/eventsByGenre?code=${genreCodes[activeTab]}&num=4`
        );
        setEvents(res.data.dbs.db);
      } catch (e) {
        console.error(e);
      }
    };

    callApi();
  }, [activeTab]);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className={style.recommendedEventsContainer}>
      <h2 className={style.title}>장르별 추천 공연</h2>
      <div className={style.genreTabs}>
        {[
          "무용",
          "뮤지컬",
          "한국음악",
          "대중음악",
          "서커스/마술",
          "아동/가족",
          "연극",
        ].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? style.activeTab : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={style.cardContainer}>
        {events.map((event) => (
          <div key={event.mt20id} className={style.card}>
            <img src={event.poster} alt={event.title} className={style.image} />
            <div className={style.cardTitle}>{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedEvents;
