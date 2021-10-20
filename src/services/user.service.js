import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

const getPost = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
};

const createPost = (userId, title, body, published) => {
  return axios.post(`${API_URL}/posts/create`, {
    params: {
      userId,
      title,
      body,
      published,
    },
  });
};

const updatePost = (postId, title, body, published) => {
  return axios.post(`${API_URL}/posts/${postId}/update`, {
    params: {
      title,
      body,
      published,
    },
  });
};

const deletePost = (id) => {
  return axios.post(`${API_URL}/posts/${id}/delete`);
};

const getComments = (postId) => {
  return axios.get(`${API_URL}/posts/${postId}/comments`);
};

const postComment = (postId, userId, text) => {
  return axios.post(`${API_URL}/posts/${postId}/comments/create`, {
    params: {
      postId,
      userId,
      text,
    },
  });
};

const deleteComment = (postId, commentId) => {
  return axios.post(`${API_URL}/posts/${postId}/comments/${commentId}/delete`);
};

const togglePublished = (postId) => {
  return axios.post(`${API_URL}/posts/${postId}/published`);
};

const UserService = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getComments,
  deleteComment,
  postComment,
  togglePublished,
};

export default UserService;
