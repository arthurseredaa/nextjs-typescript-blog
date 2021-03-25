import { axiosInstance } from './axiosInstance';

export const getPosts = async () => {
  try {
    const data = await axiosInstance.get("/").then(res => res.data)
    return data;
  } catch(e) {
    console.log(e);
    return e;
  }
}

export const getPost = async (id: string) => {
  try {
    const data = await axiosInstance.get(`/${id}?_embed=comments`).then(res => res.data);
    return data
  } catch(e) {
    console.log(e);
    return e;
  }
}

// export const createPost = async (data: {title: string, body: string}) => {
//   const res = await axiosInstance.post("/", {
//     data: JSON.stringify(data),
//     headers: {'Content-Type': 'application/json'}
//   }).then(res => res.data);
//   return res;
// }

export const createPost = async (data: {title: string, body: string}) => {
  try {
    const res = await fetch("https://simple-blog-api.crew.red/posts", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
    }).then(res => res.json());
    return res;
  } catch(e) {
    console.log(e);
    return e;
  }
}

export const deletePost = async (id: number) => {
  try {
    const res = await axiosInstance.delete(`/${id}`);
    return res;
  } catch(e) {
    console.log(e);
    return e;
  }
}

export const createComment = async (data) => {
  try {
    const res = await fetch("https://simple-blog-api.crew.red/comments", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json());
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
