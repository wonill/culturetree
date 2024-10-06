import { useState, useEffect } from "react";
import axios from "axios";
import style from "../styles/TicketOpen.module.css";
const TicketOpen = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const currentDate = new Date();

  const parseDate = (dateString) => {
    const [year, month, day] = dateString.split(".").map(Number);
    return new Date(year, month - 1, day);
  };

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/ticketOpen");
        setEvents(res.data.dbs.db);
      } catch (e) {
        console.error(e);
        setError("데이터를 불러오는 데 실패했습니다.");
      }
    };

    callApi();
  }, []);

  if (error) return <div>에러: {error}</div>;

  if (events.length < 2) {
    return <div>이벤트가 충분하지 않습니다.</div>;
  }

  let sorted = events
    .filter((event) => parseDate(event.prfpdfrom) > currentDate)
    .sort((a, b) => parseDate(a.prfpdfrom) - parseDate(b.prfpdfrom));

  return (
    <section className={style.ticketOpenContainer}>
      <h2 className={style.title}>티켓 오픈</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <img src={sorted[0].poster} alt="Chicago" className={style.image} />
        </div>
        <div className={style.card}>
          <img src={sorted[1].poster} alt="Musical" className={style.image} />
        </div>
      </div>
    </section>
  );
};

export default TicketOpen;
