import style from "./style.module.css";
import img from "./ico.svg";
import { useState } from "react";

export const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("visible");
  const [navStyle, setNavStyle] = useState("hiddenNav");
  const test = () => {
    if (!clickMenu) {
      setHeaderStyle("hidden");
      setNavStyle("visibleNav");
      console.log("hi");
    } else {
      setHeaderStyle("visible");
      setNavStyle("hiddenNav");
    }
    setClickMenu(!clickMenu);
  };
  return (
    <header className={style.header}>
      <div className={style[headerStyle]}>
        <div className={style.burgerMenu} onClick={test}>
          <span className={style.linear1}></span>
          <span className={style.linear2}></span>
          <span className={style.linear3}></span>
        </div>
        <div className={style.user}>
          <img src={img} alt="UserIcon" />
          <p className={style.userName}>Username</p>
        </div>
      </div>
      <div className={style[navStyle]}>
        <div className={style.listContainer}>
          <div className={style.burgerMenuNav} onClick={test}>
            <span className={style.linearNav1}></span>
            <span className={style.linearNav2}></span>
          </div>
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
          </ul>
          <div className={style.dark}>
            <svg
              width="60"
              height="30"
              viewBox="0 0 60 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.25"
                y="0.25"
                width="59.5"
                height="29.5"
                rx="14.75"
                fill="#FDFDFF"
                stroke="#007BFF"
                stroke-width="0.5"
              />
              <rect x="8" y="5" width="20" height="20" rx="10" fill="#016EFC" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};