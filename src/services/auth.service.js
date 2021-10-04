import axios from "axios";

const API_AUTH_URL = `${process.env.REACT_APP_API_URL}/auth`;

const register = (username, password) => {
  return axios.post(`${API_AUTH_URL}/signup`, {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(`${API_AUTH_URL}/signin`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const response = JSON.parse(localStorage.getItem("user"));
  if (response) {
    const user = response.user;
    user.token = response.token;
    return user;
  }
  return response;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
