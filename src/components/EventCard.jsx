/* eslint-disable react/prop-types */
import "../styles/EventCard.css";

const EventCard = ({ title, date, imgSrc, isNew }) => {
  return (
    <div className="event-card">
      {isNew && <span className="new-badge">New</span>}
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  );
};

export default EventCard;
