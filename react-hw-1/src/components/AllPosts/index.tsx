import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPosts } from "../../api/posts";
import { Context } from "../../App";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { Input } from "../Input";
import { PostList } from "../Posts/List";
import { Preloader } from "../Preloader";
import style from "./style.module.css";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchText, setSearchText] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [noPosts, setNoPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isDark } = useContext(Context);

  const navigate = useNavigate();
  const navigateToFullPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };

  const navigateToAddPost = () => {
    navigate("/addpost");
  };

  const backToAllPost = () => {
    setSearchText("");
    setNoPosts(false);
    navigate("/");
  };

  useEffect(() => {
    fetchPosts(searchText, posts.length)
      .then((values) => {
        if (values.count > values.results.length) {
          setShowLoadMore(true);
          setNoPosts(false);
        } else {
          setShowLoadMore(false);
        }
        if (values.results.length === 0) {
          setNoPosts(true);
          setShowLoadMore(false);
        } else {
          setNoPosts(false);
        }
        setPosts(values.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  //   fetchPosts(searchText, posts.length)
  //     .then((values) => {
  //       if (searchText.length === 0) {
  //         setPosts(values.results);
  //         setShowLoadMore(true);
  //         setNoPosts(false);
  //       } else if (searchText && searchText.trim().length) {
  //         // fetchPosts(searchText, posts.length).then((values) => {
  //         if (values.count > values.results.length) {
  //           setShowLoadMore(true);
  //         } else {
  //           setShowLoadMore(false);
  //         }
  //         setPosts(values.results);
  //         if (values.results.length === 0) {
  //           setNoPosts(true);
  //         } else {
  //           setNoPosts(false);
  //         }
  //       }
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [searchText]);

  const loadMore = () => {
    fetchPosts(searchText, posts.length).then((values) => {
      if (values.results.length + posts.length === values.count) {
        setShowLoadMore(false);
      }
      setPosts(posts.concat(values.results));
    });
  };

  const handleOnChangeSearch: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div className={style.infoPanel}>
        {user ? (
          <div className={style.container}>
            <h2
              className={`${style.titleLogin} ${
                isDark ? style.darkTitleLogin : null
              }`}
            >
              All posts
            </h2>{" "}
            <button
              className={`${style.btnAdd} ${isDark ? style.btnAddDark : ""}`}
              onClick={navigateToAddPost}
            >
              +Add
            </button>
          </div>
        ) : (
          <h2 className={`${style.title} ${isDark ? style.darkTitle : ""}`}>
            All posts
          </h2>
        )}

        <p
          className={`${style.textSearch} ${
            isDark ? style.darkTextSearch : null
          }`}
        >
          Search
        </p>
        <Input
          onChange={handleOnChangeSearch}
          value={searchText}
          uniqType="search"
        />
      </div>
      {!isLoading ? (
        <>
          <PostList posts={posts} onClickPost={navigateToFullPost} />
          {noPosts ? (
            <p className={`${style.noPosts} ${isDark ? style.darkNoPost : ""}`}>
              NO posts...
            </p>
          ) : (
            ""
          )}
          {showLoadMore ? (
            <Button
              label={"Load More"}
              onClick={loadMore}
              type="buttonForRegistration"
            />
          ) : (
            <Button
              label={"Go Back"}
              onClick={backToAllPost}
              type="buttonForRegistration"
            />
          )}
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};
