import axios from 'axios';
const API_KEY = '551069f944d08d1197bd48f5863f267e';
//q=washington,us&mode=json
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us&mode=json`;
    const request = axios.get(url)
        .then((response) => {
            if (response && response.data) {
                return response.data;
            }
            return response;
        });
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}