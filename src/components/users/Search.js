import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    //If you use an arrow function, you won't have to use this.onSubmit.bind(this)
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter a username', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    };

    onChange = e => {
        // brackets allow us to get the value of the expression
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Users...'
                        value={this.state.value}
                        onChange={this.onChange}
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
    }
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;
