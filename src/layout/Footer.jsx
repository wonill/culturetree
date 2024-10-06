import { Link } from "react-router-dom";
import style from "../styles/Footer.module.css";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className={style.Footer}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="culturetree" />
        </Link>
      </div>
      <p className={style.copyright_info}>
        Ⓒ 2024 culturetree. All rights reserved.
      </p>
    </footer>
  );
}
