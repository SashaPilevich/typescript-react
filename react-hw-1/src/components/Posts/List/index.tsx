import { MouseEventHandler } from "react";
import { IPost } from "../../../types/post";
import { Button } from "../../Button";
import { ItemOfPost } from "../Item";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
  onClickPost: (id: number) => void;
  onClickDelete?: (id: number) => void;
}

export const PostList = (props: IProps) => {
  return (
    <div className={style.container}>
      {props.posts.length !== 0
        ? props.posts.map((item) => {
            const clickPost = () => {
              props.onClickPost(item.id);
            };

            const clickDelete: MouseEventHandler<HTMLButtonElement> = (
              event
            ) => {
              event.stopPropagation();
              if (props.onClickDelete) {
                props.onClickDelete(item.id);
              }
            };
            return (
              <div key={item.id} onClick={clickPost}>
                <ItemOfPost
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  lesson_num={item.lesson_num}
                  title={item.title}
                  author={item.author}
                  image={item.image}
                  date={item.date}
                />
                {props.onClickDelete ? (
                  <Button
                    label="Remove Post"
                    onClick={clickDelete}
                    type="remove"
                  />
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};
