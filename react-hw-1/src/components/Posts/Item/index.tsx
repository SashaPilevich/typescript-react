import style from "./style.module.css";
import { picture1 } from "../../../assets";
import { IPost } from "../../../types/post";
import { useState, ReactEventHandler } from "react";

interface IItem extends IPost {
  isLarge?: boolean;
}
export const ItemOfPost = (props: IItem) => {
  const [image, setImage] = useState(props.image);
  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(picture1);
  };
  return (
    <div
      className={`${style.container} ${props.isLarge ? style.largePost : ""}`}
    >
      {image ? (
        <img
          className={`${style.image} ${props.isLarge ? style.largeImage : ""}`}
          src={image}
          alt={props.title}
          onError={handleError}
        />
      ) : (
        <img className={style.image} src={picture1} alt={props.title} />
      )}

      <h2 className={style.title}>{props.title}</h2>
      <p className={`${style.text} ${props.isLarge ? style.largeText : ""}`}>
        {props.text}
      </p>
      <h5 className={style.date}>{props.date}</h5>
    </div>
  );
};
