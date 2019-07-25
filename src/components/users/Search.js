import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert }) => {
    const githubContext = useContext(GithubContext);
    const [text, setText] = useState('');

    //If you use an arrow function, you won't have to use this.onSubmit.bind(this)
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter a username', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = e => {
        // brackets allow us to get the value of the expression
        setText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Search Users...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {showClear && (
                <button
                    className='btn btn-light btn-block'
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;
