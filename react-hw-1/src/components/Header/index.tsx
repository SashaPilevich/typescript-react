import style from "./style.module.css";
import img from "./ico.svg";
import { useState } from "react";
import { NavBar } from "../NavBar";

export const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("visible");
  const [navStyle, setNavStyle] = useState("hiddenNav");
  const [linearStyle, setLinearStyle] = useState("linear");
  const styleHiddenHeader = () => {
    setHeaderStyle("hidden");
  };
  const styleVisibleNav = () => {
    setNavStyle("visibleNav");
  };
  const openNavBar = () => {
    if (!clickMenu) {
      setLinearStyle("open");
      setTimeout(styleHiddenHeader, 500);
      setTimeout(styleVisibleNav, 500);
    }
    setClickMenu(true);
  };
  const closeNavBar = () => {
    if (clickMenu) {
      setHeaderStyle("visible");
      setNavStyle("hiddenNav");
      setClickMenu(false);
      setLinearStyle("linear");
    }
  };
  return (
    <header className={style.header}>
      <div className={style[headerStyle]}>
        <div className={style.burgerMenu} onClick={openNavBar}>
          <div className={style[linearStyle]}></div>
        </div>
        <div className={style.user}>
          <img src={img} alt="UserIcon" />
          <p className={style.userName}>Username</p>
        </div>
      </div>
      {clickMenu ? (
        <div className={style[navStyle]}>
          <NavBar onClose={closeNavBar} />
        </div>
      ) : null}
    </header>
  );
};
