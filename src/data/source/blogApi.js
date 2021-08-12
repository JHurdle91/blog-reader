const API_URL = process.env.REACT_APP_API_URL;

const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`, { mode: "cors" });
  const posts = await response.json();
  return posts;
};

export { getPosts };
