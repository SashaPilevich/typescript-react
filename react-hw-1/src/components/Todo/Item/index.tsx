import { Button } from "../../Button";
import style from "./style.module.css";

interface IItem {
  title: string;
  onClickRemove: () => void;
}

export const ItemOfMyTodo = (props: IItem) => {
  return (
    <div className={style.containerItem}>
      <h2 className={style.titleItem}>{props.title}</h2>
      <div className={style.forBtn}>
        <Button type="delete" onClick={props.onClickRemove} label="Удалить" />
      </div>
    </div>
  );
};
