import axios from "axios";

const API_URL = 'https://asdsystems.free.beeceptor.com/'

export const signIn = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const signOut = () => {
    return axios
        .post(API_URL + "logout", {})
        .then((response) => {
        if (response.data.accessToken) {
            localStorage.removeItem("currentUser");
        }
    });
};
