import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../types/post";
import { Button } from "../../Button";
import { ItemOfPost } from "../Item";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
  onClickDelete?: (id: number) => void;
}

export const PostList = (props: IProps) => {
  const navigate = useNavigate();
  const navigateToFullPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };
  return (
    <div className={style.container}>
      {props.posts.length !== 0
        ? props.posts.map((item) => {
            const clickPost = () => {
              navigateToFullPost(item.id);
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
                  marked={item.marked}
                  liked={item.liked}
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
