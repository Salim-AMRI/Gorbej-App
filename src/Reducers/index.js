import { combineReducers } from "redux";
import foodReducer from "./FoodReducer";
import userReducer from "./SingReducer";
import panierReducer from "./PanierReducer";
import roleReducer from './roleReducer';

const allReducers = combineReducers({
  foods: foodReducer,
  panier: panierReducer,
  user: userReducer,
  role: roleReducer,
});

export default allReducers;
