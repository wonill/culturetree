/* eslint-disable react/prop-types */
import style from "../styles/RankingList.module.css";
// import genreCodes from "../utils/genreCodes.js";

const RankingList = ({ genre }) => {
  const rankings = [
    { rank: 4, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
    { rank: 5, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
    { rank: 6, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
    { rank: 7, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
    { rank: 8, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
    { rank: 9, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
    { rank: 10, title: "[뮤지컬] 유기견 보호 이야기", date: "2024.06.01" },
  ];

  return (
    <section className={style.rankingList}>
      {rankings.map((item) => (
        <div key={item.rank} className={style.listItem}>
          <span>{item.rank}</span>
          <span>{item.title}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </section>
  );
};

export default RankingList;
