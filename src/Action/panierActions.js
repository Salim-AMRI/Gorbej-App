import Axios from "axios";
import {
  GET_ALL_PANIER,
  DELETE_PANIER,
} from "./types";

/* afficher le panier */

export const getAllPanier = (payload) => ({
  type: GET_ALL_PANIER,
  payload,
});

export function getPanierFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8000/paniers/").then((res) =>
      dispatch(getAllPanier(res.data))
    );
}

/* ajouter au panier 

export const addPanier = (payload) => ({
  type: ADD_PANIER,
  payload,
});

export function postPanier(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/panier`, {
      id: el.id,
      photo: el.photo,
      name: el.name,
      compo: el.compo,
      qtite: el.qtite,
      prix: el.prix,
    })
      .then((res) => dispatch(addPanier(el)))
      .catch((err) => console.log(err));
} 

// edit food

export const updatePanier = (payload) => ({
  type: UPDATE_PANIER,
  payload,
});

export function updatePanierFromAPI(el) {
  return (dispatch) =>
    Axios.put("http://localhost:3000/panier/" + el.id, el).then((res) =>
      dispatch(getPanierFromApi())
    );
}

/* delete food */

export const deletePanier = (payload) => ({
  type: DELETE_PANIER,
  payload,
});

export function deletePanierFromApi(_id) {
  return (dispatch) =>
    Axios.delete("http://localhost:8000/paniers/" + _id).then((res) =>
      dispatch(getPanierFromApi())
    );
}

