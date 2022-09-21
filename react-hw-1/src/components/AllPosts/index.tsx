import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPosts } from "../../api/posts";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { Input } from "../Input";
import { PostList } from "../Posts/List";
import style from "./style.module.css";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchText, setSearchText] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [noPosts, setNoPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const navigateToFullPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };

  const goBack = () => {
    setSearchText("");
    setNoPosts(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (searchText.length === 0) {
      const promise = fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=5"
      );
      promise
        .then((response) => {
          return response.json();
        })
        .then((values) => {
          setPosts(values.results);
          setShowLoadMore(true);
          setNoPosts(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (searchText && searchText.trim().length) {
      fetchPosts(searchText, posts.length)
        .then((values) => {
          if (values.count > values.results.length) {
            setShowLoadMore(true);
          } else {
            setShowLoadMore(false);
          }
          setPosts(values.results);
          if (values.results.length === 0) {
            setNoPosts(true);
          } else {
            setNoPosts(false);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchText]);

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
        <h2 className={style.title}>All posts</h2>
        <p className={style.textSearch}>Search</p>
        <Input
          onChange={handleOnChangeSearch}
          value={searchText}
          uniqType="search"
        />
      </div>
      {!isLoading ? (
        <>
          <PostList posts={posts} onClickPost={navigateToFullPost} />
          {noPosts ? <p className={style.noPosts}>NO posts...</p> : ""}
          {showLoadMore ? (
            <Button
              label={"Load More"}
              onClick={loadMore}
              type="buttonForRegistration"
            />
          ) : (
            <Button
              label={"Go Back"}
              onClick={goBack}
              type="buttonForRegistration"
            />
          )}
        </>
      ) : (
        <div className={style.spinWrapper}>
          <div className={style.spinner}></div>
        </div>
      )}
    </>
  );
};
