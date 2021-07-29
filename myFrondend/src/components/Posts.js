import React, { useEffect, useRef, useCallback } from "react";

//component
import Thumb from "./Thumb";

import Spinner from "./Spinner";

import SearchBar from "./SearchBar";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/Post/post.actions";
import { increment } from "../redux/Page/page.action";
import { setSearchTerm } from "../redux/SearchTerm/searchTerm.action";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);
  const page = useSelector((state) => state.page.page);
  const loading = useSelector((state) => state.loading.loading);
  // const error = useSelector((state) => state.error.error);
  const searchTerm = useSelector((state) => state.searchTerm.searchTerm);

  // create observer for infinite loading
  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(increment());
        }
      });

      if (node) observer.current.observe(node);
    },
    [dispatch]
  );

  //function to dispatch the searchterm
  const setTerm = (searchTerm) => {
    dispatch(setSearchTerm(searchTerm));
  };

  //filter post when have the search term
  let filteredPosts;

  if (searchTerm !== "") {
    filteredPosts = posts.filter(
      (post) => post.title.indexOf(searchTerm) !== -1
    );
  } else {
    filteredPosts = posts.slice(0, page);
  }

  return (
    <div>
      <SearchBar setTerm={setTerm} />

      {filteredPosts.map((post, index) => {
        if (page == index + 1) {
          return (
            <Thumb ref={lastPostElementRef} key={post.id} post={post}></Thumb>
          );
        } else {
          return <Thumb key={post.id} post={post}></Thumb>;
        }
      })}

      {loading && <Spinner />}
    </div>
  );
};

export default Posts;
