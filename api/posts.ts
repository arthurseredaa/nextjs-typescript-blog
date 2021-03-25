import { axiosInstance } from './axiosInstance';

export const getPosts = async () => {
  const data = await axiosInstance.get("/").then(res => res.data)
  return data;
}

export const getPost = async (id: string) => {
  const data = await axiosInstance.get(`/${id}`).then(res => res.data);
  return data
}

// export const createPost = async (data: {title: string, body: string}) => {
//   const res = await axiosInstance.post("/", {
//     body: data,
//     headers: {'Content-Type': 'application/json'}
//   }).then(res => res.data);
//   return res;
// }

export const createPost = async (data: {title: string, body: string}) => {
  const res = await fetch("https://simple-blog-api.crew.red/posts ", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => res.json());
  return res;
}
