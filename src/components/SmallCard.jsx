/* eslint-disable react/prop-types */
import style from "../styles/SmallCard.module.css";

const SmallCard = ({ title, dateFrom, dateTo, imgSrc, facility }) => {
  return (
    <div className={style.card}>
      <img src={imgSrc} alt={title} className={style.cardImage} />
      <div className={style.cardContent}>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardFacility}>{facility}</p>
        <p className={style.cardDate}>{`${dateFrom} ~ ${dateTo}`}</p>
      </div>
    </div>
  );
};

export default SmallCard;
