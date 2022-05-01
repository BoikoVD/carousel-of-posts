import axios from 'axios';

export const getPosts = async () => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      return res.data;
    });
}

export const getComments = async (id) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => {
      return res.data;
    });
}

export const createPost = async (title, body) => {
  return await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    title,
    body,
    userId: 1,
  })
    .then((res) => {
      return res.data;
    });
}