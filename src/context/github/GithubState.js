import React, { userReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = userReducer(GithubReducer, initialState);

    //Search users

    //Get user

    //Get repos

    //Clear users

    //Set repos

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
