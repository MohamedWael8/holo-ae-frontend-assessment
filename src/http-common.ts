import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type": "application/vnd.github+json",
    auth: process.env.GITHUB_TOKEN,
  },
});
