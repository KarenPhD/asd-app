import * as types from '../actionTypes/post'
import {getPosts, addPost, editPost, deletePost} from '../../services/post.service'

export const getAllPosts = () => async (dispatch) => {
    try {
      const res = await getPosts();
  
      dispatch({
        type: types.GET_ALL_POSTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const createPost = (data) => async (dispatch) => {
    try {
      const res = await addPost(data);
  
      dispatch({
        type: types.ADD_POST,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  
export const updatePost = (id, data) => async (dispatch) => {
    try {
      const res = await editPost(id, data);
  
      dispatch({
        type: types.EDIT_POST,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
  
export const deletePost = (id) => async (dispatch) => {
    try {
      await deletePost(id);
  
      dispatch({
        type: types.DELETE_POST,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
};