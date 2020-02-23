import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const text = this.state.text;
        const setAlert = this.props.setAlert;
        if (text === '') {
            setAlert('Please Enter something');
        }
        this.props.searchUsers(text);
    }

    render() {
        return (
            <div>
                <br />
                <form className='input-form' onSubmit={this.onSubmit}>
                        <div className='form-group'>
                        <input type="text" name="text" placeholder=" Search Users ..."
                            value={this.state.text}
                                onChange={this.onChange}
                                className="form-control"
                                id="exampleInput"
                        />
                    </div>
                        <input type="submit" value="Search" className="btn btn-dark" />

                    </form>

            </div>
        )
    }
}
export default Search;
