import React from "react";
import { history } from '../helpers/history';

const jwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = jwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logout();
      }
    }
  });

  return <div></div>;
};

export default AuthVerify;