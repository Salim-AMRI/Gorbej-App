import { GET_ALL_FOODS } from "../Action/types";

const initialState = {
  foods: [],
};

export default function foodReducer(state = initialState, action) {
  if (action.type === GET_ALL_FOODS) {
    return {
      ...state,
      foods: action.payload,
    };
  }

  return state;
}
