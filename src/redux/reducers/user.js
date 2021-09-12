import * as types from "../actionTypes/user";

const initialState = [];

const userReducer = (users = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_USERS:
      return {
        payload
      };

    case types.ADD_USER:
      return {
        ...users,
        payload
      };

    case types.EDIT_USER:
      return users.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload,
          };
        } else {
          return user;
        }
      });
  
    case types.DELETE_USER:
      return users.filter(({ id }) => id !== payload.id);
  
    default:
      return users;
  }
}

export default userReducer