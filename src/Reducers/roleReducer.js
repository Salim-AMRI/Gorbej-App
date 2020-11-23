import * as types from '../Action/types';

const roleReducer = (state = "none", action) => {
    console.log("reducer");

    if (action.type === types.LOGIN_USER) {
        return action.user

    } else if (action.type === types.LOGOUT_USER) {
        return action.user

    } else {
        return state
    }
}

export default roleReducer;