const IP = "http://localhost:8080";
const API = {
  users: `${IP}/users`,
  comments: `${IP}/comments`,
  likes: `${IP}/likes`,
};

export const TOKEN = localStorage.getItem("accessToken");

export default API;
