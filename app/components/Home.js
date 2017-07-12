import React from 'react';
import LocationInput from './LocationInput';
import api from '../utils/api';
import PropTypes from 'prop-types';
import images from '../utils/images';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }

  componentDidMount(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        api.fetchCurrentWeather(lat, long).then((results) => {
            this.setState(() => {
              return {
                weather: results,
              }
            })
          })
      });
    }
  }

  render() {
    return (
      <div className='home-container'>
        {!this.state.weather ? <div className="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div>
: <Current weather={this.state.weather}/>}
      </div>
    )
  }
}

const Current = (props) => {
  let imgSrc = images[props.weather.weather[0].icon];
  return (
    <div className='current card card-2'>
      <h2 className="text-center">{props.weather.name}</h2>
      <ul className='day-list'>
        <li>
          <img src={imgSrc}/>
          <p>{props.weather.weather[0].description}</p>
          <p>Temp: {props.weather.main.temp}℉</p>
          <p>Humidity: {props.weather.main.humidity}%</p>
          <p>Wind: {props.weather.wind.speed} mph</p>
        </li>
      </ul>
    </div>
  )
}

Current.propTypes = {
  weather: PropTypes.object.isRequired
}

module.exports = Home;
