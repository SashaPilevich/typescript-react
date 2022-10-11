import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { Button } from "../Button";
import { Input } from "../Input";
import { PostList } from "../Posts/List";
import { Preloader } from "../Preloader";
import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { TState } from "../../redux/store";
import { loadAllPosts, loadMorePosts } from "../../redux/actions/posts";

export const AllPosts = () => {
  const posts = useSelector((state: TState) => state.PostsReducer.allPosts);
  const isLoading = useSelector(
    (state: TState) => state.PostsReducer.isLoading
  );
  const showLoadMore = useSelector(
    (state: TState) => state.PostsReducer.showLoadMore
  );
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [noPosts, setNoPosts] = useState(false);

  const { user, isDark } = useContext(Context);

  const navigate = useNavigate();
  const navigateToAddPost = () => {
    navigate("/addpost");
  };
  const backToAllPost = () => {
    setSearchText("");
    setNoPosts(false);
  };

  useEffect(() => {
    dispatch(loadAllPosts(searchText) as any);
  }, [searchText]);

  const loadMore = () => {
    dispatch(loadMorePosts(searchText) as any);
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
          <PostList posts={posts} />
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
