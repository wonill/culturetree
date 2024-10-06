// import { Link } from "react-router-dom";
import style from "../styles/BestEvents.module.css";
import EventCard from "../components/EventCard";

const BestEvents = () => {
  const events = [
    {
      id: 1,
      title: "Event A",
      date: "June 25, Venue: Theater X",
      imgSrc: "https://via.placeholder.com/150", // 공연 이미지 URL
      new: true,
    },
    {
      id: 2,
      title: "Event B",
      date: "July 10, Venue: Hall Y",
      imgSrc: "https://via.placeholder.com/150", // 공연 이미지 URL
    },
    {
      id: 3,
      title: "Title",
      date: "Date",
      imgSrc: "https://via.placeholder.com/150", // 공연 이미지 URL
    },
  ];

  return (
    <div className={style.best_events}>
      <h3 className={style.title}>베스트 공연</h3>
      <div>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            imgSrc={event.imgSrc}
            isNew={event.new}
          />
        ))}
      </div>
    </div>
  );
};

export default BestEvents;
