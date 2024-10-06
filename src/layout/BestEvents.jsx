// import { Link } from "react-router-dom";
// import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import style from "../styles/BestEvents.module.css";
import axios from "axios";
import EventCard from "../components/EventCard";

const BestEvents = () => {
  const [events, setEvents] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        // setLoading(true);
        const res = await axios.get("http://localhost:5000/api/");
        setEvents(res.data.dbs.db);
      } catch (e) {
        console.error(e);
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        // setLoading(false);
      }
    };

    callApi();
  }, []);

  //   if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className={style.best_events}>
      <h3 className={style.title}>베스트 공연</h3>
      <div>
        {events.map((event) => (
          <EventCard
            key={event.mt20id}
            title={event.prfnm}
            dateFrom={event.prfpdfrom}
            dateTo={event.prfpdto}
            imgSrc={event.poster}
          />
        ))}
      </div>
    </div>
  );
};

export default BestEvents;
