import { Link } from "react-router-dom";
import style from "../styles/Header.module.css";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className={style.Header}>
      <h1>
        <Link to="/">
          <img className={style.logoImg} src={logo} alt="culturetree" />
        </Link>
      </h1>
      <div className={style.search}>
        <input type="text" placeholder="공연/정보를 검색 합니다" />
        <button id={style.searchBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <nav className={style.on}>
        <ul className={style.menu}>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/recommendations">추천</Link>
          </li>
          <li>
            <Link to="/ranking">랭킹</Link>
          </li>
          <li>
            <Link to="/venues">주변 공연장</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
