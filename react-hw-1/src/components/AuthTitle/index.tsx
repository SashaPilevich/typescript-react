import { NavLink } from "react-router-dom";
import style from "./style.module.css";
export const AuthTitle = () => {
  return (
    <div className={style.container}>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? style.active_link : style.unactive
        }
      >
        Login
      </NavLink>
      <span>|</span>
      <NavLink
        to="/registration"
        className={({ isActive }) =>
          isActive ? style.active_link : style.unactive
        }
      >
        Registration
      </NavLink>
    </div>
  );
};
