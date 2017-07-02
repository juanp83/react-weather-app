import axios from 'axios'

let key = '3a1a38e349673e2cd1b16e9944aa4962';

module.exports = {

  fetchCurrentWeather: (lat, long) => {
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&type=accurate&APPID=' + key + '&cnt=5&units=imperial')

    return axios.get(encodedURI)
      .then((response) => {
        return response.data;
      });
  },

  fetchForecast: (city) => {
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + key + '&cnt=5&units=imperial')

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.list;
      });
  }

}
