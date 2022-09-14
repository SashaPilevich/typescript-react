import { useContext } from "react";
import { Context } from "../../App";
import { picture1 } from "../../assets";
import { IPost } from "../../types/post";
import style from "./style.module.css";

export const FullPosts = (props: IPost) => {
  const { isDark } = useContext(Context);
  return (
    <div className={isDark ? style.darkContainer : style.container}>
      {props.image ? (
        <img className={style.image} src={props.image} alt={props.title} />
      ) : (
        <img className={style.image} src={picture1} alt={props.title} />
      )}

      <h2 className={style.title}>{props.title}</h2>
      <p className={style.text}>{props.text}</p>
      <h5 className={style.date}>{props.date}</h5>
    </div>
  );
};
