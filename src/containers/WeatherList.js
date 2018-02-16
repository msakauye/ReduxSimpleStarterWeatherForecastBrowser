import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from '../components/Graph';


class WeatherList extends Component {
    renderWeather(cityData) {
        const tempData = cityData.list.map(datum => datum.main.temp);
        const pressureData = cityData.list.map(datum => datum.main.pressure);
        const humidityData = cityData.list.map(datum => datum.main.humidity);

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Graph data={tempData} color="red" unit="K" />
                </td>
                <td>
                    <Graph data={pressureData} color="blue" unit="hPa" />
                </td>
                <td>
                    <Graph data={humidityData} color="green" unit="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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