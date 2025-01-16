/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addPost, fetchPosts, fetchTags } from "../services/JsonApiServices";
import styles from "./PostList.module.scss";
import { useState } from "react";
import { PostCardsContainer } from "./PostCardsContainer";
import { Pagination } from "./Pagination";
import { PostForm } from "./PostForm";

function PostList() {
  const [page, setPage] = useState(1); // page state

  const queryClient = useQueryClient(); // queryClient instance

  const {
    data: postData,
    isError: postError,
    isLoading: postLoading,
    error: postErrorMessage,
  } = useQuery({
    queryKey: ["posts", { page }],
    queryFn: () => fetchPosts(page),
    staleTime: 1000 * 60 * 5,
  }); // useQuery hook for fetching posts

  const {
    data: tagsData,
    isLoading: tagsLoading,
    isError: tagsError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: 1000 * 60 * 5,
  }); // useQuery hook for fetching tags

  const {
    mutate,
    isError: isPostError,
    isPending,
    error,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onMutate: (data, variables, context) => {
      return { id: 1 };
    },
    //onSuccess executed after the mutation is happend
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts", { page }],
        exact: true,
      });
    },
    onError: (error, variables, context) => {},
    onSettled: (data, error, variables, context) => {},
  }); // useMutation hook for adding post

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter((key) => key !== "title");

    if (!title || tags.length === 0) {
      console.log("Please enter both title and select tags");
      return;
    }

    mutate({ id: postData.items + 1, title, tags });
    e.target.reset();
  }; // function to handle form submission & mutate

  function handlePrevPage() {
    setPage((curr) => curr - 1);
  }
  function handleNextPage() {
    setPage((curr) => curr + 1);
  }

  return (
    <div className={styles.postList}>
      <h1 className={styles.title}>PostList</h1>
      <h2 className={styles.subtitle}>Create a new Post</h2>

      <PostForm
        handleSubmit={handleSubmit}
        tagsLoading={tagsLoading}
        tagsError={tagsError}
        tagsData={tagsData}
      />

      <Pagination
        handlePrevPage={handlePrevPage}
        page={page}
        handleNextPage={handleNextPage}
        postData={postData}
      />

      {isPostError && (
        <div style={{ color: "red" }} onClick={reset}>
          Error: {error.message}--- UNABLE TO POST
        </div>
      )}
      <PostCardsContainer
        postLoading={postLoading}
        isPending={isPending}
        postError={postError}
        postErrorMessage={postErrorMessage}
        postData={postData}
      />
    </div>
  );
}

export default PostList;
