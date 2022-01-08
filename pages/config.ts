const IP = "http://80d1-124-5-187-134.ngrok.io";
const API = {
  users: `${IP}/users`,
  comments: `${IP}/comments`,
  likes: `${IP}/likes`,
};

let TOKEN = "";

if (typeof window !== "undefined") {
  TOKEN = localStorage.getItem("token");
}

export { TOKEN };

export default API;
