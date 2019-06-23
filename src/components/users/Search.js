import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    //If you use an arrow function, you won't have to use this.onSubmit.bind(this)
    onSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({ text: '' });
    };

    onChange = e => {
        // brackets allow us to get the value of the expression
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
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
            </div>
        );
    }
}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired
};

export default Search;
