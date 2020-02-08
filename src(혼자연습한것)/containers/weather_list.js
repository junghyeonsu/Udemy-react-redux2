import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const CelsiusTemps = temps.map(temps => temps - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon , lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={CelsiusTemps} color="red" units="도" /></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="yellow" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>도시</th>
                        <th>온도 (도)</th>
                        <th>기압 (hPa)</th>
                        <th>습도 (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(weather) {
    return { weather }; // weather : weather
}

export default connect(mapStateToProps)(WeatherList);