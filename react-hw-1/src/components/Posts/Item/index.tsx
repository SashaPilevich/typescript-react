import style from "./style.module.css";
import { picture1 } from "../../../assets";
import { IPost } from "../../../types/post";

export const ItemOfPost = (props: IPost) => {
  return (
    <div className={style.container}>
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
