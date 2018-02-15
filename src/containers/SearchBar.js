import React, { Component } from 'react';
import { connect } from 'redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <form className="input-group">
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
        console.log('term:', this.state.term);
    }
}

export default SearchBar;