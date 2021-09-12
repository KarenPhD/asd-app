import { combineReducers } from "redux";
import authReducer from "./auth";
import postReducer from "./post";
import userReducer from "./user";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer
})

export default rootReducer