import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./SingReducer";
import panierReducer from "./PanierReducer";
import roleReducer from './roleReducer';

const allReducers = combineReducers({
  produits: productReducer,
  panier: panierReducer,
  user: userReducer,
  role: roleReducer,
});

export default allReducers;
