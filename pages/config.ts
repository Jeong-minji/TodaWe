const IP = "http://9430-183-96-56-160.ngrok.io";
const API = {
  users: `${IP}/users`,
  addinfo: `${IP}/addinfo`,
  status: `${IP}/status`,
  comments: `${IP}/comments`,
  likes: `${IP}/likes`,
};

let TOKEN = "";

if (typeof window !== "undefined") {
  TOKEN = localStorage.getItem("token");
}

export { TOKEN };

export default API;
