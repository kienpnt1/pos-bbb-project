import * as types from '../actions/Types';

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    token: '',
    user: {},
    errorMessage: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
