import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMyPosts } from "../../api/posts";
import { IPost } from "../../types/post";
import { PostList } from "../Posts/List";
import style from "./style.module.css";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const navigateToFullPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };

  const navigateToAddPost = () => {
    navigate("/addpost");
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMyPosts()
      .then((values) => {
        setPosts(values);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className={style.infoPanel}>
        <div className={style.container}>
          <h2 className={style.title}>My posts</h2>{" "}
          <button className={style.btnAdd} onClick={navigateToAddPost}>
            +Add
          </button>
        </div>
      </div>
      {!isLoading ? (
        <PostList posts={posts} onClickPost={navigateToFullPost} />
      ) : (
        <div className={style.spinWrapper}>
          <div className={style.spinner}></div>
        </div>
      )}
    </>
  );
};
