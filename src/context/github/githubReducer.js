import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false //we want the state to be false because we already go the data
            };
        case SET_LOADING:
            return {
                ...state, //copies whatever is in the current state
                loading: true
            };
        default:
            return state;
    }
};
