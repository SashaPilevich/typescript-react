import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { AddPostItem } from "../../components/AddPostForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../types/post";

export const EditPost = () => {
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
      {post ? (
        <AddPostItem
          isEdit={true}
          defaultTitle={post?.title}
          defaultNumber={post?.lesson_num}
          defaultText={post?.text}
          defaultImage={post?.image}
          postId={post.id}
        />
      ) : null}
    </Container>
  );
};
