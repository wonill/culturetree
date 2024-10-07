/* eslint-disable react/prop-types */
import style from "../styles/ListCard.module.css";

const EventCard = ({ title, dateFrom, dateTo, imgSrc }) => {
  return (
    <div className={style.event_card}>
      <img src={imgSrc} alt={title} />
      <div className={style.info}>
        <span>{title}</span>
        <p>{`${dateFrom} ~ ${dateTo}`}</p>
      </div>
    </div>
  );
};

export default EventCard;
