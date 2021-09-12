import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'https://asdsystems.free.beeceptor.com/'

const getUsers = () => {
   return axios.get(API_URL + "user", { headers: authHeader() });
};

const addUser = (data) => {
   return axios.post(API_URL + "user", { headers: authHeader(), data });
};

const editUser = (id, data) => {
   return axios.put(API_URL + `user/${id}`, { headers: authHeader(), data });
};

const deleteUser = (id) => {
   return axios.delete(API_URL + `user/${id}`, { headers: authHeader() });
};

export default {
    getUsers,
    addUser,
    editUser,
    deleteUser
};