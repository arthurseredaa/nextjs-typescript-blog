import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://simple-blog-api.crew.red/posts"
})
