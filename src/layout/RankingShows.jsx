/* eslint-disable react/prop-types */
import style from "../styles/RankingShows.module.css";
// import genreCodes from "../utils/genreCodes.js";
import EventCard from "../components/EventCard";

const RankingShows = ({ genre }) => {
  const events = [
    {
      mt20id: 4,
      prfnm: "[뮤지컬] 유기견 보호 이야기",
      prfpdfrom: "2024.06.01",
      prfpdto: "2024.06.01",
      poster: `http://www.kopis.or.kr/upload/pfmPoster/PF_PF250432_241004_111112.gif`,
    },
    {
      mt20id: 4,
      prfnm: "[뮤지컬] 유기견 보호 이야기",
      prfpdfrom: "2024.06.01",
      prfpdto: "2024.06.01",
      poster: `http://www.kopis.or.kr/upload/pfmPoster/PF_PF250432_241004_111112.gif`,
    },
    {
      mt20id: 4,
      prfnm: "[뮤지컬] 유기견 보호 이야기",
      prfpdfrom: "2024.06.01",
      prfpdto: "2024.06.01",
      poster: `http://www.kopis.or.kr/upload/pfmPoster/PF_PF250432_241004_111112.gif`,
    },
  ];

  return (
    <section className={style.shows}>
      {events.map((event) => (
        <EventCard
          key={event.mt20id}
          title={event.prfnm}
          dateFrom={event.prfpdfrom}
          dateTo={event.prfpdto}
          imgSrc={event.poster}
        />
      ))}
    </section>
  );
};

export default RankingShows;
