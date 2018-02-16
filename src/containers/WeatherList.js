import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
    renderWeather(cityData) {
        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

    render() {
        const weatherItems = this.props.weather.map((weather) => {
            console.log('weather item:', weather);
            return (
                <tr>
                    <td>{weather.city.name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

export default connect(({ weather }) => {
    return { weather };
})(WeatherList);