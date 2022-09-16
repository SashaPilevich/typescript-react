import { title } from "process";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();
  const navigateToFullPost = (id: number) => {
    navigate(`/selectedpost/${id}`);
  };

  const goBack = () => {
    setSearchText("");
    setNoPosts(false);
  };

  const loadMore = () => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${searchText}&offset=${posts.length}&limit=10`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        if (values.results.length + posts.length === values.count) {
          setShowLoadMore(false);
        }
        setPosts(posts.concat(values.results));
      });
  };

  const search = () => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${searchText}`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPosts(values.results);
        setShowLoadMore(false);
        if (values.results.length === 0) {
          setNoPosts(true);
        } else {
          setNoPosts(false);
        }
      });
  };

  useEffect(() => {
    if (searchText.length === 0) {
      const promise = fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=10"
      );

      promise
        .then((response) => {
          return response.json();
        })
        .then((values) => {
          setPosts(values.results);
          setShowLoadMore(true);
          setNoPosts(false);
        });
    }
  }, [searchText]);

  const handleOnChangeSearch: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchText(event.target.value);
    if (searchText && searchText.trim().length) {
      search();
    }
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
  );
};
