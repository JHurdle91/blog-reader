import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(`${API_URL}/test/all`);
};

const getUserBoard = () => {
  return axios.get(`${API_URL}/test/user`);
};

const getModeratorBoard = () => {
  return axios.get(`${API_URL}/test/mod`);
};

const getAdminBoard = () => {
  return axios.get(`${API_URL}/test/admin`);
};

const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

const getPost = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
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
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getPosts,
  getPost,
  deletePost,
  getComments,
  deleteComment,
  postComment,
  togglePublished,
};

export default UserService;
