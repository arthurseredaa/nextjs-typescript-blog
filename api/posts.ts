import { axiosInstance } from './axiosInstance';

export const getPosts = async () => {
  const data = await axiosInstance.get("/").then(res => res.data)
  return data;
}

export const getPost = async (id) => {
  const data = await axiosInstance.get(`/${id}`).then(res => res.data);
  return data
}
