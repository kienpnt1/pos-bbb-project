import { LOGIN, LOGOUT, CHANGE_LOGIN } from '../actions/Types';

const INITIAL_STATE = {
    isLoggedIn: true,
    user_name: "",
    user_name_error_message: "",
    password: "",
    password_error_message: "",
    logining: false,
    loginingWithFb: false,
    err: null,
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return { ...state, [action.payload.key]: action.payload.value, [action.payload.key + "_error_message"]: "" };
        case LOGIN:
            return { ...state, logining: true };
        case LOGOUT:
            return { ...state, logining: true };
        default:
            return state;
    }
}