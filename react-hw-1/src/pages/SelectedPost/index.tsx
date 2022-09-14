import { Container } from "../../components/Container";
import { FullPosts } from "../../components/FullPosts";
import { Header } from "../../components/Header";
import { posts } from "../../mocks";
import style from "./style.module.css";

export const SelectedPost = () => {
  const selectedPost = posts[0];
  return (
    <Container>
      <Header />
      <h2 className={style.selectedPost}>Selected Post</h2>
      <div className={style.container}>
        <FullPosts
          key={selectedPost.id}
          id={selectedPost.id}
          text={selectedPost.text}
          lesson_num={selectedPost.lesson_num}
          title={selectedPost.title}
          author={selectedPost.author}
          image={selectedPost.image}
          date={selectedPost.date}
        />
      </div>
    </Container>
  );
};
