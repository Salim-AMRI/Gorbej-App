import { ADD_USER, GET_ALL_USER } from "../Action/types";

const initialState = {
  user: [],
};

export default function userReducer(state = initialState, action) {
  if (action.type === ADD_USER)
    return { ...state, user: { ...action.payload, ...state.user } };

  {
    if (action.type === GET_ALL_USER) return action.payload;
  }

  return state;
}
