import axios from 'axios';

const API_KEY = '6420351a926dc59bf08ae6d12e5cc3f2'; 
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},kr&mode=json&appid=${API_KEY}`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}
