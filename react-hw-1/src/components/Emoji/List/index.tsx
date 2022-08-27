import { emojies } from "../EmojiArray";
import { EmojiRow } from "../Item";
import style from "./style.module.css";

export const EmojiList = () => {
  return (
    <div className={style.emojiListContainer}>
      {emojies.map((item) => {
        return <EmojiRow title={item.title} symbol={item.symbol} />;
      })}
    </div>
  );
};
