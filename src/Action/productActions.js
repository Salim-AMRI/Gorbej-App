import Axios from "axios";
import {
  GET_ALL_PRODUCT,
  SELECT_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_ID
} from "./types";

/* get  product */

export const getAllProduct = (payload) => ({
  type: GET_ALL_PRODUCT,
  payload: payload,
});

export function getProductFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8000/produits/").then((res) =>
      dispatch(getAllProduct(res.data))
    );
}

/* get  product by user */

export const getProductUser = (payload) => ({
  type: GET_PRODUCT_BY_ID,
  payload: payload,
});

export function getProductByUserFromApi() {
  let userId1 = localStorage.getItem("_id");
  return (dispatch) =>
    Axios.get("http://localhost:8000/produits/"+ userId1).then((res) =>
      dispatch(getProductUser(res.data))
    );
}

/* add  product */

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export function postProduct(el) {
  let userId1 = localStorage.getItem("_id");
  return (dispatch) =>
    Axios.post(`http://localhost:8000/produits/`, {
      _id: el._id,
      titre: el.titre,
      type: el.type,
      etat: el.etat,
      sex: el.sex,
      disponibilité: el.disponibilité,
      photo: el.photo,
      description: el.description,
      prix: el.prix,
      userId : userId1
    })
      .then((res) => dispatch(addProduct({...el,userId : userId1})))
      .catch((err) => console.log(err));
}

/* delete Product */

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export function deleteProductFromApi(_id) {
  return (dispatch) =>
    Axios.delete("http://localhost:8000/produits/" + _id).then((res) =>
      dispatch(getProductByUserFromApi())
    );
}

/* edite Product */

export const editeProduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export function editeProductFromApi(el) {
  console.log(el);
  return (dispatch) =>
    Axios.patch("http://localhost:8000/produits/" + el._id, el).then(
      (res) => dispatch(getProductByUserFromApi()),
      console.log(el)
    );
}

/* ajouter au panier */

export const addToPanier = (payload) => ({
  type: SELECT_PRODUCT,
  payload,
});

export function selectProduct(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:8000/paniers/`, el)
      .then((res) => dispatch(addToPanier(el)))
      .catch((err) => console.log(err));
}

