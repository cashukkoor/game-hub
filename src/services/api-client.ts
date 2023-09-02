import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "0ea9e8676bf243d1aeb71545fad0e903" },
});
