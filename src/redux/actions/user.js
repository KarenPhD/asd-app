import * as types from '../actionTypes/user'
import {getUsers, addUser, editUser, deleteUser} from '../../services/user.service'

export const getAllPostsUsers = () => async (dispatch) => {
    try {
      const res = await getUsers();
  
      dispatch({
        type: types.GET_ALL_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const createUser = (data) => async (dispatch) => {
    try {
      const res = await addUser(data);
  
      dispatch({
        type: types.ADD_USER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  
export const updateUser = (id, data) => async (dispatch) => {
    try {
      const res = await editUser(id, data);
  
      dispatch({
        type: types.EDIT_USER,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  
export const deleteUser = (id) => async (dispatch) => {
    try {
      await deleteUser(id);
  
      dispatch({
        type: types.DELETE_USER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
};