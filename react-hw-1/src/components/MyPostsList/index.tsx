import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMyPosts } from "../../api/posts";
import { Context } from "../../App";
import { IPost } from "../../types/post";
import { PostList } from "../Posts/List";
import style from "./style.module.css";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useContext(Context);

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
        if (values?.status === 404) {
          setPosts([]);
        } else {
          setPosts(values);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className={style.infoPanel}>
        <div className={style.container}>
          <h2 className={`${style.title} ${isDark ? style.darkTitle : ""}`}>
            My posts
          </h2>{" "}
          <button
            className={`${style.btnAdd} ${isDark ? style.darkBtnAdd : ""}`}
            onClick={navigateToAddPost}
          >
            +Add
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className={style.spinWrapper}>
          <div className={style.spinner}></div>
        </div>
      ) : (
        <PostList posts={posts} onClickPost={navigateToFullPost} />
      )}
    </>
  );
};
