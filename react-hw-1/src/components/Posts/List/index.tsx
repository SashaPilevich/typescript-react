import { IPost } from "../../../types/post";
import { ItemOfPost } from "../Item";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
  onClickPost: (id: number) => void;
}

export const PostList = (props: IProps) => {
  return (
    <div className={style.container}>
      {props.posts.length !== 0
        ? props.posts.map((item) => {
            const clickPost = () => {
              props.onClickPost(item.id);
            };
            return (
              <div onClick={clickPost}>
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
              </div>
            );
          })
        : null}
    </div>
  );
};
