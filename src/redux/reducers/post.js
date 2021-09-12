import * as types from "../actionTypes/post";

const initialState = [];

const postReducer = (posts = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_POSTS:
      return {
        payload
      };

    case types.ADD_POST:
      return {
        ...posts,
        payload
      };

    case types.EDIT_POST:
      return posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          };
        } else {
          return post;
        }
      });
  
    case types.DELETE_POST:
      return posts.filter(({ id }) => id !== payload.id);
  
    default:
      return posts;
  }
}

export default postReducer