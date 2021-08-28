const API_URL = process.env.REACT_APP_API_URL;

const getPost = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`, { mode: "cors" });
  const post = await response.json();
  return post;
};

const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`, { mode: "cors" });
  const posts = await response.json();
  return posts;
};

export { getPost, getPosts };
