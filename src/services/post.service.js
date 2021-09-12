import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'https://asdsystems.free.beeceptor.com/'

const getPosts = () => {
   return axios.get(API_URL + "post", { headers: authHeader() });
};

const addPost = (data) => {
   return axios.post(API_URL + "post", { headers: authHeader(), data });
};

const editPost = (id, data) => {
   return axios.put(API_URL + `post/${id}`, { headers: authHeader(), data });
};

const deletePost = (id) => {
   return axios.delete(API_URL + `post/${id}`, { headers: authHeader() });
};

export default {
    getPosts,
    addPost,
    editPost,
    deletePost
};