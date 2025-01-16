const fetchPosts = async (page) => {
  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id&${
      page ? `_page=${page}&_per_page=5` : ""
    }`
  );

  const data = await response.json();

  return data;
};

const fetchTags = async () => {
  const res = await fetch("http://localhost:3000/tags");

  const data = await res.json();
  return data;
};

const addPost = async (post) => {
  const res = await fetch("http://localhost:3000/posts?", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export { fetchPosts, fetchTags, addPost };
