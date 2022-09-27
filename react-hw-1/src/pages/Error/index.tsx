import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import error from "./error.jpg";

export const Error = () => {
  const navigate = useNavigate();
  const returnBack = () => {
    navigate("/");
  };
  return (
    <div className={style.container}>
      <img className={style.imgError} src={error} alt="error"></img>
      <button onClick={returnBack} className={style.btn}>
        на главную
      </button>
    </div>
  );
};
