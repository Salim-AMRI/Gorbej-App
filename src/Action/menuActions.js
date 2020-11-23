import Axios from "axios";
import { GET_ALL_FOODS, SELECT_FOODS } from "./types";

/* afficher la nourriture */

export const getAllFoods = (payload) => ({
  type: GET_ALL_FOODS,
  payload: payload,
});

export function getFoodsFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/foods").then((res) =>
      dispatch(getAllFoods(res.data))
    );
}

/* ajouter au panier */

export const addToPanier = (payload) => ({
  type: SELECT_FOODS,
  payload,
});

export function selectFood(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/panier`, el)
      .then((res) => dispatch(addToPanier(el)))
      .catch((err) => console.log(err));
}
