import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMyPosts, removePost } from "../../api/posts";
import { Context } from "../../App";
import { IPost } from "../../types/post";
import { PostList } from "../Posts/List";
import { Preloader } from "../Preloader";
import { NotificationManager } from "react-notifications";
import style from "./style.module.css";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
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

  const navigateToAddPost = () => {
    navigate("/addpost");
  };

  const deletePost = (id: number) => {
    setIsLoading(true);
    removePost(id)
      .then((response) => {
        if (response.ok) {
          const newPosts = posts.filter((item) => {
            if (item.id === id) {
              return false;
            }
            return true;
          });
          setPosts(newPosts);
          setIsLoading(false);
          NotificationManager.success("Удаление поста", " Пост успешно удален");
        } else {
          NotificationManager.error("Удаление поста", "Пост не удален");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
        <Preloader />
      ) : (
        <PostList posts={posts} onClickDelete={deletePost} />
      )}
    </>
  );
};
