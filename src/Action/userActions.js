import Axios from "axios";
import { ADD_USER, GET_ALL_USER } from "./types";

/* add  user */

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function postUser(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/user`, {
      id: el.id,
      name: el.name,
      mail: el.mail,
      pass: el.pass,
    })
      .then((res) => dispatch(addUser(el)))
      .catch((err) => console.log(err));
}

// Get users

export const getAlluser = (payload) => ({
  type: GET_ALL_USER,
  payload,
});

export function GetUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/user").then((res) => {
      dispatch(getAlluser(res.data));
      console.log(res.data);
    });
}
