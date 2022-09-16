import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../App";
import { Container } from "../../components/Container";
import { FullPosts } from "../../components/FullPosts";
import { Header } from "../../components/Header";
import { IPost } from "../../types/post";
import style from "./style.module.css";

export const SelectedPost = () => {
  const { isDark } = useContext(Context);
  const params = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${params.id}`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPost(values);
      });
  }, []);
  return (
    <Container>
      <Header />
      <div
        className={`${style.container} ${isDark} ? ${style.darkContainer} : ""`}
      >
        <h2 className={style.selectedPost}>Selected Post</h2>
        {post ? (
          <FullPosts
            key={post.id}
            id={post.id}
            text={post.text}
            lesson_num={post.lesson_num}
            title={post.title}
            author={post.author}
            image={post.image}
            date={post.date}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
};
