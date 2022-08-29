import { generateUniqId } from "../../Posts/List";
import { emojies } from "../constants";
import { EmojiRow } from "../Item";
import style from "./style.module.css";

export const EmojiList = () => {
  return (
    <div className={style.emojiListContainer}>
      {emojies.map((item) => {
        return (
          <EmojiRow
            title={item.title}
            symbol={item.symbol}
            key={generateUniqId()}
          />
        );
      })}
    </div>
  );
};
