import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
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
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }
}

export default connect(null, (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
})(SearchBar);