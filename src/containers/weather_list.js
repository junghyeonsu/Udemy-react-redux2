import React, {Component} from 'react';
import { connect } from 'react-redux'; 

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;

        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>도시</th>
                        <th>온도</th>
                        <th>기압</th>
                        <th>습도</th>
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