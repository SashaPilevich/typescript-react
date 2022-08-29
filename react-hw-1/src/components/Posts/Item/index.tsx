import style from "./style.module.css";
interface IProps {
  id: string;
  image?: string;
  text: string;
  lesson_num: number;
  title: string;
  author: number;
  date: string;
}

export const ItemOfPost = (props: IProps) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={props.image} alt={props.title} />
      <h2 className={style.title}>{props.title}</h2>
      <p className={style.text}>{props.text}</p>
      <h5 className={style.date}>{props.date}</h5>
    </div>
  );
};
