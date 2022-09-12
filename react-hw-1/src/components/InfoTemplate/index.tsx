import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
  title: string;
  textFirst: string;
  textSecond: string;
  textThird?: string;
  labelBtn: string;
}
export const InfoTemplate = ({
  title,
  textFirst,
  textSecond,
  textThird,
  labelBtn,
}: IProps) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.textContainer}>
        <p className={style.text}>{textFirst}</p>
        <p className={style.text}>{textSecond}</p>
        <p className={style.text}>{textThird}</p>
      </div>
      <Button
        label={`${labelBtn}`}
        onClick={() => {}}
        type="buttonForRegistration"
      />
    </div>
  );
};
