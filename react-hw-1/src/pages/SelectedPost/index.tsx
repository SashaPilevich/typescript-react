import { Container } from "../../components/Container";
import { FullPosts } from "../../components/FullPosts";
import { Header } from "../../components/Header";
import { IPost } from "../../types/post";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
}
export const SelectedPost = (props: IProps) => {
  return (
    <Container>
      <Header />
      <h2 className={style.selectedPost}>Selected Post</h2>
      <div className={style.container}>
        {props.posts.map((item) => {
          return (
            <FullPosts
              key={item.id}
              id={item.id}
              text={item.text}
              lesson_num={item.lesson_num}
              title={item.title}
              author={item.author}
              image={item.image}
              date={item.date}
            />
          );
        })}
      </div>
    </Container>
  );
};
