import axios from "axios";
import authHeader from "./auth-header";

// TODO: post user comments with authHeader

const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(`${API_URL}/test/all`);
};

const getUserBoard = () => {
  return axios.get(`${API_URL}/test/user`, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(`${API_URL}/test/mod`, { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(`${API_URL}/test/admin`, { headers: authHeader() });
};

const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

const getPost = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
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

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getPosts,
  getPost,
  getComments,
  postComment,
};

export default UserService;
