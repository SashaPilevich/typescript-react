import style from "./style.module.css";

interface IProps {
  onClose: () => void;
}
export const NavBar = ({ onClose }: IProps) => {
  return (
    <div className={style.listContainer}>
      <div className={style.burgerMenuNav} onClick={onClose}>
        <span className={style.linearNav1}></span>
        <span className={style.linearNav2}></span>
      </div>
      <ul>
        <li>
          <a href="#">All posts</a>
        </li>
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
  );
};
